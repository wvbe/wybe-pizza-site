export class Event<Args extends unknown[] = []> {
	private callbacks: ((...args: Args) => void)[] = [];
	private name?: string;

	constructor(debugName?: string) {
		this.name = debugName;
	}

	on(callback: (...args: Args) => void): () => void {
		if (typeof callback !== 'function') {
			throw new Error(
				`Expected callback of Event(${
					this.name ? `'${this.name}'` : ''
				})#on to be a function, received ${callback}`
			);
		}
		const cancel = () => {
			const index = this.callbacks.indexOf(callback);
			if (index === -1) {
				// Already destroyed
				return;
			}
			this.callbacks.splice(index, 1);
		};
		this.callbacks.push(callback);
		return cancel;
	}

	once(callback: (...args: Args) => void): () => void {
		if (typeof callback !== 'function') {
			throw new Error(
				`Expected callback of Event(${
					this.name ? `'${this.name}'` : ''
				})#once to be a function, received ${callback}`
			);
		}
		const run = (...args: Args) => {
			callback(...args);
			cancel();
		};
		this.callbacks.push(run);
		const cancel = () => {
			const index = this.callbacks.indexOf(run);
			if (index === -1) {
				// Already destroyed
				return;
			}
			this.callbacks.splice(index, 1);
		};
		return cancel;
	}

	emit(...args: Args): void {
		// Create a new array from callbacks so that the loop is not affected
		// while once-ers change the true callbacks list by reference.
		this.callbacks.slice().forEach((cb, i) => {
			cb(...args);
		});
	}

	/**
	 * @deprecated Not in use yet
	 */
	static onAny(callback: () => void, events: Event[]) {
		const destroyers = events.map(event => event.on(callback));
		const destroy = () => {
			// console.log('Destroy Event.onAny');
			destroyers.forEach(destroy => destroy());
		};
		return destroy;
	}

	/**
	 * @deprecated Not in use yet
	 */
	static onceFirst(callback: () => void, events: Event[]) {
		const destroyers: (() => void)[] = [];
		const destroy = () => {
			// console.log('Destroy Event.onceFirst');
			destroyers.forEach(destroy => destroy());
		};
		const cb = () => {
			callback();
			destroyers.forEach(destroy => destroy());
		};
		events.forEach(event => {
			destroyers.push(event.once(cb));
		});
		return destroy;
	}

	clear() {
		// console.log('Event#clear on "' + this.name + '"');
		this.callbacks = [];
	}
}

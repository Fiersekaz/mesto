class Section {
	constructor({ items, renderer }, selector) {
		this._items = items;
		this._renderer = renderer;
		this._selector = selector;
	}

	render() {
		this._items.forEach((element) => {
			const item = this._renderer(element);
			this._selector.append(item);
		});
	}

	addItem(element) {
		this._selector.prepend(element);
	}
}

export default Section;

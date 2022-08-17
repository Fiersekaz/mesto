class Section {
	constructor({ items, renderer }, container) {
		this._items = items;
		this._renderer = renderer;
		this._container = container;
	}

	render() {
		this._items.forEach((element) => {
			const item = this._renderer(element);
			this._container.append(item);
		});
	}

	addItem(element) {
		this._container.prepend(element);
	}
}

export default Section;

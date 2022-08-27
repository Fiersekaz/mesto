class Section {
	constructor({ renderer }, container) {
		this._renderer = renderer;
		this._container = container;
	}

	renderItems(data) {
		data.forEach((element) => {
			const item = this._renderer(element);
		});
	}

	addItem(element) {
		this._container.prepend(element);
	}

	insertItem(element) {
		this._container.append(element);
	}
}

export default Section;

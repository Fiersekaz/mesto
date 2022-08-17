
class Popup {
	constructor(container) {
		this._container = container;
		this._closeButton = this._container.querySelector(".popup__close");
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	open() {
		this._container.classList.add("popup_is-opened");
		document.addEventListener("keydown", this._handleEscClose);
	}

	close() {
		this._container.classList.remove("popup_is-opened");
		document.removeEventListener("keydown",this._handleEscClose);
	}

	_handleEscClose(event) {
		if (event.key === "Escape") {
			this.close();
		}
	}

	_isOverlay(event) {
		return (
			event.target.classList.contains("popup")
		);
	}

	_closeOverlay(event) {
		if (this._isOverlay(event)) {
			this.close();
		}
	}

	setEventListeners() {
		this._closeButton.addEventListener("click", () => this.close());
		this._container.addEventListener("click", (event) => this._closeOverlay(event));
	}
}

export default Popup;
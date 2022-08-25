import Popup from "./Popup.js";

class PopupWithConfirm extends Popup {
	constructor(container, callback) {
		super(container);
		this._callback = callback;
		this._form = container.querySelector("form");
		this._buttonElement = this._form.querySelector(".button");
	}

	open(card) {
		super.open();
		this._card = card;
	}

	setEventListeners() {
		super.setEventListeners();

		this._form.addEventListener("submit", (event) => {
			event.preventDefault();
			this._callback(this._card);
			this.close();
		});
	}
}
export default PopupWithConfirm;

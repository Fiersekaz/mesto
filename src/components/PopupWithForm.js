import Popup from "./popup.js";
class PopupWithForm extends Popup {
	constructor(selector, callback) {
		super(selector);
		this._callback = callback;
        this._inputsList = selector.querySelectorAll(".field__input");
		this._form = selector.querySelector("form");
		this._buttonElement = this._form.querySelector(".button");
	}

	_getInputValues() {
        const formValues = {};
		this._inputsList.forEach((input) => {
			formValues[input.name] = input.value;
		});
		return formValues;
	}

	close() {
		super.close();
		this._form.reset();
	}

	setEventListeners() {
		super.setEventListeners();

		this._form.addEventListener("submit", (event) => {
			event.preventDefault();
			this._callback(this._getInputValues());
			this.close();
		});
	}
}
export default PopupWithForm;

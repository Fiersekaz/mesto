import Popup from "./Popup.js";
class PopupWithForm extends Popup {
	constructor(container, callback) {
		super(container);
		this._callback = callback;
		this._inputsList = container.querySelectorAll(".field__input");
		this._form = container.querySelector("form");
		this._buttonElement = this._form.querySelector(".button");
		this._buttonText = this._buttonElement.textContent;
	}

	setLoading(loading) {
		this._buttonElement.textContent = loading ? "Сохранение..." : this._buttonText;
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
		});
	}
}
export default PopupWithForm;

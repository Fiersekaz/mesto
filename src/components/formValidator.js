export class FormValidator {
	constructor(settings, formElement) {
		this._settings = settings;
		this._formElement = formElement;
		this._inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
		this._buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
	}

	enableValidation = () => {
			this._formElement.addEventListener("submit", (event) => {
				event.preventDefault();
			});
			this._setEventListeners();
	};

	_setEventListeners = () => {
		// const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
		this._inputList.forEach((inputElement) => {
			inputElement.addEventListener("input", () => {
				this._validateIput(inputElement);
				this._toggleButtonState();
			});
		});
	};

	_validateIput = (inputElement) => {
		if (this._isValid(inputElement)) {
			this._hideInputError(inputElement);
		} else {
			this._showInputError(inputElement, inputElement.validationMessage);
		}
	};

	_showInputError = (inputElement, errorMessage) => {
		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		inputElement.classList.add(this._settings.inputErrorClass);
		errorElement.textContent = errorMessage;
		errorElement.classList.add(this._settings.errorClass);
	};

	_hideInputError = (inputElement) => {
		const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
		inputElement.classList.remove(this._settings.inputErrorClass);
		errorElement.classList.remove(this._settings.errorClass);
		errorElement.textContent = "";
	};

	_hasInvalidInput = () => {
		return this._inputList.some((inputElement) => {
			return !this._isValid(inputElement);
		});
	};

	_isValid = (inputElement) => {
		return inputElement.validity.valid;
	};

	_toggleButtonState = () => {
		if (!this._hasInvalidInput(this._inputList)) {
			this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
			this._buttonElement.removeAttribute("disabled");
		} else {
			this._buttonElement.classList.add(this._settings.inactiveButtonClass);
			this._buttonElement.setAttribute("disabled", "disabled");
		}
	};
}

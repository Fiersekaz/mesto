export class FormValidator {
	constructor(settings, formElement) {
		this._settings = settings;
		this._formElement = formElement;
	}

	enableValidation = () => {
			this._formElement.addEventListener("submit", (event) => {
				event.preventDefault();
			});
			this._setEventListeners();
	};

	_setEventListeners = () => {
		const inputList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
		const buttonElement = this._formElement.querySelector(this._settings.submitButtonSelector);
		inputList.forEach((inputElement) => {
			inputElement.addEventListener("input", () => {
				this._validateIput(inputElement);
				this._toggleButtonState(inputList, buttonElement);
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

	_hasInvalidInput = (inputList) => {
		return inputList.some((inputElement) => {
			return !this._isValid(inputElement);
		});
	};

	_isValid = (inputElement) => {
		return inputElement.validity.valid;
	};

	_toggleButtonState = (inputList, buttonElement) => {
		if (!this._hasInvalidInput(inputList)) {
			buttonElement.classList.remove(this._settings.inactiveButtonClass);
			buttonElement.removeAttribute("disabled");
		} else {
			buttonElement.classList.add(this._settings.inactiveButtonClass);
			buttonElement.setAttribute("disabled", "disabled");
		}
	};
}

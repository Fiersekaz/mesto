const formConstants = {
	formSelector: ".popup__form",
	inputSelector: ".field__input",
	inputErrorClass: "field__input_type_error",
	errorClass: "field__error_active",
	submitButtonSelector: ".button",
	inactiveButtonClass: "button_disabled",
};

const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll(formConstants.formSelector));
	formList.forEach((formElement) => {
		formElement.addEventListener("submit", (event) => {
			event.preventDefault();
		});
		setEventListeners(formElement);
	});
};

const setEventListeners = (formElement) => {
	const inputList = Array.from(formElement.querySelectorAll(formConstants.inputSelector));
	const buttonElement = formElement.querySelector(formConstants.submitButtonSelector);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener("input", () => {
			validateIput(formElement, inputElement);
			toggleButtonState(inputList, buttonElement);
		});
	});
};

const validateIput = (formElement, inputElement) => {
	if (isValid(inputElement)) {
		hideInputError(formElement, inputElement);
	} else {
		showInputError(formElement, inputElement, inputElement.validationMessage);
	}
};

const showInputError = (formElement, inputElement, errorMessage) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(formConstants.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(formConstants.errorClass);
};

const hideInputError = (formElement, inputElement) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(formConstants.inputErrorClass);
	errorElement.classList.remove(formConstants.errorClass);
	errorElement.textContent = "";
};

const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
		return !isValid(inputElement);
	});
};

const isValid = (inputElement) => {
	return inputElement.validity.valid;
};

const toggleButtonState = (inputList, buttonElement) => {
	if (!hasInvalidInput(inputList)) {
		buttonElement.classList.remove(formConstants.inactiveButtonClass);
		buttonElement.removeAttribute("disabled");
	} else {
		buttonElement.classList.add(formConstants.inactiveButtonClass);
		buttonElement.setAttribute("disabled", "disabled");
	}
};

enableValidation();

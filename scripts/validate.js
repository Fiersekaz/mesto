const formSettings = {
	formSelector: ".popup__form",
	inputSelector: ".field__input",
	inputErrorClass: "field__input_type_error",
	errorClass: "field__error_active",
	submitButtonSelector: ".button",
	inactiveButtonClass: "button_disabled",
};

const enableValidation = (settings) => {
	const formList = Array.from(document.querySelectorAll(settings.formSelector));
	formList.forEach((formElement) => {
		formElement.addEventListener("submit", (event) => {
			event.preventDefault();
		});
		setEventListeners(formElement, settings);
	});
};

const setEventListeners = (formElement, settings) => {
	const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
	const buttonElement = formElement.querySelector(settings.submitButtonSelector);
	inputList.forEach((inputElement) => {
		inputElement.addEventListener("input", () => {
			validateIput(formElement, inputElement, settings);
			toggleButtonState(inputList, buttonElement, settings);
		});
	});
};

const validateIput = (formElement, inputElement, settings) => {
	if (isValid(inputElement)) {
		hideInputError(formElement, inputElement, settings);
	} else {
		showInputError(formElement, inputElement, inputElement.validationMessage, settings);
	}
};

const showInputError = (formElement, inputElement, errorMessage, settings) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.add(settings.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(settings.errorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
	const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
	inputElement.classList.remove(settings.inputErrorClass);
	errorElement.classList.remove(settings.errorClass);
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

const toggleButtonState = (inputList, buttonElement, settings) => {
	if (!hasInvalidInput(inputList)) {
		buttonElement.classList.remove(settings.inactiveButtonClass);
		buttonElement.removeAttribute("disabled");
	} else {
		buttonElement.classList.add(settings.inactiveButtonClass);
		buttonElement.setAttribute("disabled", "disabled");
	}
};

enableValidation(formSettings);

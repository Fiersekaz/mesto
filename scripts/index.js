import { Card } from "./card.js";
import {
	profileAbout,
	profileEdit,
	popupProfileWindow,
	popupCloseProfile,
	profileForm,
	profileNameInput,
	profileAboutInput,
	profileName,
	elements,
	cardAddButton,
	popupCardWindow,
	newCardForm,
	buttonAddCard,
	popupCloseCard,
	popupImageClose,
	popupImageWindow,
	templateCard
} from "./constans.js";

import { initialCards } from "./initialCards.js";
import { FormValidator } from "./formValidator.js";
import {
	openPopupProfile,
	openPopupWindow,
	closeOverlay,
	closePopupWindow
} from "./popup.js";

const formSettings = {
	formSelector: ".popup__form",
	inputSelector: ".field__input",
	inputErrorClass: "field__input_type_error",
	errorClass: "field__error_active",
	submitButtonSelector: ".button",
	inactiveButtonClass: "button_disabled",
};

initialCards.forEach((element) => {
	const card = createCard(element);
	renderCard(card);
});

function createCard(element) {
	const card = new Card(element.name, element.link, templateCard);
	return card.generate();
}

const formProfile = document.querySelector(".popup__edit-form");
const profileValidator = new FormValidator(formSettings, formProfile);
profileValidator.enableValidation();

const formAddCard = document.querySelector(".popup__add-form");
const addCardValidator = new FormValidator(formSettings, formAddCard);
addCardValidator.enableValidation();

function renderCard(element) {
	elements.prepend(element);
}

function handleProfileFormSubmit(event) {
	event.preventDefault();
	profileName.textContent = profileNameInput.value;
	profileAbout.textContent = profileAboutInput.value;
	closePopupWindow(popupProfileWindow);
}

function handleCardSubmit(event) {
	event.preventDefault();
	const card = new Card(event.target.elements.imagename.value, event.target.elements.imagelink.value, templateCard);
	renderCard(card.generate());
	closePopupWindow(popupCardWindow);
	event.target.reset();
	buttonAddCard.setAttribute("disabled", "disabled");
	buttonAddCard.classList.add("button_disabled");
}

profileEdit.addEventListener("click", openPopupProfile);
popupCloseProfile.addEventListener("click", () => closePopupWindow(popupProfileWindow));
profileForm.addEventListener("submit", handleProfileFormSubmit);

popupImageClose.addEventListener("click", () => closePopupWindow(popupImageWindow));

cardAddButton.addEventListener("click", () => openPopupWindow(popupCardWindow));
popupCloseCard.addEventListener("click", () => closePopupWindow(popupCardWindow));
newCardForm.addEventListener("submit", handleCardSubmit);
popupImageWindow.addEventListener("click", closeOverlay);
popupCardWindow.addEventListener("click", closeOverlay);
popupProfileWindow.addEventListener("click", closeOverlay);

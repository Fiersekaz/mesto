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
} from "./constans.js";

import { FormValidator } from "./validate.js";
import {
	openPopupProfile,
	closePopupProfile,
	closePopupImage,
	openPopupCard,
	closePopupCard,
	closeImageOverlay,
	closeOverlay,
} from "./popup.js";

const initialCards = [
	{
		name: "Архыз",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
	},
	{
		name: "Челябинская область",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
	},
	{
		name: "Иваново",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
	},
	{
		name: "Камчатка",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
	},
	{
		name: "Холмогорский район",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
	},
	{
		name: "Байкал",
		link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
	},
];

const formSettings = {
	formSelector: ".popup__form",
	inputSelector: ".field__input",
	inputErrorClass: "field__input_type_error",
	errorClass: "field__error_active",
	submitButtonSelector: ".button",
	inactiveButtonClass: "button_disabled",
};

// Лайк
// const likeButton = templateCard.querySelector(".element__like");

// Функции

initialCards.forEach((element) => {
	const card = new Card(element.name, element.link, ".template-card");
	renderCard(card.generate());
});

const formList = Array.from(document.querySelectorAll(formSettings.formSelector));
formList.forEach((element) => {
	const formValidator = new FormValidator(formSettings, element);
	formValidator.enableValidation();
});

// function createCard(name, link) {
// 	const newElement = templateCard.cloneNode(true);

// 	const elementImage = newElement.querySelector(".element__image");
// 	const elementName = newElement.querySelector(".element__name");
// 	const elementDelete = newElement.querySelector(".element__delete");
// 	const elementLike = newElement.querySelector(".element__like");

// 	elementName.textContent = name;
// 	elementImage.src = link;
// 	elementImage.alt = name;

// 	elementDelete.addEventListener("click", deleteElement);
// 	elementLike.addEventListener("click", likeCard);
// 	elementImage.addEventListener("click", openImageInPopup);

// 	return newElement;
// }

function renderCard(element) {
	elements.prepend(element);
}

function handleProfileFormSubmit(event) {
	event.preventDefault();
	profileName.textContent = profileNameInput.value;
	profileAbout.textContent = profileAboutInput.value;
	closePopupProfile();
}

function handleCardSubmit(event) {
	event.preventDefault();
	// const card = createCard(event.target.elements.imagename.value, event.target.elements.imagelink.value);
	const card = new Card(event.target.elements.imagename.value, event.target.elements.imagelink.value, ".template-card");
	renderCard(card.generate());
	closePopupCard();
	event.target.reset();
	buttonAddCard.setAttribute("disabled", "disabled");
	buttonAddCard.classList.add("button_disabled");
}

// function deleteElement(event) {
// 	event.target.closest(".element").remove();
// }

// function likeCard(event) {
// 	event.target.classList.toggle("element__like_active");
// }

// function openImageInPopup(event) {
// 	openPopupWindow(popupImageContainer);

// 	popupImage.src = event.target.getAttribute("src");
// 	popupImageAbout.textContent = event.target.getAttribute("alt");
// 	popupImage.alt = event.target.getAttribute("alt");
// }

profileEdit.addEventListener("click", openPopupProfile);
popupCloseProfile.addEventListener("click", closePopupProfile);
profileForm.addEventListener("submit", handleProfileFormSubmit);

popupImageClose.addEventListener("click", closePopupImage);

cardAddButton.addEventListener("click", openPopupCard);
popupCloseCard.addEventListener("click", closePopupCard);
newCardForm.addEventListener("submit", handleCardSubmit);
popupImageWindow.addEventListener("click", closeOverlay);
popupCardWindow.addEventListener("click", closeOverlay);
popupProfileWindow.addEventListener("click", closeOverlay);

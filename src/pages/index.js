import '../pages/index.css'; 
import { Card } from "../components/card.js";
import {
	profileAbout,
	popupCardWindow,
	popupProfileWindow,
	profileNameInput,
	profileAboutInput,
	profileName,
	elements,
	cardAddButton,
	profileEdit,
	popupImageWindow,
	templateCard,
	profileForm,
	newCardForm
} from "../utils/constans.js";

import { initialCards } from "../utils/constans.js";
import { FormValidator } from "../components/formValidator.js";

// import { openPopupProfile, openPopupWindow, closeOverlay, closePopupWindow } from "./popup.js";

import Section from "../components/section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/userinfo.js";

const formSettings = {
	formSelector: ".popup__form",
	inputSelector: ".field__input",
	inputErrorClass: "field__input_type_error",
	errorClass: "field__error_active",
	submitButtonSelector: ".button",
	inactiveButtonClass: "button_disabled",
};

// initialCards.forEach((element) => {
// 	const card = createCard(element);
// 	renderCard(card);
// });

// function createCard(element) {
// 	const card = new Card(element.name, element.link, templateCard);
// 	return card.generate();
// }


const profileValidator = new FormValidator(formSettings, profileForm);
profileValidator.enableValidation();


const addCardValidator = new FormValidator(formSettings, newCardForm);
addCardValidator.enableValidation();

function renderCard(element) {
	elements.prepend(element);
}

function handleCardSubmit(formValues) {
	const card = new Card(formValues.imagename, formValues.imagelink, templateCard, handleCardClick);
	cardList.addItem(card.generate());
	// event.preventDefault();
	// const card = new Card(event.target.elements.imagename.value, event.target.elements.imagelink.value, templateCard, handleCardClick);
	// renderCard(card.generate());
	// closePopupWindow(popupCardWindow);
	// event.target.reset();
	// buttonAddCard.setAttribute("disabled", "disabled");
	// buttonAddCard.classList.add("button_disabled");
}

const cardList = new Section(
	{
		items: initialCards,
		renderer: (element) => {
			const card = new Card(element.name, element.link, templateCard, handleCardClick);
			renderCard(card.generate());
		},
	},
	elements
);
cardList.render();

const popupImageValue = new PopupWithImage(popupImageWindow);
popupImageValue.setEventListeners();

const popupAddCard = new PopupWithForm(popupCardWindow, handleCardSubmit);
popupAddCard.setEventListeners();

const infoProfile = new UserInfo({ name: profileName, about: profileAbout });

// function handleProfileFormSubmit() {
// 	profileName.textContent = profileNameInput.v;
// 	profileAbout.textContent = profileAboutInput.value;

// }

const popupEditProfile = new PopupWithForm(popupProfileWindow, (data) => {
	console.log(data);
	infoProfile.setUserInfo(data);
});

popupEditProfile.setEventListeners();

function handleCardClick(event) {
	popupImageValue.open(event.target.src, event.target.alt);
}
// popupImageWindow.addEventListener("click", handleCardClick);

// profileEdit.addEventListener("click", openPopupProfile);
// popupCloseProfile.addEventListener("click", () => closePopupWindow(popupProfileWindow));
// profileForm.addEventListener("submit", handleProfileFormSubmit);
profileEdit.addEventListener("click", () => {
	popupEditProfile.open();
	const obj = infoProfile.getUserInfo();
	// console.log(obj);
	profileNameInput.value = obj.name;
	profileAboutInput.value = obj.about;
});

// popupImageClose.addEventListener("click", () => closePopupWindow(popupImageWindow));
// cardAddButton.addEventListener("click", () => openPopupWindow(popupCardWindow));
// popupCloseCard.addEventListener("click", () => closePopupWindow(popupCardWindow));
// newCardForm.addEventListener("submit", handleCardSubmit);
// popupImageWindow.addEventListener("click", closeOverlay);
// popupCardWindow.addEventListener("click", closeOverlay);
// popupProfileWindow.addEventListener("click", closeOverlay);
cardAddButton.addEventListener("click", () => popupAddCard.open());

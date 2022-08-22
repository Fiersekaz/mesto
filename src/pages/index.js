import "../pages/index.css";
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
	newCardForm,
	formSettings,
	popupEditAvatar,
	popupFormAvatar
} from "../utils/constans.js";

import { initialCards } from "../utils/constans.js";
import { FormValidator } from "../components/formValidator.js";
import Section from "../components/section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/userinfo.js";



const profileValidator = new FormValidator(formSettings, profileForm);
profileValidator.enableValidation();

const addCardValidator = new FormValidator(formSettings, newCardForm);
addCardValidator.enableValidation();

function createCard(name, link) {
	const card = new Card(name, link, templateCard, handleCardClick);
	return card.generate();
}

// function renderCard(element) {
// 	elements.prepend(element);
// }

// function handleCardSubmit(formValues) {
// 	const card = createCard(formValues.imagename, formValues.imagelink);
// 	renderCard(card);
// }

const cardList = new Section(
	{
		items: initialCards,
		renderer: (element) => {
			const card = createCard(element.name, element.link);
			cardList.addItem(card);
		},
	},
	elements
);
cardList.render();

const popupImageValue = new PopupWithImage(popupImageWindow);
popupImageValue.setEventListeners();

const popupAddCard = new PopupWithForm(popupCardWindow, (formValues) => {
	cardList.addItem(createCard(formValues.imagename, formValues.imagelink))
});
popupAddCard.setEventListeners();

const infoProfile = new UserInfo({ name: profileName, about: profileAbout });

const popupEditProfile = new PopupWithForm(popupProfileWindow, (data) => {
	infoProfile.setUserInfo(data);
});

// const profileEditAvatar = new PopupWithForm(popupEditAvatar)

popupEditProfile.setEventListeners();

function handleCardClick(event) {
	popupImageValue.open(event.target.src, event.target.alt);
}

profileEdit.addEventListener("click", () => {
	popupEditProfile.open();
	const obj = infoProfile.getUserInfo();
	profileNameInput.value = obj.name;
	profileAboutInput.value = obj.about;
	profileValidator.resetValidation();
});
cardAddButton.addEventListener("click", () => {
	addCardValidator.resetValidation();
	popupAddCard.open();
});

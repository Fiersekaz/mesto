import Api from "../components/Api.js";
import "../pages/index.css";
import Card from "../components/Card.js";
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
	profileAvatar,
	popupEditAvatar,
	popupFormAvatar,
	popupAvatarButton,
	popupDeleteAgree,
} from "../utils/constans.js";

import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirm from "../components/PopupWithConfirm.js";
import UserInfo from "../components/Userinfo.js";

const api = new Api({
	baseUrl: "https://mesto.nomoreparties.co/v1/cohort-48",
	token: "a1b090fc-7b1d-4f72-896c-b01ada5ed19a",
});

Promise.all([api.getUserInfo(), api.getInitialCard()])
	.then(([userInfo, cards]) => {
		infoProfile.setUserInfo({
			name: userInfo.name,
			about: userInfo.about,
		});
		infoProfile.setUserId(userInfo._id);
		infoProfile.setUserAvatar(userInfo.avatar);
		cardList.renderItems(cards);
		// cards.forEach((element) => {
		// 	const card = createCard(element._id, element.name, element.link, element.likes, element.owner._id);
		// 	cardList.addItem(card);
		// });
	})
	.catch((error) => {
		console.log(`Возникла ошибка: ${error}`);
	});

const profileValidator = new FormValidator(formSettings, profileForm);
const addCardValidator = new FormValidator(formSettings, newCardForm);
const avatarValidation = new FormValidator(formSettings, popupFormAvatar);

const cardList = new Section(
	{
		renderer: (element) => {
			const card = createCard(element._id, element.name, element.link, element.likes, element.owner._id);
			cardList.insertItem(card);
		},
	},
	elements
);

const popupAvatar = new PopupWithForm(popupEditAvatar, handleFormSubmitAvatar);
const popupAddCard = new PopupWithForm(popupCardWindow, handleCreateCard);
const popupEditProfile = new PopupWithForm(popupProfileWindow, handleEditProfile);
const popupImageValue = new PopupWithImage(popupImageWindow);
const popupCardRemove = new PopupWithConfirm(popupDeleteAgree, removeCard);
const infoProfile = new UserInfo({ name: profileName, about: profileAbout, avatar: profileAvatar });

function createCard(id, name, link, likes, ownerId) {
	const card = new Card(
		{ id, name, link, likes },
		templateCard,
		handleCardClick,
		handleCardRemove,
		ownerId,
		infoProfile.getUserId(),
		handleCardLike
	);
	return card.generate();
}

function handleFormSubmitAvatar(data) {
	popupAvatar.setLoading(true);
	api
		.setUserAvatar(data)
		.then((result) => {
			infoProfile.setUserAvatar(result.avatar);
			popupAvatar.close();
		})
		.catch((error) => {
			console.log(`ошибка ${error}`);
		})
		.finally(() => {
			popupAvatar.setLoading(false);
		});
}

function handleCardRemove(card) {
	popupCardRemove.open(card);
}

function removeCard(card) {
	api
		.removeCard(card.getId())
		.then(() => {
			card.delete();
			popupCardRemove.close();
		})
		.catch((error) => {
			console.log(`ошибка ${error}`);
		});
}

function handleCardLike(card) {
	if (card.checkUserLike()) {
		api
			.removeLike(card.getId())
			.then((result) => {
				card.setLikes(result.likes);
				card.unlike();
			})
			.catch((error) => {
				console.log(`ошибка ${error}`);
			});
	} else {
		api
			.createLike(card.getId())
			.then((result) => {
				card.setLikes(result.likes);
				card.like();
			})
			.catch((error) => {
				console.log(`ошибка ${error}`);
			});
	}
}

function handleCreateCard(data) {
	popupAddCard.setLoading(true);
	api
		.createCard({ name: data.imagename, link: data.imagelink })
		.then((result) => {
			cardList.addItem(createCard(result._id, result.name, result.link, result.likes, result.owner._id));
			popupAddCard.close();
		})
		.catch((error) => {
			console.log(`ошибка ${error}`);
		})
		.finally(() => {
			popupAddCard.setLoading(false);
		});
}

function handleEditProfile(data) {
	popupEditProfile.setLoading(true);
	api
		.setUserInfo(data)
		.then((result) => {
			infoProfile.setUserInfo(result);
			popupEditProfile.close();
		})
		.catch((error) => {
			console.log(`ошибка ${error}`);
		})
		.finally(() => {
			popupEditProfile.setLoading(false);
		});
}

function handleCardClick(event) {
	popupImageValue.open(event.target.src, event.target.alt);
}

profileEdit.addEventListener("click", () => {
	popupEditProfile.open();
	const userData = infoProfile.getUserInfo();
	profileNameInput.value = userData.name;
	profileAboutInput.value = userData.about;
	profileValidator.resetValidation();
});
cardAddButton.addEventListener("click", () => {
	addCardValidator.resetValidation();
	popupAddCard.open();
});

popupAvatarButton.addEventListener("click", () => {
	avatarValidation.resetValidation();
	popupAvatar.open();
});

popupAvatar.setEventListeners();
popupCardRemove.setEventListeners();
popupAddCard.setEventListeners();
popupImageValue.setEventListeners();
popupEditProfile.setEventListeners();

profileValidator.enableValidation();
addCardValidator.enableValidation();
avatarValidation.enableValidation();

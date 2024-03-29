// Попап профиль
export const profileEdit = document.querySelector(".profile__edit");
export const popupProfileWindow = document.querySelector(".popup_value_edit-profile");
export const popupCloseProfile = document.querySelector(".popup__close_profile-window");
export const profileForm = document.querySelector(".popup__edit-form");
export const profileNameInput = profileForm.querySelector(".field__input_profile-name");
export const profileAboutInput = profileForm.querySelector(".field__input_profile-about");
export const profileInfo = document.querySelector(".profile__info");
export const profileName = profileInfo.querySelector(".profile__name");
export const profileAbout = profileInfo.querySelector(".profile__about");
export const profileAvatar = profileInfo.querySelector(".profile__avatar");

// Рендеринг карточек
export const elements = document.querySelector(".elements");
export const templateCard = ".template-card";

// Попап добавление карточки
export const cardAddButton = document.querySelector(".profile__add");
export const popupCardWindow = document.querySelector(".popup_value_add-place");
export const newCardForm = popupCardWindow.querySelector(".popup__add-form");
export const buttonAddCard = popupCardWindow.querySelector(".button_card");
export const popupCloseCard = document.querySelector(".popup__close_card-window");

// Открытие изображения
export const popupImageWindow = document.querySelector(".popup_value_image");
export const popupImage = popupImageWindow.querySelector(".popup__image");
export const popupImageAbout = popupImageWindow.querySelector(".popup__about");
// export const popupImageClose = document.querySelector(".popup__close_image-window");
export const popupImageOverlay = document.querySelector(".popup__container_value_image");


//Редактор аватарки
export const popupEditAvatar = document.querySelector(".popup_value_avatar");
export const popupFormAvatar = popupEditAvatar.querySelector(".popup__form_avatar");
export const popupAvatarButton = document.querySelector(".profile__avatar-edit");

//Подтверждение удаления
export const popupDeleteAgree = document.querySelector(".popup_value_delete");

export const formSettings = {
	formSelector: ".popup__form",
	inputSelector: ".field__input",
	inputErrorClass: "field__input_type_error",
	errorClass: "field__error_active",
	submitButtonSelector: ".button",
	inactiveButtonClass: "button_disabled",
};

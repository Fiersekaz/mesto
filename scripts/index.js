// Попап профиль
const profileEdit = document.querySelector(".profile__edit");
const popupProfileWindow = document.querySelector(".popup_value_edit-profile");
const popupCloseProfile = document.querySelector(".popup__close_profile-window");
const profileForm = document.querySelector(".popup__edit-form");
const profileNameInput = profileForm.querySelector(".field__input_profile-name");
const profileAboutInput = profileForm.querySelector(".field__input_profile-about");
const profileInfo = document.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__name");
const profileAbout = profileInfo.querySelector(".profile__about");

// Рендеринг карточек
const elements = document.querySelector(".elements");
const templateCard = document.querySelector(".template-card").content;

// Попап добавление карточки
const cardAddButton = document.querySelector(".profile__add");
const popupCardWindow = document.querySelector(".popup_value_add-place");
const newCardForm = popupCardWindow.querySelector(".popup__add-form");
const buttonAddCard = popupCardWindow.querySelector('.button_card');
const popupCloseCard = document.querySelector(".popup__close_card-window");

// Открытие изображения
const popupImageContainer = document.querySelector(".popup_value_image");
const popupImage = popupImageContainer.querySelector(".popup__image");
const popupImageAbout = popupImageContainer.querySelector(".popup__about");
const popupImageClose = document.querySelector(".popup__close_image-window");
const popupImageOverlay = document.querySelector(".popup__container_value_image");

// Лайк
const likeButton = templateCard.querySelector(".element__like");

// Функции

initialCards.forEach((element) => {
	const card = createCard(element.name, element.link);
	renderCard(card);
});

function createCard(name, link) {
	const newElement = templateCard.cloneNode(true);

	const elementImage = newElement.querySelector(".element__image");
	const elementName = newElement.querySelector(".element__name");
	const elementDelete = newElement.querySelector(".element__delete");
	const elementLike = newElement.querySelector(".element__like");

	elementName.textContent = name;
	elementImage.src = link;
	elementImage.alt = name;

	elementDelete.addEventListener("click", deleteElement);
	elementLike.addEventListener("click", likeCard);
	elementImage.addEventListener("click", openImageInPopup);

	return newElement;
}

function renderCard(element) {
	elements.prepend(element);
}

function openPopupProfile() {
	profileNameInput.value = profileName.textContent;
	profileAboutInput.value = profileAbout.textContent;
	openPopupWindow(popupProfileWindow);
}

function closePopupProfile() {
	closePopupWindow(popupProfileWindow);
}

function handleProfileFormSubmit(event) {
	event.preventDefault();
	profileName.textContent = profileNameInput.value;
	profileAbout.textContent = profileAboutInput.value;
	closePopupProfile();
}

function closePopupImage() {
	closePopupWindow(popupImageContainer);
}

function openPopupCard() {
	openPopupWindow(popupCardWindow);
}

function closePopupCard() {
	closePopupWindow(popupCardWindow);
}

function handleCardSubmit(event) {
	event.preventDefault();
	const card = createCard(event.target.elements.imagename.value, event.target.elements.imagelink.value);
	renderCard(card);
	closePopupCard();
	event.target.reset();
	buttonAddCard.setAttribute("disabled", "disabled");
	buttonAddCard.classList.add("button_disabled");
}

function deleteElement(event) {
	event.target.closest(".element").remove();
}

function likeCard(event) {
	event.target.classList.toggle("element__like_active");
}

function openImageInPopup(event) {
	openPopupWindow(popupImageContainer);

	popupImage.src = event.target.getAttribute("src");
	popupImageAbout.textContent = event.target.getAttribute("alt");
	popupImage.alt = event.target.getAttribute("alt");
}

function isOverlay(event) {
	return event.target.classList.contains("popup__container_value_image") || event.target.classList.contains("popup_is-opened");
}

function closeImageOverlay(event) {
	if (isOverlay(event)) {
		closePopupImage();
	}
}

function closeOtherOverlay(event) {
	if (isOverlay(event)) {
		closePopupWindow(event.target);
	}
}

// function isOtherOverlay(event) {
// 	return event.target.classList.contains("popup_is-opened");
// }


function openPopupWindow(element) {
	element.classList.add("popup_is-opened");
	document.addEventListener('keydown', closeByEscape);
}

function closePopupWindow(element) {
	element.classList.remove("popup_is-opened");
	document.removeEventListener('keydown', closeByEscape);
}

// document.addEventListener("keydown", function (event) {
// 	if (event.key === "Escape" || event.key === "Esc") {
// 		const popup = document.querySelector(".popup_is-opened");
// 		closePopupWindow(popup);
// 	}
// });

function closeByEscape(event) {
	if (event.key === 'Escape') {
	  const openedPopup = document.querySelector(".popup_is-opened")
	  closePopupWindow(openedPopup);
	}
  }


profileEdit.addEventListener("click", openPopupProfile);
popupCloseProfile.addEventListener("click", closePopupProfile);
profileForm.addEventListener("submit", handleProfileFormSubmit);

popupImageClose.addEventListener("click", closePopupImage);

cardAddButton.addEventListener("click", openPopupCard);
popupCloseCard.addEventListener("click", closePopupCard);
newCardForm.addEventListener("submit", handleCardSubmit);
popupImageOverlay.addEventListener("click", closeImageOverlay);
popupCardWindow.addEventListener("click", closeOtherOverlay);
popupProfileWindow.addEventListener("click", closeOtherOverlay);

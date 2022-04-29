// Попап профиль
const profileEdit = document.querySelector(".profile__edit");
const popupProfileWindow = document.querySelector(".popup_value_edit-profile");
const popupCloseProfile = document.querySelector(".popup__close_profile-window");
const formElement = document.querySelector(".popup__edit-form");
const nameInput = formElement.querySelector(".field__input_profile-name");
const jobInput = formElement.querySelector(".input_value_profile-about");
const profileInfo = document.querySelector(".profile__info");
const profileName = profileInfo.querySelector(".profile__name");
const profileAbout = profileInfo.querySelector(".profile__about");

// Рендеринг карточек
const elements = document.querySelector(".elements");
const templateCards = document.querySelector(".template-cards").content;

// Попап добавление карточки
const cardAddButton = document.querySelector(".profile__add");
const popupCardWindow = document.querySelector(".popup_value_add-place");
const newCardForm = popupCardWindow.querySelector(".popup__add-form");
const popupCloseCard = document.querySelector(".popup__close_card-window");

// Открытие изображения
const popupImage = document.querySelector(".popup_value_image");
const popupCloseImage = document.querySelector(".popup__close_image-window");
const imageOverlay = document.querySelector(".popup__container_value_image");

// Лайк
const likeButton = templateCards.querySelector(".element__like");

// Функции

initialCards.forEach((element) => {
	const card = createCard(element.name, element.link);
	renderCard(card);
});

function createCard(name, link) {
	const newElement = templateCards.cloneNode(true);

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
	nameInput.value = profileName.textContent;
	jobInput.value = profileAbout.textContent;
	openPopupWindow(popupProfileWindow);
}

function closePopupProfile() {
	closePopupWindow(popupProfileWindow);
}

function formSubmitHandler(evt) {
	evt.preventDefault();
	profileName.textContent = nameInput.value;
	profileAbout.textContent = jobInput.value;
	closePopupProfile();
}

function closePopupImage() {
	closePopupWindow(popupImage);
}

function openPopupCard() {
	openPopupWindow(popupCardWindow);
}

function closePopupCard() {
	closePopupWindow(popupCardWindow);
}

function cardSubmitHandler(event) {
	event.preventDefault();
	const card = createCard(event.target.elements.imagename.value, event.target.elements.imagelink.value);
	renderCard(card);
	closePopupCard();
	event.target.reset();
}

function deleteElement(event) {
	event.target.closest(".element").remove();
}

function likeCard(event) {
	event.target.classList.toggle("element__like_active");
}

function openImageInPopup(event) {
	openPopupWindow(popupImage);

	popupImage.querySelector(".popup__image").src = event.target.getAttribute("src");
	popupImage.querySelector(".popup__about").textContent = event.target.getAttribute("alt");
}

function isOverlay(event) {
	return event.target.classList.contains("popup__container_value_image");
}

function closeOverlay(event) {
	if (isOverlay(event)) {
		closePopupImage();
	}
}

function openPopupWindow(element) {
	element.classList.add("popup_is-opened");
}

function closePopupWindow(element) {
	element.classList.remove("popup_is-opened");
}

document.addEventListener("keydown", function (event) {
	if (event.key === "Escape" || event.key === "Esc") {
		const popup = document.querySelector(".popup_is-opened");
		closePopupWindow(popup);
	}
});

profileEdit.addEventListener("click", openPopupProfile);
popupCloseProfile.addEventListener("click", closePopupProfile);
formElement.addEventListener("submit", formSubmitHandler);

popupCloseImage.addEventListener("click", closePopupImage);

cardAddButton.addEventListener("click", openPopupCard);
popupCloseCard.addEventListener("click", closePopupCard);
newCardForm.addEventListener("submit", cardSubmitHandler);
imageOverlay.addEventListener("click", closeOverlay);

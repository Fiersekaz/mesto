const initialCards = [
	{
		name: 'Архыз',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
	},
	{
		name: 'Челябинская область',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
	},
	{
		name: 'Иваново',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
	},
	{
		name: 'Камчатка',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
	},
	{
		name: 'Холмогорский район',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
	},
	{
		name: 'Байкал',
		link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
	}
];


// Попап профиль
let profileEdit = document.querySelector('.profile__edit');
let popupProfileWindow = document.querySelector('.popup_value_edit-profile');
let popupCloseProfile = document.querySelector('.popup__close_profile-window');
let formElement = document.querySelector('.popup__edit-form');
let nameInput = formElement.querySelector('.popup__input_value_name');
let jobInput = formElement.querySelector('.popup__input_value_about');
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileAbout = profileInfo.querySelector('.profile__about');

// Рендеринг карточек
let elements = document.querySelector('.elements');
let templateCards = document.querySelector('.template-cards').content;
let elementCard = templateCards.querySelector('.element');

// Попап добавление карточки
let cardAddButton = document.querySelector('.profile__add');
let popupCardWindow = document.querySelector('.popup_value_add-place');
let popupCloseCard = document.querySelector('.popup__close_card-window');
let addCardName = popupCardWindow.querySelector('.popup__add-form_name');
let addCardLink = popupCardWindow.querySelector('.popup__add-form_link');
let newCardForm = popupCardWindow.querySelector('.popup__add-form');

// Открытие изображения
let popupImage = document.querySelector('.popup_value_image');
let image = document.querySelector('.popup__image');
let popupCloseImage = document.querySelector('.popup__close_image-window');


// Лайк
let likeButton = templateCards.querySelector('.element__like');


// Функции


initialCards.map((element) => {
	render(element.name, element.link);
	elements.append(element);
});

function popupImageWindow () {
	document.querySelectorAll('.element__image').forEach(e => {
		e.onclick = () => {
			popupImage.classList.add('popup_is-opened');
			popupImage.querySelector('.popup__image').src = e.getAttribute('src');
			popupImage.querySelector('.popup__about').textContent = e.getAttribute('alt');
		}
	});
};

popupImageWindow();



function render (name, link) {
	const newElement = templateCards.cloneNode(true);
	newElement.querySelector('.element__name').textContent = name;
	newElement.querySelector('.element__image').src = link;
	newElement.querySelector('.element__image').alt = name;
	listenElement(newElement);
	elements.prepend(newElement);
};



function openPopupProfile () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    popupProfileWindow.classList.add('popup_is-opened');
}

function closePopupProfile () {
    popupProfileWindow.classList.remove('popup_is-opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
	profileAbout.textContent = jobInput.value;
    closePopupProfile();
}


function closePopupImage() {
	popupImage.classList.remove('popup_is-opened');
}


function openPopupCard () {
    popupCardWindow.classList.add('popup_is-opened');
}

function closePopupCard () {
    popupCardWindow.classList.remove('popup_is-opened');
}


function createCard() {
	let newElement = templateCards.cloneNode(true);
	newElement.querySelector('.element__name').textContent = addCardName.value;
	newElement.querySelector('.element__image').src = addCardLink.value;
	newElement.querySelector('.element__image').alt = addCardName.value;
	listenElement(newElement);
	elements.prepend(newElement);
	popupImageWindow();
}



function cardSubmitHandler(evt) {
	evt.preventDefault();
	createCard();
	closePopupCard();
}

function likeActive (likeButton) {
	likeButton.classList.toggle('element__like_active')
}

function listenElement(el) {
	el.querySelector('.element__delete').addEventListener('click', deleteElements);
}

function deleteElements(evt) {
	evt.target.closest('.element').remove();
}



profileEdit.addEventListener('click', openPopupProfile);
popupCloseProfile.addEventListener('click', closePopupProfile);
formElement.addEventListener('submit', formSubmitHandler);

popupCloseImage.addEventListener('click', closePopupImage);

cardAddButton.addEventListener('click', openPopupCard);
popupCloseCard.addEventListener('click', closePopupCard);
newCardForm.addEventListener('submit', cardSubmitHandler);

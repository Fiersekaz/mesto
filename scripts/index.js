let profileEdit = document.querySelector('.profile__edit');
let popupWindow = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__edit-form');
let nameInput = formElement.querySelector('.popup__input_value_name');
let jobInput = formElement.querySelector('.popup__input_value_about');
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileAbout = profileInfo.querySelector('.profile__about');

function openPopupWindow () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileAbout.textContent;
    popupWindow.classList.add('popup_is-opened');
}

function closePopupWindow () {
    popupWindow.classList.remove('popup_is-opened');
}


function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
	profileAbout.textContent = jobInput.value;
    closePopupWindow()
}


profileEdit.addEventListener('click', openPopupWindow,);
popupClose.addEventListener('click', closePopupWindow);
formElement.addEventListener('submit', formSubmitHandler);
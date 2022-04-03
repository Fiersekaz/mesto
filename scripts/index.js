let profileEdit = document.querySelector('.profile__edit');
let popupWindow = document.querySelector('.popup');
let popupClose = document.querySelector('.popup__close');
let formElement = document.querySelector('.popup__edit-form');
let nameInput = formElement.querySelector('.popup__input_name');
let jobInput = formElement.querySelector('.popup__input_about');
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileAbout = profileInfo.querySelector('.profile__about');

function togglePopupWindow () {
    popupWindow.classList.toggle('popup_is-opened'); // Правильно ли я поступил, когда объединил фукции open и close в toggle -
    nameInput.value = profileName.textContent;   // -как в вебинаре?
    jobInput.value = profileAbout.textContent; //а потом сразу объединил toggle с переносом текста профиля в формы input???
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
	profileAbout.textContent = jobInput.value;
    togglePopupWindow()
}

// function popupFormOpen(evt) {
//     nameInput.value = profileName.textContent;
//     jobInput.value = profileAbout.textContent;
// }




profileEdit.addEventListener('click', togglePopupWindow,);
// profileEdit.addEventListener('click', popupFormOpen);
popupClose.addEventListener('click', togglePopupWindow);
formElement.addEventListener('submit', formSubmitHandler);

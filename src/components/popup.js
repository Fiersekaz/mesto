// import {
// 	profileAbout,
// 	popupProfileWindow,
// 	profileNameInput,
// 	profileAboutInput,
// 	profileName,
// } from "./constans.js";

class Popup {
	constructor(selector) {
		this._selector = selector;
		this._closeButton = this._selector.querySelector(".popup__close");
		this._handleEscClose = this._handleEscClose.bind(this);
	}

	open() {
		this._selector.classList.add("popup_is-opened");
		document.addEventListener("keydown", this._handleEscClose);
	}

	close() {
		this._selector.classList.remove("popup_is-opened");
		document.removeEventListener("keydown",this._handleEscClose);
	}

	_handleEscClose(event) {
		if (event.key === "Escape") {
			// this._openedPopup = document.querySelector(".popup_is-opened");
			this.close();
		}
	}

	_isOverlay(event) {
		return (
			event.target.classList.contains("popup")
		);
	}

	_closeOverlay(event) {
		if (this._isOverlay(event)) {
			this.close();
		}
	}

	setEventListeners() {
		this._closeButton.addEventListener("click", () => this.close());
		this._selector.addEventListener("click", (event) => this._closeOverlay(event));
	}
}


// export function openPopupProfile() {
// 	profileNameInput.value = profileName.textContent;
// 	profileAboutInput.value = profileAbout.textContent;
// 	openPopupWindow(popupProfileWindow);
// }



// export function isOverlay(event) {
// 	return (
// 		event.target.classList.contains("popup")
// 	);
// }


// export function closeOverlay(event) {
// 	if (isOverlay(event)) {
// 		closePopupWindow(event.target);
// 	}
// }

// export function openPopupWindow(element) {
// 	element.classList.add("popup_is-opened");
// 	document.addEventListener("keydown", closeByEscape);
// }

// export function closePopupWindow(element) {
// 	element.classList.remove("popup_is-opened");
// 	document.removeEventListener("keydown", closeByEscape);

// }
// export function closeByEscape(event) {
// 	if (event.key === "Escape") {
// 		const openedPopup = document.querySelector(".popup_is-opened");
// 		closePopupWindow(openedPopup);
// 	}
// }

export default Popup;
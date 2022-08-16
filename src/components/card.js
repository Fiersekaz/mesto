// import { openPopupWindow } from "./popup.js";
// import { popupImageWindow, popupImage, popupImageAbout } from "./constans.js";

export class Card {
	constructor(name, link, cardSelector, handleCardClick) {
		this._name = name;
		this._link = link;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
	}

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);

		return cardElement;
	}

	_delete() {
		this._element.remove();
	}

	_like() {
		this._elementLike.classList.toggle("element__like_active");
	}

	// _openImageInPopup(event) {
	// 	openPopupWindow(popupImageWindow);

	// 	popupImage.src = event.target.getAttribute("src");
	// 	popupImageAbout.textContent = event.target.getAttribute("alt");
	// 	popupImage.alt = event.target.getAttribute("alt");
	// }

	generate() {
		this._element = this._getTemplate();

		const elementImage = this._element.querySelector(".element__image");
		const elementName = this._element.querySelector(".element__name");

		elementName.textContent = this._name;
		elementImage.src = this._link;
		elementImage.alt = this._name;

		// elementImage.addEventListener("click", this._handleCardClick);
		this._setEventlistener();
		return this._element;
	}

	_setEventlistener() {
		this._elementLike = this._element.querySelector(".element__like");
		this._element.querySelector(".element__like").addEventListener("click", () => this._like());
		this._element.querySelector(".element__delete").addEventListener("click", () => this._delete());
		this._element.querySelector(".element__image").addEventListener("click", this._handleCardClick);
		// 	this._element
		// 	  .querySelector(".element__image")
		// 	  .addEventListener("click", () => {
		// 		this._openPopupImage();
		// 	  });
		//   }
	}
}

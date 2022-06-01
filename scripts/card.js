import { openPopupWindow } from "./popup.js";
import {
	popupImageWindow,
	popupImage,
	popupImageAbout,
} from "./constans.js";

export class Card {
	constructor(name, link, cardSelector) {
		this._name = name;
		this._link = link;
		this._cardSelector = cardSelector;
	}

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);

		return cardElement;
	}

	_delete(event) {
		event.target.closest(".element").remove();
	}

	_like(event) {
		event.target.classList.toggle("element__like_active");
	}

	_openImageInPopup(event) {
		openPopupWindow(popupImageWindow);

		popupImage.src = event.target.getAttribute("src");
		popupImageAbout.textContent = event.target.getAttribute("alt");
		popupImage.alt = event.target.getAttribute("alt");
	}

	generate() {
		const element = this._getTemplate();

		const elementImage = element.querySelector(".element__image");
		const elementName = element.querySelector(".element__name");
		const elementDelete = element.querySelector(".element__delete");
		const elementLike = element.querySelector(".element__like");

		elementName.textContent = this._name;
		elementImage.src = this._link;
		elementImage.alt = this._name;

		elementDelete.addEventListener("click", this._delete);
		elementLike.addEventListener("click", this._like);
		elementImage.addEventListener("click", this._openImageInPopup);

		return element;
	}
}

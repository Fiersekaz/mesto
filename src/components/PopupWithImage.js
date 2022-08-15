import Popup from "./popup.js";
class PopupWithImage extends Popup {
	constructor(selector) {
		super(selector);
		this._imageAbout = this._selector.querySelector(".popup__about");
		this._image = this._selector.querySelector(".popup__image");
	}

	open(src, alt) {
		this._image.src = src;
		this._image.alt = alt;
		this._imageAbout.textContent = alt;
		super.open();
	}
}
export default PopupWithImage;

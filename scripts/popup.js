import {
	profileAbout,
	popupProfileWindow,
	profileNameInput,
	profileAboutInput,
	profileName,
	popupCardWindow,
	popupImageWindow,
} from "./constans.js";
export function openPopupProfile() {
	profileNameInput.value = profileName.textContent;
	profileAboutInput.value = profileAbout.textContent;
	openPopupWindow(popupProfileWindow);
}

export function closePopupProfile() {
	closePopupWindow(popupProfileWindow);
}

export function closePopupImage() {
	closePopupWindow(popupImageWindow);
}

export function openPopupCard() {
	openPopupWindow(popupCardWindow);
}

export function closePopupCard() {
	closePopupWindow(popupCardWindow);
}

export function isOverlay(event) {
	return (
		// event.target.classList.contains("popup__container_value_image") ||
		event.target.classList.contains("popup")
	);
}

export function closeImageOverlay(event) {
    console.log(event);
	if (isOverlay(event)) {
		closePopupImage();
	}
}

export function closeOverlay(event) {
    console.log(event);
	if (isOverlay(event)) {
		closePopupWindow(event.target);
	}
}

export function openPopupWindow(element) {
	element.classList.add("popup_is-opened");
	document.addEventListener("keydown", closeByEscape);
}

export function closePopupWindow(element) {
	element.classList.remove("popup_is-opened");
	document.removeEventListener("keydown", closeByEscape);
}

export function closeByEscape(event) {
	if (event.key === "Escape") {
		const openedPopup = document.querySelector(".popup_is-opened");
		closePopupWindow(openedPopup);
	}
}

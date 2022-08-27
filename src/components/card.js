export default class Card {
	constructor(cardInfo, cardSelector, handleCardClick, handleRemove, ownerId, userId, handleLike) {
		this._id = cardInfo.id;
		this._name = cardInfo.name;
		this._link = cardInfo.link;
		this._likes = cardInfo.likes;
		this._cardSelector = cardSelector;
		this._handleCardClick = handleCardClick;
		this._handleRemove = handleRemove;
		this._ownerId = ownerId;
		this._userId = userId;
		this._handleLike = handleLike;
	}

	_setLikesCount() {
		this._element.querySelector(".element__like_counter").textContent = this._likes.length;
	}

	_getTemplate() {
		const cardElement = document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(true);

		return cardElement;
	}

	setLikes(likes) {
		this._likes = likes;
		this._setLikesCount();
	}

	delete() {
		this._element.remove();
	}

	like() {
		this._elementLike.classList.add("element__like_active");
	}

	unlike() {
		this._elementLike.classList.remove("element__like_active");
	}

	checkUserLike() {
		return this._likes.find((like) => like._id === this._userId);
	}

	generate() {
		this._element = this._getTemplate();

		const elementImage = this._element.querySelector(".element__image");
		const elementName = this._element.querySelector(".element__name");
		const elementDelete = this._element.querySelector(".element__delete");

		elementName.textContent = this._name;
		elementImage.src = this._link;
		elementImage.alt = this._name;

		this._setEventlistener();
		this._setLikesCount();

		if (this.checkUserLike()) {
			this.like();
		}

		if (this._ownerId !== this._userId) {
			elementDelete.remove();
		}

		return this._element;
	}

	getId() {
		return this._id;
	}

	_setEventlistener() {
		this._elementLike = this._element.querySelector(".element__like");
		this._elementLike.addEventListener("click", () => this._handleLike(this));
		this._element.querySelector(".element__delete").addEventListener("click", () => this._handleRemove(this));
		this._element.querySelector(".element__image").addEventListener("click", this._handleCardClick);
	}
}

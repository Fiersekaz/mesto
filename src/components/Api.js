import { defaults } from "autoprefixer";

class Api {
	constructor({ baseUrl, token }) {
		this._baseUrl = baseUrl;
		this._token = token;
	}

	getInitialCard() {
		return fetch(`${this._baseUrl}/cards`, {
			headers: {
				authorization: this._token,
				"Content-Type": "application/json",
			},
		}).then(this._checkResponse);
	}

	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			headers: {
				authorization: this._token,
				"Content-Type": "application/json",
			},
		}).then(this._checkResponse);
	}

	setUserInfo(data) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: "PATCH",
			headers: {
				authorization: this._token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				about: data.about,
			}),
		}).then(this._checkResponse);
	}

	setUserAvatar(data) {
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: "PATCH",
			headers: {
				authorization: this._token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				avatar: data.avatar,
			}),
		}).then(this._checkResponse);
	}

	createCard(data) {
		return fetch(`${this._baseUrl}/cards`, {
			method: "POST",
			headers: {
				authorization: this._token,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name: data.name,
				link: data.link,
			}),
		}).then(this._checkResponse);
	}

	removeCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}`, {
			method: "DELETE",
			headers: {
				authorization: this._token,
			},
		}).then(this._checkResponse);
	}

	createLike(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: "PUT",
			headers: {
				authorization: this._token,
			},
		}).then(this._checkResponse);
	}

	removeLike(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: "DELETE",
			headers: {
				authorization: this._token,
			},
		}).then(this._checkResponse);
	}

	_checkResponse(result) {
		if (result.ok) {
			return result.json();
		}
		return Promise.reject(`Ошибка: ${result.status}`);
	}
}

export default Api;

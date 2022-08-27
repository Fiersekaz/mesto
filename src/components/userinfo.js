class UserInfo {
	constructor({ name, about, avatar }) {
		this._name = name;
		this._about = about;
		this._avatar = avatar;
	}

	getUserInfo() {
		const profileValues = {
			name: this._name.textContent,
			about: this._about.textContent,
		};
		return profileValues;
	}

	setUserId(id) {
		if (id) {
			this._id = id;
		}
	}

	getUserId() {
		return this._id;
	}

	setUserInfo(userData) {
		if (userData.name) {
			this._name.textContent = userData.name;
			this._about.textContent = userData.about;
		}
	}

	setUserAvatar(data) {
		if (data) {
			this._avatar.src = data;
		}
	}
}
export default UserInfo;

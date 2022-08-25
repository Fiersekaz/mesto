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
		this._id = id;
	}

	getUserId() {
		return this._id;
	}

	setUserInfo(obj) {
		this._name.textContent = obj.name;
		this._about.textContent = obj.about;
	}

	setUserAvatar(data) {
		this._avatar.src = data;
	}
}
export default UserInfo;

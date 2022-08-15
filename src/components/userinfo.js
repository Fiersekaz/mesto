class UserInfo {
	constructor({ name, about }) {
		this._name = name;
		this._about = about;
	}

	getUserInfo() {
		const profileValues = {
			name: this._name.textContent,
			about: this._about.textContent,
		};
		return profileValues;
	}

	setUserInfo(obj) {
		this._name.textContent = obj.name;
		this._about.textContent = obj.about;
	}
}
export default UserInfo;

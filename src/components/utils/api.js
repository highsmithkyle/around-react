




class Api {
    constructor(props) {
        this.baseUrl = props.baseUrl;
        this.headers = props.headers;
    }

    _checkErrors(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error ${res.status}`);
    }

    getInitialProfile() {
        return fetch(`${this.baseUrl}/users/me`, {
            headers: this.headers,
        }).then((res) => this._checkErrors(res))
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            headers: this.headers,
        }).then((res) => this._checkErrors(res))
    }

}


const api = new Api({
    baseUrl: "https://around.nomoreparties.co/v1/group-12",
    headers: {
        authorization: "f4ba53cb-c4b1-4360-b78c-98b41af44bf6",
        "Content-Type": "application/json",
    },
});

export default api;







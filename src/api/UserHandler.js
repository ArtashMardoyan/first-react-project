import api from './index';

class UserHandler {
    static actionIndex(currentPage, limit) {
        return api.get(`users?page=${currentPage}&limit=${limit}`).then(response => response.data);
    }

    static actionView(id = 'me') {
        return api.get(`users/${id}`).then(response => response.data);
    }

    static actionLogin(email, password) {
        return api.post(`users/login`, { email, password }).then(response => {
            debugger;
            console.log(response);
        });
    }
}

export default UserHandler;

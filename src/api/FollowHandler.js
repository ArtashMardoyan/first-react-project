import api from './index';

class FollowHandler {
    static actionCreate(id) {
        return api.post(`users/${id}/follow`).then(response => response.data);
    }

    static actionDelete(id) {
        return api.delete(`users/${id}/following`).then(response => response.data);
    }
}

export default FollowHandler;

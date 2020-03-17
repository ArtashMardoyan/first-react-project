import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'http://18.194.159.187:8080/v1/',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzYWx0IjoiRWJKcmVwIiwiaWQiOiJjZjVlZjJlNy1iN2RhLTQxZjktYWY1My02ZWJjMTRhNGUwMDAiLCJpYXQiOjE1ODQwMDkzNDF9.77CDcr7XFwYdtenGrhtSYU0_UEyCRBx2DO04xFe9NbY`
    }
});

export default instance;

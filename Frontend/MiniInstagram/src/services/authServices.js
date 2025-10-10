import api from './api';

export const login = async (username, password) => {
    const response = await api.post('users/token/', {
        username,
        password
    });
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
    return response.data;
};

export const signup = async (userData) => {
    const response = await api.post('/users/register/', userData);

    return response.data;
};

export const logout = () => {
    localStorage.removeItem('accessToken');
};
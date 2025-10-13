import api from './api';

export const login = async (userData) => {
    const response = await api.post('users/token/', userData);
    localStorage.setItem('accessToken', response.data.access);
    localStorage.setItem('refreshToken', response.data.refresh);
    return response.data;
};

export const signup = async (userData) => {
    const response = await api.post('users/register/', userData);

    return response.data;
};

export const logout = async () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
};

export const refreshToken = async () => {
    const refresh = localStorage.getItem("refreshToken");
    if(!refresh)    throw new Error("No refresh token found");

    const response = await api.post('users/token/refresh/', {refresh});

    const {access} = response.data;
    localStorage.setItem('accessToken', access);

    return access;
};
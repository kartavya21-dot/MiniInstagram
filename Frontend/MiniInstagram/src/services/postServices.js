import api from "./api";

export const fetchPosts = async () => {
    const response = await api.get('posts/posts/');
    // console.log(response.data);
    
    return response.data;
}

export const newPosts = async (post) => {
    const response = await api.post('posts/posts/', post);
    return response;
}

export const user_id = JSON.parse(atob(localStorage.getItem('accessToken').split('.')[1])).user_id;
// console.log(user_id);

export const getMyPost = async ()=>{
    const response = await api.get(`posts/posts/?user=${user_id}`);
    return response.data;
}
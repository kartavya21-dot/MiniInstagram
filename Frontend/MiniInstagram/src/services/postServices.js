import api from "./api";

export const fetchPosts = async () => {
    const response = await api.get('posts/posts/');
    // console.log(response.data);
    
    return response.data;
}

export const newPosts = async (post) => {
    const response = await api.post('posts/posts/', post);
    return response.data;
}
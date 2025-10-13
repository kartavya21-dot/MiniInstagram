import React, { useEffect, useState } from "react";
import "./Home.css";
import Post from "../../Components/Post/Post";
import PostList from "../../Components/PostList/PostList";
import api from "../../services/api";
import { fetchPosts } from "../../services/postServices";

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(()=> {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    try{
      const response = await fetchPosts();
      setPosts(response);
    } catch(e){
      console.log(e);
    }
  }

  // console.log(socialMediaPosts);

  return (
    <section className="home-page page">
      {
        <PostList posts={posts}/>
      }
    </section>
  );
};

export default Home;
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import PostDetails from "./Pages/PostDetails/PostDetails";
import Profile from "./Pages/Profile/Profile";
import Search from "./Pages/Search/Search";
import NewPost from "./Pages/NewPost/NewPost";
import Auth from "./Pages/Auth/Auth";

function App() {
  return (
    <div className="app">
      <Header />
      <Auth />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/newPost" element={<NewPost/>}/>
        <Route path="/postdetails" element={<PostDetails />}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;

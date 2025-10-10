import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import PostDetails from "./Pages/PostDetails/PostDetails";
import Profile from "./Pages/Profile/Profile";
import Search from "./Pages/Search/Search";
import NewPost from "./Pages/NewPost/NewPost";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/newPost" element={<NewPost/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/postdetails" element={<PostDetails />}/>
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;

import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import PostDetails from './Pages/PostDetails/PostDetails'
import Profile from './Pages/Profile/Profile'
import Search from './Pages/Search/Search'

function App() {

  return (
    <div className='app'>
      <Header/>
      {/* <Home/> */}
      {/* <Search/> */}
      {/* <Profile/> */}
      <PostDetails />
      <Navbar/>
    </div>
  )
}

export default App
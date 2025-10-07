import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Search from './Pages/Search/Search'

function App() {

  return (
    <div className='app'>
      <Header/>
      {/* <Home/> */}
      <Search/>
      <Navbar/>
    </div>
  )
}

export default App

import './App.css'
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'

function App() {

  return (
    <div className='app'>
      <Header/>
      <Home/>
      <Navbar/>
    </div>
  )
}

export default App

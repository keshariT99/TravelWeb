import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import {Navbar} from './component/Navbar'
import Footer from './component/Footer'
import Gallary from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {

  return (
    <div className="bg-gray-100 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/gallery' element={<Gallary/>} ></Route>
          <Route path='/contact' element={<Contact/>} ></Route>
          <Route path='/about' element={<About/>} ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div> 
        
    
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import Volunteer from './pages/Volunteer'



function App() {
  return (
    <>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </>
  )
}
export default App


import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#1f2937] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo Section  */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="https://bastikipathshala.org/wp-content/uploads/2024/02/Basti_Ki_Pathshala-_Official_Logo-removebg-preview.png"
            alt="Basti ki Pathshala Logo"
            className="h-20 w-auto"
          />
          <span className="text-3xl font-bold text-orange-400 ">
            Basti ki Pathshala
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex text-xl space-x-6">
          <Link to="/" className="hover:text-yellow-300">Home</Link>
          <Link to="/about" className="hover:text-yellow-300">About</Link>
          <Link to="/volunteer" className="hover:text-yellow-300">Volunteer</Link>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 text-xl space-y-2 bg-[#1f2937]">
          <Link to="/" onClick={toggleMenu} className="block hover:text-yellow-300">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="block hover:text-yellow-300">About</Link>
          <Link to="/volunteer" onClick={toggleMenu} className="block hover:text-yellow-300">Volunteer</Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar

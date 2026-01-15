import { Link } from "react-router-dom"
import React from "react"

const Header = () => {
  return (
 <header className="flex justify-between items-center px-5 md:px-10 border-b shodow">
  <Link>
  <img src="" alt="" />
  <h2>Filmania</h2>
  
  </Link>
  <Link>Film oluştur</Link>
 </header>
  )
}

export default Header

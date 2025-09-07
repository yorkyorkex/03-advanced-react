import React, { createContext, useState } from 'react'
import NavbarLinks from './NavLinks'

export const NavbarContext = createContext()

function Navbar() {
  const [user, setUser] = useState({ name: 'john' })
  const logout = () => {
    setUser(null)
  }
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavbarLinks />
      </nav>
    </NavbarContext.Provider>
  )
}

export default Navbar

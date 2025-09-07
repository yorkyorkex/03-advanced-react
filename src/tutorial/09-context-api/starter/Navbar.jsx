import React, { createContext, useState } from 'react'
import NavbarLinks from './NavLinks'
import { useContext } from 'react'

export const NavbarContext = createContext()

export const useAppContext = () => {
  return useContext(NavbarContext)
}

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

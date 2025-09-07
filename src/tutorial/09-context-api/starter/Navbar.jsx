import React, { useState } from 'react'
import NavbarLinks from './NavLinks'

function Navbar() {
  const [user, setUser] = useState({ name: 'john' })
  const logout = () => {
    setUser(null)
  }
  return (
    <nav className="navbar">
      <h5>CONTEXT API</h5>
      <NavbarLinks user={user} logout={logout} />
    </nav>
  )
}

export default Navbar

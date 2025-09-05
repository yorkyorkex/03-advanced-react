import { useState } from 'react'
const UserChallenge = () => {
  const [user, setUser] = useState(null)

  const handleLogin = () => {
    setUser({ name: 'John Doe' })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return (
    <div>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <button className="btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      )}
    </div>
  )
}

export default UserChallenge

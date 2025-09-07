import { useAppContext } from './Navbar'

function UserContainer() {
  const { user, logout } = useAppContext()
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  )
}

export default UserContainer

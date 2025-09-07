import React from 'react'
import { useState } from 'react'
import { data } from '../../../data'

const UserChallenge = () => {
  const [name, setName] = useState('')
  const [users, setUsers] = useState(data)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    const newUser = { id: new Date().getTime().toString(), name }
    setUsers([...users, newUser])
    setName('')
    console.log(name)
  }
  const handleDelete = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id)
    setUsers(filteredUsers)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h4>Users</h4>
      <div>
        {users.map((user) => {
          const { id, name, email } = user
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button className="btn" onClick={() => handleDelete(id)}>
                {' '}
                delete
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default UserChallenge

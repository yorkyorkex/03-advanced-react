import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john1' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {text || 'default value'}
      {!text && (
        <>
          <h2>Text is present</h2>
          <h1>{name}</h1>
        </>
      )}
      {/* !text && (
        <>
          <h2>Text is present</h2>
          <h1>{name}</h1>
        </>
      ) */}

      {user && <SomeComponent name={user.name} />}
      <button
        className="btn"
        onClick={() => {
          setIsEditing(!isEditing)
          user?.name ? setUser({ name: '' }) : setUser({ name: 'john3' })
        }}
      >
        {isEditing ? 'close' : 'open'}
      </button>
      {user ? <h1>hello world {user.name}</h1> : <h1>goodbye world</h1>}
    </div>
  )
}

const SomeComponent = ({ name }) => {
  return (
    <div>
      <>
        <h2>Some is present</h2>
        <h1>{name}</h1>
      </>
    </div>
  )
}

export default ShortCircuitExamples

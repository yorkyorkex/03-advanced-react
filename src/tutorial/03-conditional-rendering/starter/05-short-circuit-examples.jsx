import { useState } from 'react'

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('fdd')
  // truthy
  const [name, setName] = useState('susan')
  const [user, setUser] = useState({ name: 'john' })
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div>
      {text || <h1>Hello World</h1>}
      {text && (
        <>
          <h2>Text is present</h2>
          <h1>{name}</h1>
        </>
      )}
    </div>
  )
}

export default ShortCircuitExamples

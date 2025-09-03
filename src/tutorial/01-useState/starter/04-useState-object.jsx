import { useState } from 'react'

const UseStateObject = () => {
  const [name, setName] = useState('john')
  const [age, setAge] = useState(24)
  const [hobby, setHobby] = useState('football')
  const displayPerson = () => {
    setName('peter')
    setAge(30)
    setHobby('tennis')
    console.log(name, age, hobby)
  }
  return (
    <>
      <h3></h3>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        change person
      </button>
    </>
  )
}

export default UseStateObject

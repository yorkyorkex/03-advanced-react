import { useState } from 'react'

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'football',
  })

  //const { name, age, hobby } = person

  const displayPerson = () => {
    //setPerson({ name: 'peterdfd', age: 30, hobby: 'tennis' })
    //console.log(person.name, person.age, person.hobby)

    //setPerson({ name: 'john' })
    setPerson({ ...person, name: 'john' })
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.hobby}</h3>
      <button type="button" className="btn" onClick={displayPerson}>
        change person
      </button>
    </>
  )
}

export default UseStateObject

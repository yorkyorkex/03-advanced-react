import { data } from '../../../data'
import React, { useState } from 'react'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)
  console.log(people)
  const removeItem = (id) => {
    /*     const newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople) */

    setPeople(people.filter((person) => person.id !== id))
  }
  const clearAllItems = () => {
    setPeople([])
  }

  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        style={{ marginTop: '1rem' }}
        className="btn"
        onClick={clearAllItems}
      >
        remove all
      </button>
    </>
  )
}

export default UseStateArray

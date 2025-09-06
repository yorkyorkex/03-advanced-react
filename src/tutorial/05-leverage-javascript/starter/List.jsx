import { Person } from './Person'
import { people } from '../../../data'
import React from 'react'

function List() {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.name} {...person} />
      })}
    </div>
  )
}

export default List

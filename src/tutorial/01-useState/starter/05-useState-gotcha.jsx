import { useState } from 'react'

const UseStateGotcha = () => {
  const [value, setValue] = useState(0)

  const handleClick = () => {
    setValue(value + 1)
    console.log(value)
  }

  return (
    <div>
      <h2>{value}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  )
}

export default UseStateGotcha

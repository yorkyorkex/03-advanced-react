import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0)
  console.log(count)
  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h2>useState basics</h2>
      <h1>{count}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </>
  )
}

export default UseStateBasics

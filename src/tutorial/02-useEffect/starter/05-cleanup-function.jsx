import React from 'react'
import { use } from 'react'
import { useState, useEffect } from 'react'
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log('Effect ran')

  return (
    <div>
      <h2>cleanup function</h2>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        Toggle component
      </button>

      {toggle && <RandomComponent />}
    </div>
  )
}

const RandomComponent = () => {
  useEffect(() => {
    const intID = setInterval(() => {
      console.log('Interval running')
    }, 1000)
    return () => {
      clearInterval(intID)
      console.log('Cleanup')
    }
  }, [])
  return <h2>Random component</h2>
}

export default CleanupFunction

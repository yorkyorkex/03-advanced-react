import React from 'react'
import { use } from 'react'
import { useState, useEffect } from 'react'
const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    console.log('Effect ran')
    return () => {
      console.log('Cleanup')
    }
  }, [toggle])

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
    console.log('Random component mounted')
    return () => {
      console.log('Random component unmounted')
    }
  }, [])
  return <h2>Random component</h2>
}

export default CleanupFunction

import { useEffect, useState } from 'react'

const MultipleReturnsBasics = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
      setError(true)
    }, 3000)
  }, [])

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error...</h2>
  }
  return <h2>Multiple Returns Basics</h2>
}
export default MultipleReturnsBasics

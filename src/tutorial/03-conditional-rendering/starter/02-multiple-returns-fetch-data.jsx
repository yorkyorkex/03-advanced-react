import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [users, setUsers] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url)
        const user = await resp.json()
        //setUsers(user)
        console.log(user)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error fetching user data</h2>
  }

  return <h2>Fetch Data </h2>
}
export default MultipleReturnsFetchData

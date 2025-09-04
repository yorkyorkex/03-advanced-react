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
        setUsers(user)
        setIsLoading(false)
      } catch (error) {
        console.log(error)
        setIsError(true)
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

  return (
    <>
      <h2>Fetch Data</h2>
      <img
        style={{ borderRadius: '100%', width: '150px', height: '150px' }}
        src={users.avatar_url}
        alt={users.login}
      />
    </>
  )
}
export default MultipleReturnsFetchData

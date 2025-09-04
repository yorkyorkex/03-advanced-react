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
      <img
        style={{ borderRadius: '100%', width: '150px', height: '150px' }}
        src={users.avatar_url}
        alt={users.name}
      />
      <h4>{users.name}</h4>
      <p>{users.bio}</p>
      <p>Location: {users.location}</p>
      <p>Public repos: {users.public_repos}</p>
      <a href={users.html_url} target="_blank" rel="noreferrer">
        View profile on GitHub
      </a>
    </>
  )
}
export default MultipleReturnsFetchData

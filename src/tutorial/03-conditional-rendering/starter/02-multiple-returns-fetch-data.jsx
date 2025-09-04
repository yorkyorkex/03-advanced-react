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
        if (!resp.ok) {
          setIsLoading(false)
          setIsError(true)
          return
        }
        const user = await resp.json()
        setUsers(user)
      } catch (error) {
        console.log(error)
        setIsError(true)
      }
      setIsLoading(false)
    }
    fetchUser()
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>Error fetching user data</h2>
  }
  const { avatar_url, name, bio, location, public_repos, html_url } = users
  return (
    <>
      <img
        style={{ borderRadius: '100%', width: '150px', height: '150px' }}
        src={avatar_url}
        alt={name}
      />
      <h4>{name}</h4>
      <p>{bio}</p>
      <p>Location: {location}</p>
      <p>Public repos: {public_repos}</p>
      <a href={html_url} target="_blank" rel="noreferrer">
        View profile on GitHub
      </a>
    </>
  )
}
export default MultipleReturnsFetchData

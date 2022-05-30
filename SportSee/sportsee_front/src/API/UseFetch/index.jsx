import { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom'

/**
 * Get the datas from the API,
 *
 * @returns  {isLoading}      loading status
 * @returns  {userData}       user's datas
 */

function UseFetch() {
  const [isLoading, setLoading] = useState(true)
  const [userData, setData] = useState({})

  const { userId } = useParams()
  const urls = [
    `http://localhost:3000/user/${userId}`,
    `http://localhost:3000/user/${userId}/activity`,
    `http://localhost:3000/user/${userId}/average-sessions`,
    `http://localhost:3000/user/${userId}/performance`,
  ]

  useEffect(() => {
    if (!urls) return

    setLoading(true)

    async function fetchData() {
      try {
        const response = await Promise.all(
          urls.map((url) => fetch(url).then((res) => res.json()))
        )
        setData(response)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId])

  return { isLoading, userData }
}

export default UseFetch

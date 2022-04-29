import { useState, useEffect } from 'react'

function useFetch(url) {
  const [userData, setData] = useState({})

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (!url) return

    setLoading(true)

    async function fetchData() {
      try {
        const response = await fetch(url)

        const data = await response.json()

        setData(data)
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, userData }
}

export default useFetch

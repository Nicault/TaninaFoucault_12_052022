import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

import useFetch from '../../hooks/UseFetch'
function ActivitySection() {
  const { userId } = useParams()
  const url = `http://localhost:3000/user/${userId}/activity`

  const { userData, isLoading } = useFetch(url)

  console.log(userData)

  return <div>hello</div>
}

export default ActivitySection

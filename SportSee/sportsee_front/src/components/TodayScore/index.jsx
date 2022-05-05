import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch'
import styled from 'styled-components'

import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const Wrapper = styled.div`
height 250px,
width: 250px;`
function TodayScore() {
  const { userId } = useParams()
  const url = `http://localhost:3000/user/${userId}/`

  const { userData, isLoading } = useFetch(url)
  //   console.log(userData.data.score)

  return (
    <Wrapper>
      {!isLoading && (
        <ResponsiveContainer
          width="100%"
          height="100%"
          min-width={250}
          min-height={250}
        >
          <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
            data={userData.data.score}
          >
            <RadialBar
              minAngle={15}
              label={{ position: 'insideStart', fill: '#fff' }}
              background
              clockWise
              dataKey="uv"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              // wrapperStyle={style}
            />
          </RadialBarChart>
        </ResponsiveContainer>
      )}
    </Wrapper>
  )
}

export default TodayScore

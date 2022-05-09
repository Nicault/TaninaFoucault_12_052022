import styled from 'styled-components'

import {
  RadialBarChart,
  RadialBar,
  // Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'

const Wrapper = styled.div`
  height: 100%;
  width: 20%;

  background-color: #fbfbfb;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  // transform: rotate(-90deg);

  position: relative;
`

const Text = styled.p`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: black;
  position: absolute;
`

const Percentage = styled.span`
  font-size: 26px;
  font-weight: 700;
`

function TodayScore({ userData }) {
  // console.log([userData.data.todayScore])

  const formatScore = () => {
    if (userData.data.score) return userData.data.score * 100
    else if (userData.data.todayScore) return userData.data.todayScore * 100
  }

  const percentValue = formatScore()

  return (
    <Wrapper>
      {percentValue && (
        <Text>
          <Percentage>{percentValue} % </Percentage>
          <br />
          de votre objectif
        </Text>
      )}
      <ResponsiveContainer width="100%" height={200}>
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100%"
          outerRadius="100%"
          barSize={10}
          data={[userData.data]}
          startAngle={90}
          endAngle={450}
        >
          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            // dataKey={formatScore}
            // angleAxisId={0}
            tick={false}
          />
          <RadialBar
            fill="red"
            minAngle={15}
            // label={{ position: 'insideStart', fill: 'red' }}
            background={{ fill: '#FBFBFB' }}
            // clockWise
            dataKey={formatScore}
            cornerRadius={30 / 2}
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
        </RadialBarChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

export default TodayScore

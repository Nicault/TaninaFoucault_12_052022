import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  RadialBarChart,
  RadialBar,
  // Legend,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'

const Wrapper = styled.div`
  // height: 100%;
  // width: 30%;

  padding: 10%;

  // background-color: #fbfbfb;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`

const Title = styled.h2`
  font-size: 15px;
  position: absolute;
  top: 5%;
  left: 5%;
`
const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: black;
  position: absolute;
  line-height: 26px;
  color: #282d30;
`

const Percentage = styled.span`
  font-size: 26px;
  font-weight: 700;
`

function TodayScore({ userData }) {
  const data = userData.data

  const formatScore = () => {
    if (data.score) return data.score * 100
    else if (data.todayScore) return data.todayScore * 100
  }

  const percentValue = formatScore()

  return (
    <Wrapper>
      <Title>Score</Title>
      <Text>
        <Percentage>{percentValue} %</Percentage>
        <br />
        de votre <br />
        objectif
      </Text>

      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          // cx="50%"
          // cy="50%"
          innerRadius="100%"
          outerRadius="100%"
          barSize={10}
          data={[data]}
          startAngle={90}
          endAngle={450}
          // margin={{
          //   top: 20,
          //   right: 20,
          //   left: 20,
          //   bottom: 20,
          // }}

          background={{ fill: '#FBFBFB' }}
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
        </RadialBarChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

TodayScore.propTypes = {
  userData: PropTypes.object,
}

export default TodayScore

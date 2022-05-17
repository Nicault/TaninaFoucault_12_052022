import styled from 'styled-components'
import AverageTooltip from '../Tooltips/AverageTooltip'

// import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  //   CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from 'recharts'

const Wrapper = styled.div`
  background: #ff0000;
  // height: 100%;
  // width: 100%;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Title = styled.h2`
  font-size: 15px;
  position: absolute;
  color: #ffffff;
  opacity: 0.5;
  top: 8%;
  left: 8%;
  line-height: 24px;
`

function AverageSessionSection({ userData }) {
  const formatXAxis = (tickItem) => {
    // console.log(tickItem)
    const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return (tickItem = week[tickItem - 1])
  }

  //   console.log(userData.data.sessions)

  return (
    <Wrapper>
      <Title>
        Durée moyenne des <br />
        sessions
      </Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={userData.data.sessions}
          margin={{
            top: 50,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            stroke="white"
            tickFormatter={formatXAxis}
          />
          <YAxis
            width={0}
            axisLine={false}
            tickLine={false}
            tick={false}
            // type="number"
            domain={['dataMin-10', 'dataMax+10']}
          />
          <Tooltip content={AverageTooltip} position="top" />
          {/* <Legend /> */}
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            fillOpacity={1}
            dot={false}
            // activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

export default AverageSessionSection

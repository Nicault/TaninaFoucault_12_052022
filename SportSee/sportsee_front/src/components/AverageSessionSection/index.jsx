import styled from 'styled-components'

// import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  //   YAxis,
  //   CartesianGrid,
  Tooltip,
  //   Legend,
  ResponsiveContainer,
} from 'recharts'

const Wrapper = styled.div`
  background: #ff0000;
  height: 100%;
  width: 20%;

  display: flex;
  justify-content: center;
  align-items: center;
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
      <ResponsiveContainer width="100%" height={200}>
        <LineChart
          data={userData.data.sessions}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
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
          {/* <YAxis /> */}
          <Tooltip dataKey="sessionLength" />
          {/* <Legend /> */}
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="white"
            strokeWidth={2}
            fillOpacity={1}
            dot={false}
            //   activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

export default AverageSessionSection

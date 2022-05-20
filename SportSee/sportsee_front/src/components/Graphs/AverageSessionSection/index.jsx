import styled from 'styled-components'
import AverageTooltip from '../Tooltips/AverageTooltip'
import { useState } from 'react'
import PropTypes from 'prop-types'

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

// background: ${({ perc }) =>
//   perc && `linear-gradient(90deg, #ff0000 ${perc}%, #ffed4b ${perc}%)`};

const Wrapper = styled.div`
  background: #ff0000;

  // height: 100%;
  // width: 100%;
  padding: 5%;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const BGFilter = styled.div`
  position: absolute;
  background-color: #000000;
  opacity: 0.1;
  height: 100%;
  right: 0;
  top: 0;
  display: ${({ mouseIn }) => (mouseIn ? 'block' : 'none')};
  width: ${({ perc }) =>
    perc < 45
      ? `calc(${perc}% + 5%)`
      : perc > 45
      ? `calc(${perc}% - 5%)`
      : perc === 100
      ? '0%'
      : perc === 0 && '100%'};
`
// REVOIR LES POURCENTAGES ICI POUR QUE CE SOIT COHERENT
//perc < 50 ? `calc(${perc}% + 10px)` : `calc(${perc}% - 10px)`};

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
  const data = userData.data.sessions

  const formatXAxis = (tickItem) => {
    const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    return (tickItem = week[tickItem - 1])
  }

  const [perc, setPerc] = useState(0)
  const onMouseMove = (hoveredData) => {
    if (hoveredData && hoveredData.activePayload) {
      const hoveredX = hoveredData.activePayload[0].payload.day
      const index = data.findIndex((d) => d.day === hoveredX)
      const percentage = ((data.length - index - 1) * 100) / (data.length - 1)

      setPerc(100 - percentage)
      isMouseIn(true)
    }
  }

  const [mouseIn, isMouseIn] = useState(false)
  const onMouseOut = () => {
    setPerc(0)
    isMouseIn(false)
  }

  // console.log(mouseOut)

  return (
    <Wrapper perc={perc}>
      <BGFilter perc={100 - perc} mouseIn={mouseIn}></BGFilter>
      <Title>
        Durée moyenne des <br />
        sessions
      </Title>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          // margin={{
          //   top: 50,
          //   right: 20,
          //   left: 20,
          //   bottom: 10,
          // }}
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <defs>
            <linearGradient id="LinearGradient">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.1} />
              <stop offset={`${perc}%`} stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            <radialGradient id="RadialGradient" x="10" y="10" rx="15" ry="15">
              <stop offset="0%" stopColor="white" />
              <stop offset="50%" stopColor="white" />
              <stop offset="51%" stopColor="white" stopOpacity={0.5} />
              <stop offset="100%" stopColor="white" stopOpacity={0.5} />
            </radialGradient>
          </defs>

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
          <Tooltip content={AverageTooltip} position="top" cursor={false} />
          {/* <Legend /> */}
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#LinearGradient)"
            strokeWidth={3}
            // fillOpacity={1}
            dot={false}
            activeDot={{ stroke: 'none', fill: 'url(#RadialGradient)', r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

AverageSessionSection.propTypes = {
  userData: PropTypes.object,
  perc: PropTypes.number,
  isMouseIn: PropTypes.bool,
}

export default AverageSessionSection

import styled from 'styled-components'
import AverageTooltip from '../Tooltips/AverageTooltip'
import { useState } from 'react'
import PropTypes from 'prop-types'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

/**
 * Displays the average session section graph,
 
 * @prop     {object}   userData    Data get from API
 * 
 * @returns  {div}                  The graph section
 */

/**
 * Get the state of the percentage on mouse move to fill the background regarding to,
 *
 * @param     {number}   perc       Percentage of the graph regarding the mouse position
 * @param     {function} setPerc    Updates the percentage
 *
 * @returns   {number}              Percentage of the background to fill regarding the mouse position
 */

/**
 * Get the position of the mouse (in or out of the graph) to display oh not the background fill effect,
 *
 * @param     {boolean}   mouseIn       Is the mouse in the graph ?
 * @param     {function}  isMouseIn     Updates the position of the mouse
 *
 * @returns   {bool}                    If the mouse is in the graph, we display the background
 */

function AverageSessionSection({ userData }) {
  const data = userData.data.sessions

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

  return (
    <Wrapper perc={perc}>
      <BGFilter perc={100 - perc} mouseIn={mouseIn}></BGFilter>
      <Title>
        Durée moyenne des <br />
        sessions
      </Title>
      <ResponsiveContainer width="99%" height="99%">
        <LineChart
          data={data}
          onMouseMove={onMouseMove}
          onMouseOut={onMouseOut}
        >
          <defs>
            <linearGradient id="LinearGradient">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.2} />
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
            tick={{ opacity: 0.8 }}
          />
          <YAxis
            width={0}
            axisLine={false}
            tickLine={false}
            tick={false}
            domain={['dataMin-10', 'dataMax+10']}
          />
          <Tooltip content={AverageTooltip} position="top" cursor={false} />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="url(#LinearGradient)"
            strokeWidth={3}
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

const Wrapper = styled.div`
  background: #ff0000;

  // height: 100%;
  // width: 100%;
  padding: 5% 0;

  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const BGFilter = styled.div`
  // box-sizing: content-box;
  position: absolute;
  background-color: #000000;
  opacity: 0.1;
  height: 100%;
  right: 0;
  top: 0;
  display: ${({ mouseIn }) => (mouseIn ? 'block' : 'none')};
  width: ${({ perc }) => `${perc}%`};
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

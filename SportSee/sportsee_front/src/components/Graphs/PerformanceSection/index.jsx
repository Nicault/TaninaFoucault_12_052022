import styled from 'styled-components'
import PropTypes from 'prop-types'

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  //   PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

/**
 * Displays the performance section graph,
 
 * @prop     {object}   userData    Data get from API
 * 
 * @returns  {div}                  The graph section
 */

function PerformanceSection({ userData }) {
  const data = userData.data

  return (
    <Wrapper>
      <ResponsiveContainer width="99%" height="99%">
        <RadarChart data={data.data} startAngle={210} endAngle={570}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            axisLine={false}
            tickLine={false}
            stroke="white"
          />
          <Radar
            dataKey="value"
            stroke="rgba(255, 1, 1, 0.7)"
            fill="rgba(255, 1, 1, 0.7)"
            fillOpacity={0.8}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

PerformanceSection.propTypes = {
  userData: PropTypes.object,
}

export default PerformanceSection

const Wrapper = styled.div`
  // height: 100%;
  // width: 30%;

  background-color: #282d30;
  font-size: 12px;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5%;

  position: relative;
`

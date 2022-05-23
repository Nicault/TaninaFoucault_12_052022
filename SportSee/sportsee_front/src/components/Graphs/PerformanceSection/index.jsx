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
 * @type     {object}   data        Specific datas used in this component
 *
 * @returns  {div}                  The graph section
 */

/**
 * Format the tick items by translating,
 *
 * @param     {string}   item    type of in english
 *
 * @returns   {string}           type of translated in french
 */

function PerformanceSection({ userData }) {
  const data = userData.data

  const translateItem = (item) => {
    if (item === 'cardio') return 'Cardio'
    if (item === 'energy') return 'Energie'
    if (item === 'endurance') return 'Endurance'
    if (item === 'strength') return 'Force'
    if (item === 'speed') return 'Vitesse'
    if (item === 'intensity') return 'Intensité'
  }

  const formatKind = (kindNumber) => {
    if (!data) return
    let result = data.kind[kindNumber.kind]
    return translateItem(result)
    // return result.charAt(0).toUpperCase() + result.slice(1)
  }

  return (
    <Wrapper>
      <ResponsiveContainer width="99%" height="99%">
        <RadarChart
          // cx="50%"
          // cy="50%"
          // outerRadius="80%"

          // width="50%"
          // height="50%"
          data={data.data}
          startAngle={210}
          endAngle={570}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey={formatKind}
            // tickFormatter={formatTicks}
            axisLine={false}
            tickLine={false}
            stroke="white"
          />
          {/* <PolarRadiusAxis /> */}
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

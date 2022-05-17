import styled from 'styled-components'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  //   PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

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

function PerformanceSection({ userData }) {
  const tradItem = (item) => {
    if (item === 'cardio') return 'Cardio'
    if (item === 'energy') return 'Energie'
    if (item === 'endurance') return 'Endurance'
    if (item === 'strength') return 'Force'
    if (item === 'speed') return 'Vitesse'
    if (item === 'intensity') return 'Intensité'
  }

  const formatKind = (kindNumber) => {
    if (!userData) return
    let result = userData.data.kind[kindNumber.kind]
    return tradItem(result)
    // return result.charAt(0).toUpperCase() + result.slice(1)
  }

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          // cx="50%"
          // cy="50%"
          // outerRadius="80%"

          // width="50%"
          // height="50%"
          data={userData.data.data}
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

export default PerformanceSection

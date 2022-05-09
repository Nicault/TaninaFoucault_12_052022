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
  height: 100%;
  width: 30%;
  background-color: #282d30;

  display: flex;
  justify-content: center;
  align-items: center;
`

function PerformanceSection({ isLoading, userData }) {
  // console.log(userData.data)

  const formatKind = (kindNumber) => {
    // console.log(kindNumber.kind)
    if (!userData) return
    let result = userData.data.kind[kindNumber.kind]
    return result.charAt(0).toUpperCase() + result.slice(1)
  }

  return (
    <Wrapper>
      <ResponsiveContainer width="100%" height={200}>
        <RadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={userData.data.data}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey={formatKind}
            axisLine={false}
            tickLine={false}
            stroke="white"
          />
          {/* <PolarRadiusAxis /> */}
          <Radar
            //   name="Mike"
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

import styled from 'styled-components'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from 'recharts'

const ActivityDiv = styled.div`
  display: flex;
  height: 45%;
  width: 100%;
  border-radius: 5px;

  // margin-top: 77px;
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  // padding: 30px 60px;
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
`
const Text = styled.div`
  display: flex;
  justify-content: space-between;
  padding 20px 32px;
`
const Title = styled.h2`
  font-size: 15px;
`

const Legende = styled.p`
  font-size: 14px;
`

const Black = styled.span`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 8px;
  background-color: #282d30;
  margin: 0 10px 0 30px;
`
const Red = styled.span`
  display: inline-block;
  height: 8px;
  width: 8px;
  border-radius: 8px;
  background-color: #e60000;
  margin: 0 10px 0 30px;
`

function ActivitySection({ userData }) {
  const formatXAxis = (tickItem) => {
    let result = tickItem.toString().slice(-2)
    if (result[0] === '0') return result.slice(1)
    else return result
  }

  // console.log(userData)

  const tickValue = () => {
    let min = userData.data.sessions[0].kilogram
    let max = 0
    for (let i = 0; i < userData.data.sessions.length; i++) {
      if (userData.data.sessions[i].kilogram < min)
        min = userData.data.sessions[i].kilogram
      if (userData.data.sessions[i].kilogram > max)
        max = userData.data.sessions[i].kilogram
    }

    return Math.round((max - min + 2) / 2)
  }

  let result = tickValue()
  console.log(result)

  return (
    <ActivityDiv>
      <Wrapper>
        <Text>
          <Title>Activité quotidienne</Title>
          <Legende>
            <Black></Black>Poids (kg) <Red></Red>Calories brûlées (kCal)
          </Legende>
        </Text>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={userData.data.sessions}>
            <CartesianGrid
              stroke="#DEDEDE"
              strokeDasharray=" 3 3 "
              vertical={false}
            />
            <XAxis dataKey={'day'} tickFormatter={formatXAxis} dy={15} />
            <YAxis
              yAxisId="right"
              orientation="right"
              // dataKey="kilogram"
              tickCount={4}
              dx={15}
              axisLine={false}
              tickLine={false}
              // type="number"
              domain={['dataMin-1', 'dataMax+1']}
              interval={'preserveStartEnd'}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#8884d8"
              tickCount={3}
              axisLine={false}
              tickLine={false}
              tick={false}
              domain={[0, 'dataMax +50']}
            />

            <Tooltip />
            {/* <Legend
                width={300}
                wrapperStyle={{
                  top: -50,
                  right: 20,
                  borderRadius: 3,
                }}
              /> */}
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[3.5, 3.5, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[3.5, 3.5, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Wrapper>
    </ActivityDiv>
  )
}

export default ActivitySection

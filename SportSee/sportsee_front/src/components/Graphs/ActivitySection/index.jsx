import styled from 'styled-components'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import ActivityTooltip from '../Tooltips//ActivityTooltip'

const ActivityDiv = styled.div`
  // position: relative;
  // display: flex;
  // flex-direction: column;
  height: 45%;
  width: 100%;
  border-radius: 5px;

  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;

  // ici padding à cause de la defaillance du responsivecontainer
  padding-bottom: 40px;
`

const Title = styled.h2`
  font-size: 15px;
  height: 20%;
  padding 20px 32px;
  width: 50%
  
`

function ActivitySection({ userData }) {
  const formatXAxis = (tickItem) => {
    let result = tickItem.toString().slice(-2)
    if (result[0] === '0') return result.slice(1)
    else return result
  }

  // console.log(user)

  // const tickValue = () => {
  //   let min = userData.data.sessions[0].kilogram
  //   let max = 0
  //   for (let i = 0; i < userData.data.sessions.length; i++) {
  //     if (userData.data.sessions[i].kilogram < min)
  //       min = userData.data.sessions[i].kilogram
  //     if (userData.data.sessions[i].kilogram > max)
  //       max = userData.data.sessions[i].kilogram
  //   }

  //   return Math.round((max - min + 2) / 2)
  // }

  return (
    <ActivityDiv>
      {/* <Wrapper> */}
      {/* <Text> */}
      <Title>Activité quotidienne</Title>
      {/* <Legende>
          <Black></Black>Poids (kg) <Red></Red>Calories brûlées (kCal)
        </Legende> */}
      {/* </Text> */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart data={userData.data.sessions}>
          <CartesianGrid
            stroke="#DEDEDE"
            strokeDasharray=" 3 3 "
            vertical={false}
          />
          <XAxis
            dataKey={'day'}
            tickFormatter={formatXAxis}
            dy={15}
            tick={{ fill: '#9B9EAC' }}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            // dataKey="kilogram"
            tickCount={4}
            tick={{ fill: '#9B9EAC' }}
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
            width={30}
            domain={[0, 'dataMax +50']}
          />

          <Tooltip content={ActivityTooltip} />
          <Legend
            width="60%"
            // verticalAlign="top"
            align="right"
            iconType={'circle'}
            iconSize={8}
            wrapperStyle={{
              top: -30,
            }}
          />
          <Bar
            name="Poids (kg)"
            yAxisId="right"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
          <Bar
            name="Calories brûlées (kCal)"
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[3.5, 3.5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
      {/* </Wrapper> */}
    </ActivityDiv>
  )
}

export default ActivitySection
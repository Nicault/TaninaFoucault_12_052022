import styled from 'styled-components'
import { useParams } from 'react-router-dom'
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
import useFetch from '../../hooks/UseFetch'

const ActivityDiv = styled.div`
  height: 320px;
  width: 835px;
  border-radius: 5px;

  margin-top: 77px;
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0212249);
  border-radius: 5px;
  // padding: 30px 60px;
`

const Wrapper = styled.div``

const Title = styled.h2`
  font-size: 15px;
  padding: 32px;
`

function ActivitySection() {
  const { userId } = useParams()
  const url = `http://localhost:3000/user/${userId}/activity`

  const { userData, isLoading } = useFetch(url)

  // console.log(userData.data.sessions)

  const formatXAxis = (tickItem) => {
    let result = tickItem.toString().slice(-2)
    if (result[0] === '0') return result.slice(1)
    else return result
  }

  return (
    <ActivityDiv>
      {!isLoading && (
        <Wrapper>
          <Title>Activité quotidienne</Title>
          <BarChart
            width={835}
            height={320}
            margin={{ top: 25, right: 0, left: 0, bottom: 25 }}
            data={userData.data.sessions}
          >
            <CartesianGrid
              stroke="#DEDEDE"
              strokeDasharray=" 3 3 "
              vertical={false}
            />
            <XAxis dataKey={'day'} tickFormatter={formatXAxis} dy={15} />
            <YAxis
              yAxisId="right"
              orientation="right"
              dataKey="kilogram"
              // tickCount={'3'}
              dx={15}
              axisLine={false}
              tickLine={false}
              // type="number"
              domain={['dataMin-1', 'dataMax+1']}
              interval={1}
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
            <Legend
              width={300}
              wrapperStyle={{
                top: -50,
                right: 20,
                borderRadius: 3,
              }}
            />
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
        </Wrapper>
      )}
    </ActivityDiv>
  )
}

export default ActivitySection

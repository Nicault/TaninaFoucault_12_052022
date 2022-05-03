import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  // Tooltip,
  Legend,
} from 'recharts'
import useFetch from '../../hooks/UseFetch'

const ActivityDiv = styled.div`
  height: 320px;
  width: 835px;
  border-radius: 5px;
`

function ActivitySection() {
  const { userId } = useParams()
  const url = `http://localhost:3000/user/${userId}/activity`

  const { userData, isLoading } = useFetch(url)

  // console.log(userData.data.sessions)

  return (
    <ActivityDiv>
      {!isLoading && (
        <div>
          <BarChart
            width={835}
            height={320}
            margin={{ top: 25, right: 0, left: 0, bottom: 25 }}
            data={userData.data.sessions}
          >
            <CartesianGrid stroke="#DEDEDE" strokeDasharray="0" />
            <XAxis dataKey={'day'} />
            <YAxis tickCount={3} />
            {/* <Tooltip /> */}
            <Legend
              width={300}
              wrapperStyle={{
                top: 20,
                right: 20,
                borderRadius: 3,
              }}
            />
            <Bar
              dataKey="kilogram"
              fill="#282D30"
              barSize={7}
              radius={[3.5, 3.5, 0, 0]}
            />
            <Bar
              dataKey="calories"
              fill="#E60000"
              barSize={7}
              radius={[3.5, 3.5, 0, 0]}
            />
          </BarChart>
        </div>
      )}
    </ActivityDiv>
  )
}

export default ActivitySection

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
import PropTypes from 'prop-types'

/**
 * Displays the activity section graph,
 
 * @prop     {object}   userData    Data get from API
 * 
 * @type     {object}   data        Specific datas used in this component
 * @type     {Array}    dataList    Texts and datas needed for the display

 * @returns  {div}                  The graph section
 */

/**
 * Format the X axis,
 
 * @param     {string}   tickItem    Date format AAAA-MM-DD
 * 
 * @returns   {string}               Date format D for ( 1 - 9 ) and DD for ( >= 10 )
 */

function ActivitySection({ userData }) {
  const data = userData.data

  const formatXAxis = (tickItem) => {
    let result = tickItem.toString().slice(-2)
    if (result[0] === '0') return result.slice(1)
    else return result
  }

  return (
    <ActivityDiv>
      <Title>Activité quotidienne</Title>
      <ResponsiveContainer width="99%" height="90%">
        <BarChart data={data.sessions}>
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
            tickCount={4}
            tick={{ fill: '#9B9EAC' }}
            dx={15}
            axisLine={false}
            tickLine={false}
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

          <Tooltip
            content={ActivityTooltip}
            cursor={{ fill: 'rgba(196, 196, 196, 0.5)' }}
          />
          <Legend
            width="60%"
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
    </ActivityDiv>
  )
}

ActivitySection.propTypes = {
  userData: PropTypes.object,
}

export default ActivitySection

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

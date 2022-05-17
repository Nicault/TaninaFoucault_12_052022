import styled from 'styled-components'

const BG = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 63px;
  width: 39px;

  border-radius: 0px;
  background: #e60000;
  color: white;

  font-size: 10px;
`

const ActivityTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <BG>
        <p>{`${payload[0].value}`}kg</p>
        <p>{`${payload[1].value}`}Kcal</p>
      </BG>
    )
  }

  return null
}

export default ActivityTooltip
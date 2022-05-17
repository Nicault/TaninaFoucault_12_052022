import styled from 'styled-components'

const BG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 39px;
  height: 25px;
  background-color: white;

  font-size: 10px;
`

const AverageTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <BG>
        <p>{`${payload[0].value}`} min</p>
      </BG>
    )
  }

  return null
}

export default AverageTooltip

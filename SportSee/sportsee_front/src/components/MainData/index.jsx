import styled from 'styled-components'

const Div = styled.div`
  height: 124px;
  width: 258px;
  border-radius: 5px;
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px 0px #00000005;

  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Icon = styled.img``

const QuantityDiv = styled.div``

const Number = styled.p`
  font-size: 20px;
  font-weight: 700;
`

const Legende = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #74798c;
`

function MainData({ logo, altTxt, howMuch, unity, what }) {
  return (
    <Div>
      <Icon src={logo} alt={altTxt} />
      <QuantityDiv>
        <Number>
          {howMuch} {unity}
        </Number>
        <Legende>{what}</Legende>
      </QuantityDiv>
    </Div>
  )
}

export default MainData

import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
 * Component that layouts data kinds (Calories, Proteines, Glucides, Lipides),
 
 * @component
 * @prop     {string}      logo        Section logo
 * @prop     {string}      altTxt      Logo alternativ text
 * @prop     {string}      howMuch     Quantity
 * @prop     {string}      unit        Unit
 * @prop     {string}      what        Type of

 * @returns  {Div}                     Each data kind
 */

function MainData({ logo, altTxt, howMuch, unit, what }) {
  return (
    <Div>
      <Icon src={logo} alt={altTxt} />
      <QuantityDiv>
        <Number>
          {howMuch} {unit}
        </Number>
        <Legende>{what}</Legende>
      </QuantityDiv>
    </Div>
  )
}

MainData.propTypes = {
  logo: PropTypes.string,
  altTxt: PropTypes.string,
  howMuch: PropTypes.number,
  unit: PropTypes.string,
  what: PropTypes.string,
}

export default MainData

const Div = styled.div`
  width: 260px;
  // width: 100%;
  // height: 125px;
  padding: 30px;
  border-radius: 5px;
  background-color: #fbfbfb;
  box-shadow: 0px 2px 4px 0px #00000005;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Icon = styled.img``

const QuantityDiv = styled.div`
  width: 40%;
`

const Number = styled.p`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`

const Legende = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: #74798c;
`

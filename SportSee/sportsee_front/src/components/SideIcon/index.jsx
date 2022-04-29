import styled from 'styled-components'

const StyledCard = styled.div`
  height: 64px;
  width: 64px;
  background-color: white;
  border-radius: 6px;
  margin-top: 20px;
`

const StyledLogo = styled.img``

function SideIcon({ logo, altTxt }) {
  return (
    <StyledCard>
      <StyledLogo src={logo} alt={altTxt} />
    </StyledCard>
  )
}

export default SideIcon

import styled from 'styled-components'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <HeaderSection>
      <LogoDiv>
        <Logo src={logo} alt="Logo SportSee" />
      </LogoDiv>
      <NavDiv>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/#">Profil</StyledLink>
        <StyledLink to="/#">Réglage</StyledLink>
        <StyledLink to="/#">Communauté</StyledLink>
      </NavDiv>
    </HeaderSection>
  )
}

export default Header

const HeaderSection = styled.section`
  z-index: 2;

  height: 90px;
  width: 100%;
  background-color: black;
  padding-top: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LogoDiv = styled.div`
  margin: 0 30px;
  width: 20%;
  display: flex;
  align-items: center;
`
const Logo = styled.img`
  height: 60.93px;
`

const NavDiv = styled.nav`
  width: 80%;
  display: flex;
  justify-content: space-around;
`
const StyledLink = styled(Link)`
  font-size: 24px;
  color: white;
`

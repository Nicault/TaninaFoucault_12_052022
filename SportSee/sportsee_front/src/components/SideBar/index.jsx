import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SideIcon from '../SideIcon'

import sideZen from '../../assets/sideZen.svg'
import sideSwim from '../../assets/sideSwim.svg'
import sideBike from '../../assets/sideBike.svg'
import sideMuscle from '../../assets/sideMuscle.svg'

/**
 * displays the side bar,
 *
 * @returns  {section}      side bar
 */

function SideBar() {
  return (
    <SideSection>
      <FakeDiv></FakeDiv>
      <SideNav>
        <StyledLink to="#">
          <SideIcon logo={sideZen} altTxt="" />
        </StyledLink>
        <StyledLink to="#">
          <SideIcon logo={sideSwim} altTxt="" />
        </StyledLink>
        <StyledLink to="#">
          <SideIcon logo={sideBike} altTxt="" />
        </StyledLink>
        <StyledLink to="#">
          <SideIcon logo={sideMuscle} altTxt="" />
        </StyledLink>
      </SideNav>
      <SideTxt>
        <p>Copiryght, SportSee 2020</p>
      </SideTxt>
    </SideSection>
  )
}

export default SideBar

const SideSection = styled.section`
  padding-top: 91px;
  padding-bottom: 128px;
  height: 100%;
  width: 115px;
  background-color: black;

  position: fixed;
  left: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const FakeDiv = styled.div``

const SideNav = styled.nav``

const StyledLink = styled(Link)``

const SideTxt = styled.div`
  width: 138px;
  font-size: 12px;
  color: white;

  transform: rotate(-90deg);
`

import styled from 'styled-components'

import useFetch from '../../hooks/UseFetch'
import MainDataSection from '../../components/MainDataSection'
import ActivitySection from '../../components/ActivitySection'
import AverageSessionSection from '../../components/AverageSessionSection'
import PerformanceSection from '../../components/PerformanceSection'
import TodayScore from '../../components/TodayScore'

const HomeSection = styled.section`
  min-width: 909px;
  min-height: 690px;
  margin-left: 115px;

  height: 100%;
  width: calc(100% - 115px);
  padding: 4% 3%;
`
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const HeaderDiv = styled.div`
  width: 100%;
  height: 15%;
  margin-bottom: 5%;
`

const HomeTitle = styled.h1`
  font-size: 48px;
`
const NameSpan = styled.span`
  color: red;
`

const Congrats = styled.p`
  margin-top: 3%;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`

const GraphSection = styled.section`
  display: flex;
  justify-content: space-between;
  height: 80%;
  width: 100%;
`
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-width: 70%;
  height: 100%;
`
const RightDiv = styled.div`
  min-width: 30%;
`
const BottomDiv = styled.div`
  display: flex;
  // width: 100%;
  height: 45%;
  justify-content: space-between;
`

function Home() {
  const { userData, isLoading } = useFetch()
  console.log(userData)

  return (
    <HomeSection>
      {!isLoading && (
        <Wrapper>
          <HeaderDiv>
            <HomeTitle>
              Bonjour{' '}
              <NameSpan>{userData[0].data.userInfos.firstName}</NameSpan>
            </HomeTitle>
            <Congrats>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </Congrats>
          </HeaderDiv>
          <GraphSection>
            <LeftDiv>
              <ActivitySection userData={userData[1]} />
              <BottomDiv>
                <AverageSessionSection userData={userData[2]} />
                <PerformanceSection userData={userData[3]} />
                <TodayScore userData={userData[0]} />
              </BottomDiv>
            </LeftDiv>
            <RightDiv>
              <MainDataSection userData={userData[0]} />
            </RightDiv>
          </GraphSection>
        </Wrapper>
      )}
    </HomeSection>
  )
}

export default Home

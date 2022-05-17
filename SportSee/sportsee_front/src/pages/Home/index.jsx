import styled from 'styled-components'

import useFetch from '../../hooks/UseFetch'
import MainDataSection from '../../components/MainDataSection'
import ActivitySection from '../../components/Graphs/ActivitySection'
import AverageSessionSection from '../../components/Graphs/AverageSessionSection'
import PerformanceSection from '../../components/Graphs/PerformanceSection'
import TodayScore from '../../components/Graphs/TodayScore'

const HomeSection = styled.section`
  min-width: 909px;
  min-height: 690px;
  margin-left: 115px;
  height: 100vh;
  width: calc(100% - 115px);
  display: flex;
  justify-content: center;
  align-tiems: center;
`
const Wrapper = styled.div`
  // background-color: blue;
  width: 90%;
  // aspect-ratio: 16 / 3;
  // margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  // align-items: center;
`

const HeaderDiv = styled.div`
  width: 100%;
  height: 10%;
  // margin-bottom: 7%;
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
  height: 70%;
  width: 100%;
  // min-height: 613px;
`
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // min-width: 65%;
  width: 100%;
  // height: 100%;
`
const RightDiv = styled.div`
  padding-left: 5%;
`
const BottomDiv = styled.div`
  // display: flex;
  height: 50%;
  // justify-content: space-between;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 4%;
`

function Home() {
  const { userData, isLoading } = useFetch()
  // console.log(userData)

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

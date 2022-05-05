import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import useFetch from '../../hooks/UseFetch'
import MainDataSection from '../../components/MainDataSection'
import ActivitySection from '../../components/ActivitySection'
import AverageSessionSection from '../../components/AverageSessionSection'
import PerformanceSection from '../../components/PerformanceSection'
import TodayScore from '../../components/TodayScore'

const HomeSection = styled.section`
  width: 100%;
  max-height: 100vh;
  magin-top: 90px;
  margin-left: 230px;
  padding: 5%;
`
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`
const HomeTitle = styled.h1`
  font-size: 48px;
`
const NameSpan = styled.span`
  color: red;
`

const CongratsDiv = styled.div`
  margin-top: 3%;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`

const GraphSection = styled.section`
  display: flex;
  justify-content: space-between;
`
const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;

  width: 60%;
`
const RightDiv = styled.div`
  width: 30%;
`
const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
`

function Home() {
  const { userId } = useParams()
  const url = `http://localhost:3000/user/${userId}`

  const { userData, isLoading } = useFetch(url)

  return (
    <HomeSection>
      {!isLoading && (
        <Wrapper>
          <HomeTitle>
            Bonjour <NameSpan>{userData.data.userInfos.firstName}</NameSpan>
          </HomeTitle>
          <CongratsDiv>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </CongratsDiv>
          <GraphSection>
            <LeftDiv>
              <ActivitySection />
              <BottomDiv>
                <AverageSessionSection />
                <PerformanceSection />
                <TodayScore />
              </BottomDiv>
            </LeftDiv>
            <RightDiv>
              <MainDataSection />
            </RightDiv>
          </GraphSection>
        </Wrapper>
      )}
    </HomeSection>
  )
}

export default Home

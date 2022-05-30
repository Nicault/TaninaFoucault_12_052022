import styled from 'styled-components'
// import UseFetch from '../../hooks/UseFetch'
import DataFormater from '../../components/DataFormater'
import MainDataSection from '../../components/MainDataSection'
import ActivitySection from '../../components/Graphs/ActivitySection'
import AverageSessionSection from '../../components/Graphs/AverageSessionSection'
import PerformanceSection from '../../components/Graphs/PerformanceSection'
import TodayScore from '../../components/Graphs/TodayScore'
import Error from '../../components/Error'

/**
 * collects the data and delivers it to the other components,
 * displays the home page,
 
 * @component
 * @type     {Map}      user        User's data fetched from API
 * @type     {boolean}  isLoading   Loading status
 * @returns  {div}                  Home page
 */

function Home() {
  const { user, isLoading } = DataFormater()

  return (
    <HomeSection>
      {!isLoading && user.get('global') !== 'can not get user' ? (
        <Wrapper>
          <HeaderDiv>
            <HomeTitle>
              Bonjour{' '}
              <NameSpan>{user.get('global').data.userInfos.firstName}</NameSpan>
            </HomeTitle>
            <Congrats>
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </Congrats>
          </HeaderDiv>
          <GraphSection>
            <LeftDiv>
              <ActivitySection userData={user.get('activity')} />
              <BottomDiv>
                <AverageSessionSection userData={user.get('averageSession')} />
                <PerformanceSection userData={user.get('performance')} />
                <TodayScore userData={user.get('global')} />
              </BottomDiv>
            </LeftDiv>
            <RightDiv>
              <MainDataSection userData={user.get('global')} />
            </RightDiv>
          </GraphSection>
        </Wrapper>
      ) : (
        <Error />
      )}
    </HomeSection>
  )
}

export default Home

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

import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import useFetch from '../../hooks/UseFetch'
import MainDataSection from '../../components/MainDataSection'
import ActivitySection from '../../components/ActivitySection'

const HomeSection = styled.section`
  width: 100%;
  padding-left: 217px;
  padding-top: 68px;
`
const HomeTitle = styled.h1`
  font-size: 48px;
`
const NameSpan = styled.span`
  color: red;
`

const CongratsDiv = styled.div`
  margin-top: 41px;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
`

const GraphSection = styled.section`
  display: flex;
`
const FirstDiv = styled.div``
const SecondDiv = styled.div``
function Home() {
  const { userId } = useParams()
  const url = `http://localhost:3000/user/${userId}`

  const { userData, isLoading } = useFetch(url)

  return (
    <HomeSection>
      {!isLoading && (
        <HomeTitle>
          Bonjour <NameSpan>{userData.data.userInfos.firstName}</NameSpan>
        </HomeTitle>
      )}
      <CongratsDiv>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </CongratsDiv>
      <GraphSection>
        {!isLoading && (
          <FirstDiv>
            <ActivitySection />
          </FirstDiv>
        )}
        {!isLoading && (
          <SecondDiv>
            <MainDataSection />
          </SecondDiv>
        )}
      </GraphSection>
    </HomeSection>
  )
}

export default Home

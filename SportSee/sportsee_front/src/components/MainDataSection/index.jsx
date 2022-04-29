import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/UseFetch'

import MainData from '../MainData'
import fat from '../../assets/fat.svg'
import calories from '../../assets/calories.svg'
import carbs from '../../assets/carbs.svg'
import protein from '../../assets/protein.svg'

const DataSection = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function MainDataSection() {
  const { userId } = useParams()
  const url = `http://localhost:3000/user/${userId}`

  const { userData, isLoading } = useFetch(url)

  return (
    <DataSection>
      {!isLoading && (
        <MainData
          logo={calories}
          altTxt="Calories"
          howMuch={userData.data.keyData.calorieCount}
          unity="Cal"
          what="Calories"
        ></MainData>
      )}
      {!isLoading && (
        <MainData
          logo={protein}
          altTxt="Proteines"
          howMuch={userData.data.keyData.proteinCount}
          unity="g"
          what="Proteines"
        ></MainData>
      )}
      {!isLoading && (
        <MainData
          logo={carbs}
          altTxt="Glucides"
          howMuch={userData.data.keyData.carbohydrateCount}
          unity="g"
          what="Glucides"
        ></MainData>
      )}
      {!isLoading && (
        <MainData
          logo={fat}
          altTxt="Lipides"
          howMuch={userData.data.keyData.lipidCount}
          unity="g"
          what="Lipides"
        ></MainData>
      )}
    </DataSection>
  )
}

export default MainDataSection

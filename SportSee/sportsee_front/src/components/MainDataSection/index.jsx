import styled from 'styled-components'

import MainData from '../MainData'
import fat from '../../assets/fat.svg'
import calories from '../../assets/calories.svg'
import carbs from '../../assets/carbs.svg'
import protein from '../../assets/protein.svg'

const DataSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding-left: 10%;
`

function MainDataSection({ userData }) {
  return (
    <DataSection>
      <MainData
        logo={calories}
        altTxt="Calories"
        howMuch={userData.data.keyData.calorieCount}
        unity="Cal"
        what="Calories"
      ></MainData>
      <MainData
        logo={protein}
        altTxt="Proteines"
        howMuch={userData.data.keyData.proteinCount}
        unity="g"
        what="Proteines"
      ></MainData>
      <MainData
        logo={carbs}
        altTxt="Glucides"
        howMuch={userData.data.keyData.carbohydrateCount}
        unity="g"
        what="Glucides"
      ></MainData>
      <MainData
        logo={fat}
        altTxt="Lipides"
        howMuch={userData.data.keyData.lipidCount}
        unity="g"
        what="Lipides"
      ></MainData>
    </DataSection>
  )
}

export default MainDataSection

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
`

function MainDataSection({ userData }) {
  const dataList = [
    {
      logo: calories,
      altTxt: 'Calories',
      howMuch: userData.data.keyData.calorieCount,
      unit: 'Cal',
      what: 'Calories',
    },
    {
      logo: protein,
      altTxt: 'Proteines',
      howMuch: userData.data.keyData.proteinCount,
      unit: 'g',
      what: 'Proteines',
    },
    {
      logo: carbs,
      altTxt: 'Glucides',
      howMuch: userData.data.keyData.carbohydrateCount,
      unit: 'g',
      what: 'Glucides',
    },
    {
      logo: fat,
      altTxt: 'Lipides',
      howMuch: userData.data.keyData.lipidCount,
      unit: 'g',
      what: 'Lipides',
    },
  ]

  return (
    <DataSection>
      {dataList.map((element) => (
        <MainData
          key={`${element.howMuch}-${element.what}`}
          logo={element.logo}
          altTxt={element.altTxt}
          howMuch={element.howMuch}
          unit={element.unit}
          what={element.what}
        ></MainData>
      ))}
    </DataSection>
  )
}

export default MainDataSection

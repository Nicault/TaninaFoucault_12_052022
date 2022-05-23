import styled from 'styled-components'
import PropTypes from 'prop-types'

import MainData from '../MainData'
import fat from '../../assets/fat.svg'
import calories from '../../assets/calories.svg'
import carbs from '../../assets/carbs.svg'
import protein from '../../assets/protein.svg'

/**
 * Displays the different data kind div in the data section,
 
 * @prop     {object}   userData    Data get from API
 * 
 * @type     {object}   data        Specific datas used in this comonent
 * @type     {Array}    dataList    Texts and datas needed for the display

 * @returns  {section}              The data section
 */

function MainDataSection({ userData }) {
  const data = userData.data.keyData

  const dataList = [
    {
      logo: calories,
      altTxt: 'Calories',
      howMuch: data.calorieCount,
      unit: 'Cal',
      what: 'Calories',
    },
    {
      logo: protein,
      altTxt: 'Proteines',
      howMuch: data.proteinCount,
      unit: 'g',
      what: 'Proteines',
    },
    {
      logo: carbs,
      altTxt: 'Glucides',
      howMuch: data.carbohydrateCount,
      unit: 'g',
      what: 'Glucides',
    },
    {
      logo: fat,
      altTxt: 'Lipides',
      howMuch: data.lipidCount,
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

MainDataSection.propTypes = {
  userData: PropTypes.object,
}

export default MainDataSection

const DataSection = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

import UseFetch from '../../hooks/UseFetch'

const user = new Map()

function DataFormater() {
  const { userData, isLoading } = UseFetch()

  if (!isLoading && userData[0] !== 'can not get user') {
    // userData[0] from cal to kCal

    let user0Cal = userData[0].data.keyData.calorieCount

    user0Cal = user0Cal.toString()
    const comas = '.'
    const length = user0Cal.length
    const position = length - 3

    if (!user0Cal.includes('.')) {
      user0Cal = [
        user0Cal.slice(0, position),
        comas,
        user0Cal.slice(position),
      ].join('')
    }

    userData[0].data.keyData.calorieCount = user0Cal

    // userData[0] format percentage and standardize the data name

    if (userData[0].data.score)
      userData[0].data.realScore = userData[0].data.score * 100
    if (userData[0].data.todayScore)
      userData[0].data.realScore = userData[0].data.todayScore * 100

    // userData[1] from date DD-MM-YYYY to date J or JJ

    let user1Date = userData[1].data

    for (let i = 0; i < user1Date.sessions.length; i++) {
      let result = user1Date.sessions[i].day.toString().slice(-2)
      if (result[0] === '0') userData[1].data.sessions[i].day = result.slice(1)
      else userData[1].data.sessions[i].day = result
    }

    // userData[2] from number to days (L, M, M ...)

    let user2Day = userData[2].data
    const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

    for (let i = 0; i < user2Day.sessions.length; i++) {
      user2Day.sessions[i].day = week[i]
    }

    // userData[3] association and translation

    const user3Number = userData[3].data
    const kind = userData[3].data.kind

    const translateItem = (item) => {
      if (item === 'cardio') return 'Cardio'
      if (item === 'energy') return 'Energie'
      if (item === 'endurance') return 'Endurance'
      if (item === 'strength') return 'Force'
      if (item === 'speed') return 'Vitesse'
      if (item === 'intensity') return 'Intensité'
    }

    if (typeof userData[3].data.data[0].kind == 'number') {
      for (let i = 0; i < user3Number.data.length; i++) {
        let result = kind[user3Number.data[i].kind]
        userData[3].data.data[i].kind = translateItem(result)
      }
    }

    // Fil the map with the formated datas

    user.set('global', userData[0])
    user.set('activity', userData[1])
    user.set('averageSession', userData[2])
    user.set('performance', userData[3])
  }

  return { user, isLoading }
}

export default DataFormater

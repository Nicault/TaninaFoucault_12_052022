import styled from 'styled-components'
import PropTypes from 'prop-types'

import React, { useLayoutEffect, useState, useRef } from 'react'

import {
  RadialBarChart,
  RadialBar,
  ResponsiveContainer,
  PolarAngleAxis,
} from 'recharts'

/**
 * Displays the today score graph,
 
 * @prop     {object}   userData    Data get from API
 * 
 * @type     {object}   data        Specific datas used in this component
 *
 * @returns  {div}                  The graph section
 */

/**
 * Format the score from a percentage to a whole number ( ex : 0.8 -> 80 ),
 *
 * @param     {number}   tickItem    percentage
 *
 * @returns   {number}               whole number
 */

/**
 * Get the state of the width of the div to fill the background regarding to,
 * If the width is bigger : set the height. if the height is bigger : set the width.
 * in order to have a perfect responsive circle
 * @prop      {number}   width       width of the div regarding the screen's size
 *
 * @param     {number}   width       width of the div regarding the screen's size
 * @param     {function} setWidth    Updates the size
 *
 * @returns   {number}               width of the div regarding the screen's size
 */

/**
 * Get the state of the height of the div to fill the background regarding to,
 * If the width is bigger : set the height. if the height is bigger : set the width.
 * in order to have a perfect responsive circle
 * @prop      {number}   height       height of the div regarding the screen's size
 *
 * @param     {number}   height       height of the div regarding the screen's size
 * @param     {function} setHeight    Updates the size
 *
 * @returns   {number}                height of the div regarding the screen's size
 */

function TodayScore({ userData }) {
  const data = userData.data

  const formatScore = () => {
    if (data.score) return data.score * 100
    else if (data.todayScore) return data.todayScore * 100
  }

  const percentValue = formatScore()

  const ref = useRef(Wrapper)
  const [width, setWidth] = useState(ref.current.offsetWidth)
  const [height, setHeight] = useState(ref.current.offsetHeight)

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth)
    setHeight(ref.current.offsetHeight)
    const handleWindowResize = () => {
      setWidth(ref.current.offsetWidth)
      setHeight(ref.current.offsetHeight)
    }

    window.addEventListener('resize', handleWindowResize)

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  return (
    <Wrapper ref={ref}>
      <Title>Score</Title>
      <Text height={height} width={width}>
        <Percentage>{percentValue} %</Percentage>
        <br />
        de votre <br />
        objectif
      </Text>

      <ResponsiveContainer width="99%" height="99%">
        <RadialBarChart
          innerRadius="100%"
          outerRadius="100%"
          barSize={10}
          data={[data]}
          startAngle={90}
          endAngle={450}
          background={{ fill: '#FBFBFB' }}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            fill="red"
            minAngle={15}
            background={{ fill: '#FBFBFB' }}
            dataKey={formatScore}
            cornerRadius={30 / 2}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </Wrapper>
  )
}

TodayScore.propTypes = {
  userData: PropTypes.object,
  ref: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
}

export default TodayScore

const Wrapper = styled.div`
  // height: 100%;
  // width: 30%;

  padding: 10%;

  background-color: #fbfbfb;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`

const Title = styled.h2`
  font-size: 15px;
  position: absolute;
  top: 5%;
  left: 5%;
`
const Text = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: black;
  position: absolute;
  line-height: 26px;
  color: #282d30;

  background-color: white;
  // width: calc(80% - 20px);

  width: ${({ width, height }) => width < height && 'calc(80% - 20px)'};
  height: ${({ width, height }) => height < width && 'calc(80% - 20px)'};

  aspect-ratio: 1 / 1;
  border-radius: 100%;
`

const Percentage = styled.span`
  font-size: 26px;
  font-weight: 700;
`

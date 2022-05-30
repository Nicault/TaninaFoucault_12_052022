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
 * @returns  {div}                  The graph section
 */

function TodayScore({ userData }) {
  const data = userData.data

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
        <Percentage>{data.realScore} %</Percentage>
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
            dataKey="realScore"
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

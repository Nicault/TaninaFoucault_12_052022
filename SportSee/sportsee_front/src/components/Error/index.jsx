import styled from 'styled-components'

/**
 * displays the error message,
 *
 * @returns  {div}      Error message
 */

const Text = styled.p``

function Error() {
  return (
    <Wrapper>
      <Text>Oups... Une erreur est survenue</Text>
    </Wrapper>
  )
}

export default Error

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

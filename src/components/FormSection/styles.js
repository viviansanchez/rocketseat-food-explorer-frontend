import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT_400};

    margin-bottom: 1rem;
  }
`
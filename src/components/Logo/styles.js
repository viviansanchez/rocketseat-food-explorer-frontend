import styled from 'styled-components'

export const Container = styled.header`
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 2.313rem;

  display: flex;
  gap: 0.75rem;

  svg {
    width: 2.75rem;
    height: 2.75rem;

  }
`
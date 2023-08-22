import styled from 'styled-components'

export const Container = styled.span`
  font-size: 0.875rem;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  padding: 0.25rem 0.5rem;
  background-color: ${({theme}) => theme.COLORS.DARK_1000};
  border-radius: 0.313rem;
`
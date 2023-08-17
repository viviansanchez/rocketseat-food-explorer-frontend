import styled from 'styled-components'

export const Container = styled.div`
  width: 6.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;

  button {
    background: transparent;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};
  }
`
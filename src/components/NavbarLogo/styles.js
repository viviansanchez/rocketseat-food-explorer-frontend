import styled from 'styled-components'

export const Container = styled.div`
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  font-family: 'Roboto', sans-serif;

  .client-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    p {
      font-weight: 700;
    }
  }

  .admin-logo {
    font-size: 0.75rem;
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }
`
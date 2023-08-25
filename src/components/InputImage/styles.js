import styled from 'styled-components'

export const Container = styled.div`

  > label {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: ${({theme}) => theme.COLORS.LIGHT_400};

    > input {
      display: none;
    }

    > div {
      height: 3.063rem;
      margin-top: 0.1rem;
      padding: 0.75rem 2rem;
      border-radius: 0.5rem;
      background-color: ${({theme}) => theme.COLORS.DARK_800};

      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.5rem;
        height: 1.5rem;
      }

      p {
        font-family: 'Poppins', sans-serif;
        font-size: 0.875rem;
        font-weight: 500;
      }
    }
  }
`
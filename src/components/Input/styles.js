import styled from 'styled-components'

export const Container = styled.div`

font-family: 'Roboto', sans-serif;
margin-bottom: 2rem;

  label {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    font-weight: 400;
  }

  > div {
    background-color: ${({theme}) => theme.COLORS.DARK_900};

    display: flex;
    align-items: center;

    margin-top: 0.5rem;
    border-radius: 0.313rem;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      color: ${({theme}) => theme.COLORS.LIGHT_400};
      margin: 0 0.875rem;
    }

    input {
      padding: 0.75rem 0.875rem;
      width: 100%;

      font-size: 1rem;

      color: ${({theme}) => theme.COLORS.LIGHT_100};
      background-color: transparent;
      border: none;

      &::placeholder {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
      }
    }
  }

  
`
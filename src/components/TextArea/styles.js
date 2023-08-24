import styled from 'styled-components'

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;

  label {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-size: 1rem;
    font-weight: 400;
  }

  textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    
    width: 100%;
    height: 10.75rem;

    margin-top: 1rem;
    padding: 0.875rem;

    resize: none;
    border: none;
    border-radius: 0.5rem;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }
`
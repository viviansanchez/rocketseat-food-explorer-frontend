import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.625rem 1rem; 
  border-radius: 0.5rem;
  max-width: 10rem;

  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  > input, button {
    border: none;
    background: none;

    color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
  }

  > input {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    outline: none;
    width: 100%; 
  }

  > button {
    height: 1rem;
    width: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    transition: scale 100ms;
    
    svg {
      height: 1rem;
      width: 1rem;
    }

    &:hover {
      scale: 1.2;  
    }
  }
`
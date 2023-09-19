import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  border: none;

  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  svg {
    width: 2rem;
    height: 2rem;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
  }

  @media only screen and (min-width: 768px){
    p {
      font-weight: 700;
    }
  }
`
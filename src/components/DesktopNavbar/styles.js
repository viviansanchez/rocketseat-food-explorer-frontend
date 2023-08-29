import styled from 'styled-components'

export const Container = styled.nav`
  grid-area: navbar;
  height: 7.125rem;
  padding: 1.5rem 7.688rem;

  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;

  background-color:  ${({theme}) => theme.COLORS.DARK_700};

  .input {
    width: 36.313rem;
    margin-bottom: 0;

    > div {
      margin-top: 0;
    }
  }

  .button {
    width: 13.5rem;    
  }

  .logout {
    width: 2rem;
    height: 2rem;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1260px) {
    padding: 1.5rem 1rem;
    gap: 0.5rem;

    .input {
      width: 20rem;
    }
  }
`
import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 7.125rem auto 4.875rem;
  grid-template-areas: 
    "header"
    "main"
    "footer"
  ;
`

export const Header = styled.header`
  grid-area: header;
  padding: 3.5rem 1.75rem 1.5rem;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  
  display: flex;
  align-items: center;
  gap: 1rem;

  a {
    color: ${({theme}) => theme.COLORS.LIGHT_100};
    height: 1.125rem;
    width: 1.125rem;

    svg {
    height: 1.125rem;
    width: 1.125rem;
    }
  }
  
  p {
    font-family: 'Roboto', sans-serif;
    font-size: 1.325rem;
  }
`

export const Main = styled.main`
  grid-area: main;

  padding: 2.25rem 1.75rem 0.875rem;
`
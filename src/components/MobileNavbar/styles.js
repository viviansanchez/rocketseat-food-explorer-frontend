import styled from 'styled-components'

export const Container = styled.nav`
  /* display: none; isso vai ser controlado por uma classe no mobileheader*/
  display: grid;
  grid-template-rows: 7.125rem auto 4.875rem;
  grid-template-areas: 
    "close-btn-container"
    "search-links-container"
    "footer"
  ;

  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
`

export const CloseBtnContainer = styled.div`
  grid-area: close-btn-container;

  background-color: ${({theme}) => theme.COLORS.DARK_700};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  padding: 3.5rem 1.75rem 1.5rem;


  display: flex;
  align-items: center;
  gap: 1rem;

  button {
    background: none;
    border: none;
    color: ${({theme}) => theme.COLORS.LIGHT_100};

    height: 1.125rem;
    width: 1.125rem;

    transition: scale 400ms;

    &:hover {
      scale: 1.2;
    }
  }

  svg {
    height: 1.125rem;
    width: 1.125rem;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 1.325rem;
    font-weight: 400;
  }
`

export const SearchAndLinksContainer = styled.div`
  grid-area: search-links-container;

  background-color: ${({theme}) => theme.COLORS.DARK_400};
  padding: 2.25rem 1.75rem 0.875rem;
`
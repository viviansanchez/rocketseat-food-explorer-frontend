import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 7.125rem auto 4.875rem;
  grid-template-areas: 
  "navbar"
  "main"
  "footer"
  ;

  img {
    width: 16.5rem;
    height: 16.5rem; 
  }
`

export const Main = styled.main`
  grid-area: main;

  padding: 1rem 3.5rem 2.125rem;

  .content-wrapper {
    margin-top: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
    width: 16.5rem;
    height: 16.5rem; 
    }

    .divider-for-desktop-layout {
      max-width: 43rem;
    }
  }

  @media only screen and (min-width: 768px) {
    padding: 1.5rem 7.625rem;

    .content-wrapper {
      margin-top: 2.625rem;
      flex-direction: row;
      gap: 3rem;

      img {
        width: 24.375rem;
        height: 24.375rem;
      }
    }
  }
`

export const DishInfo = styled.div`
  margin: 1rem 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  h2 {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 1.688rem;
    font-weight: 500;
  }

  p {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 1.013rem;
    font-weight: 400;
  }

  @media only screen and (min-width: 768px){
    margin-top: 0;

    h2 {
      font-size: 2.5rem;
    }

    p {
      font-size: 1.5rem;
    }
  }
`

export const CounterAndButtonContainer = styled.div`
  display: flex;
  gap: 1rem;

  > div {
    svg {
      border: 1px solid blue;
    }
    border: 1px solid green;
    
  }
`
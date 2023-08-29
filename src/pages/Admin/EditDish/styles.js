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

export const Main = styled.main`
  grid-area: main;

  padding: 0.68rem 2rem 3.32rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.LIGHT_300};

    margin: 2.2rem 0 1.5rem;
  }

  @media only screen and (min-width: 768px){
    padding: 2.5rem 7.8rem 7.25rem;
  }
`

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;

  .ingredients {

    > div {
      padding: 0.25rem 0.5rem;
      border-radius: 0.5rem;
      background-color: ${({theme}) => theme.COLORS.DARK_800};

      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      gap: 1rem;
      
    }
  }

  .btn-wrapper {
    display: flex;
    gap: 2rem;

    button:nth-child(1){
      background-color: ${({theme}) => theme.COLORS.DARK_800};

      &:hover {
        background-color: ${({theme}) => theme.COLORS.LIGHT_700};
      }

      &:disabled {
        background-color: ${({theme}) => theme.COLORS.DARK_200};
      }
    }
  }

  /* the following class is for changing input component styling */
  .change-input-style{
   margin-bottom: 0;

    > div {
      background-color: ${({theme}) => theme.COLORS.DARK_800};
      height: 3.063rem;
    }
  }

  @media only screen and (min-width: 768px){
    gap: 2rem;

    /* the grid works but is not 100% accurate to the figma design (2nd row and button are not exact same) - keeping like this for now */
    grid-template-areas: 
      "A B C"
      "D D E"
      "F F F"
      ". . G "
    ;

    .grid-image {
      grid-area: A;
    }

    .grid-name {
      grid-area: B;
    }

    .grid-category {
      grid-area: C;
    }

    .grid-ingredients {
      grid-area: D;
    }

    .grid-price {
      grid-area: E;
    }

    .grid-textarea {
      grid-area: F;
    }

    .grid-btn {
      grid-area: G;
    }

    .ingredients {
      > div {
        justify-content: flex-start;
      }
    }
  }
`
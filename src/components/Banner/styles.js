import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 7.5rem;

  background: ${({theme}) => theme.COLORS.GRADIENT_200};
  border-radius: 0.183rem;
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  text-align: right;
  
  display: flex;
  justify-content: right;
  position: relative;

  img {
    width: 11.938rem;
    height: 9.313rem;
    opacity: 0.8;

    position: absolute;
    bottom: 0;
    left: -29px;
  }

  > div {
    width: 70%;
    padding-top: 2.25rem;
    padding-right: 1.313rem;
    
    h3 {
      font-size: 1.125rem;
      font-weight: 500;
    }

    h4 {
      font-size: 0.75rem;
      font-weight: 400;
    }
  }

  @media only screen and (max-width: 350px) {
    > div {
      padding-top: 0.5rem;
      padding-right: 0.5rem;
    }
  }

  @media only screen and (min-width: 768px){
    height: 16.25rem;

    img {
      width: 25.5rem;
      height: 17.4rem;
      left: -3.75rem;
    }

    > div {
      width: 55%;

      h3 {
        font-size: 2.5rem;
      }

      h4 {
        font-size: 1rem;
      }
    }
  }

  @media only screen and (min-width: 1200px){

    img {
      width: 39.5rem;
      height: 25.375rem;
    }

    > div {
      padding-top: 5.5rem;
      padding-right: 6.25rem;
    }
  }
`
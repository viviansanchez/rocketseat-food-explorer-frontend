import styled from "styled-components";

export const Container = styled.h2`
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-weight: 500;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;

  @media only screen and (min-width: 768px){
    font-size: 2rem;
  }
`
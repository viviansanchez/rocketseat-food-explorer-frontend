import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0.625rem;

  border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

  a {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    font-size: 1.5rem;
    font-weight: 300;
  }
`
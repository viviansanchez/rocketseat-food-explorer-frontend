import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  .desktop {
    display: none;
  }

  @media only screen and (min-width: 768px){
    .mobile {
      display: none;
    }

    .desktop {
      display: flex;
    }
  }
`
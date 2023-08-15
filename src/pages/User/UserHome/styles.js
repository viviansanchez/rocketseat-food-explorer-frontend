import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

display: grid;
grid-template-rows: 7.125rem auto 4.875rem;
grid-template-areas: 
 "navbar"
 "main"
 "footer"
;
`

export const Main = styled.main`
  grid-area: main;
  overflow-y: auto;
`
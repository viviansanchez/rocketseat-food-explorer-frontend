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

/* .hide {
  display: none;
}

.show {
  display: block;
}

@media only screen and (min-width: 768px) {
  .hide {
    display: block;
  }

  .show {
    display: none;
  }
} */
`

export const Main = styled.main`
  grid-area: main;
  /* overflow-y: auto; acho que nao precisa disso at all*/

  width: 100%;
  margin: 0 auto;
  padding: 2.75rem 1rem 1.5rem;

  border: 1px solid red;

  @media only screen and (min-width: 768px){
    padding: 10.25rem 7.75rem 2.938rem;
  }
`

//da pra usar classe hide e show com display none e display block pra deixar o navbar desktop escondido e ai trocar com media query (a partir de tal mobile vira display none e desktop vira display block)
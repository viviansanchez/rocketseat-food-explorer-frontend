import styled from "styled-components";

export const Container = styled.div`
grid-area: navbar;
height: 7.125rem;
padding: 3.5rem 1.75rem 1.5rem;

background-color:  ${({theme}) => theme.COLORS.DARK_700};

display: flex;
align-items: center;
justify-content: center;
gap: 4.688rem;

color: ${({theme}) => theme.COLORS.LIGHT_100};

.navbar-display-none {
  display: none;
}

.navbar-btn {
  width: 1.5rem;
  height: 1.5rem; 
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  background: none;
  border: none;

  transition: scale 400ms;

  &:hover {
    scale: 1.2;
  }

  .list-svg {
    width: 1.5rem;
    height: 1.5rem; 
  }
}

#navbar-btn {
  border: 1px solid red;
}

.receipt {
  position: relative;
  width: 2rem;
  height: 2rem;


  .receipt-svg {
    width: 2rem;
    height: 2rem;
  }

  span {
    background-color: ${({theme}) => theme.COLORS.TOMATO_100};
    font-size: 0.875rem;
    font-weight: 500;

    width: 20px;
    height: 20px;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: -8px;
    right: -8px;
  }
}

@media only screen and (max-width: 420px){
  gap: 0;
  justify-content: space-between;
}
`
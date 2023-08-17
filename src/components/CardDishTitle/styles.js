import styled from 'styled-components'

export const Container = styled.a`
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-size: 0.875rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 0.1rem;

  @media only screen and (min-width:768px){
    font-size: 1.5rem;
    font-weight: 700;
  }
`




// ver a partir da pg 141 do stage 09 
//styled(Link) importando Link de react-router-dom aqui! pg 145
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  color: ${({theme}) => theme.COLORS.LIGHT_300};
  font-size: 0.875rem;
  font-weight: 500;

  display: flex;
  align-items: center;
  gap: 0.1rem;

  transition: scale 400ms, color 400ms;

  &:hover {
    scale: 1.1;
    color: ${({theme}) => theme.COLORS.CAKE_200};
  }

  p {
    max-width: 10rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  @media only screen and (min-width:768px){
    font-size: 1.5rem;
    font-weight: 700;

    p {
      max-width: 15.875rem;
    }
  }
`
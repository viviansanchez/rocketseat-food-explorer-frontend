import styled from 'styled-components'

export const Container = styled.div`
  width: 13.125rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;

  position: relative;

  border: 1px solid ${({theme}) => theme.COLORS.DARK_300};
  border-radius: 0.5rem;
  background-color: ${({theme}) => theme.COLORS.DARK_200};

  img {
    width: 5.5rem;
    height: 5.5rem;
  }

  .top-icon {
    color: ${({theme}) => theme.COLORS.LIGHT_300};
    background: transparent;
    border: none;
    width: 1.5rem;
    height: 1.375rem;

    position: absolute;
    top: 1rem;
    right: 1rem;

    > svg {
      color: ${({theme}) => theme.COLORS.LIGHT_300};
      width: 1.5rem;
      height: 1.375rem;
    }
  }

  @media only screen and (min-width: 768px){
    width: 19rem;
    gap: 0.938rem;
  }
`

export const Description = styled.p`
  color: ${({theme}) => theme.COLORS.LIGHT_400};
  font-size: 0.875rem;
  font-weight: 400;

  display: none;

  @media only screen and (min-width: 768px){
    display: block;
  }
`

export const Price = styled.p`
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;

  color: ${({theme}) => theme.COLORS.CAKE_200};

  @media only screen and (min-width: 768px){
    font-size: 2rem;
  }
`

export const CounterAndButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media only screen and (min-width: 768px){
    flex-direction: row;
    align-items: center;

    > button {
      width: 5.75rem;
    }
  }
`
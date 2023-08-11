import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 9.875rem;
  margin: 0 auto;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 768px){
    flex-direction: row;
    justify-content: center;
    gap: 19.125rem;
    
    padding-top: 0;
 }
`

export const Form = styled.form`
 margin-top: 4.625rem;
 width: 19.75rem;

 display: flex;
 flex-direction: column;

 @media only screen and (min-width: 768px){
  width: 29.75rem;
  padding: 4rem;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.COLORS.DARK_700};
 }

 h1 {
    text-align: center;
    margin-bottom: 2rem;

    color: ${({theme}) => theme.COLORS.LIGHT_100};
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.8rem;

    display: none;

    @media only screen and (min-width: 768px) {
      display: block;
    }
 }

 a {
  margin-top: 2rem;
  text-align: center;

  font-size: 0.875rem;
  font-weight: 500;
  color: ${({theme}) => theme.COLORS.LIGHT_100};
 }
`




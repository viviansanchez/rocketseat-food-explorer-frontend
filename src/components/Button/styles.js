import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  padding: 0.75rem 0;
  background-color: ${({theme}) => theme.COLORS.TOMATO_100};
  color: ${({theme}) => theme.COLORS.LIGHT_100};
  
  font-size: 0.875rem;
  line-height: 1.5rem;
  font-weight: 500;

  border: none;
  border-radius: 0.313rem;

  &:disabled {
    background-color: ${({theme}) => theme.COLORS.TOMATO_400};
  }

  &:hover {
    background-color: ${({theme}) => theme.COLORS.TOMATO_200};
  }
  `
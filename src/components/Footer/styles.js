import styled from 'styled-components'

export const Container = styled.footer`
  height: 4.875rem;
  padding: 1.5rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.406rem;

    svg {
      width: 1.375rem;
      height: 1.125rem;
    };

    p {
      font-family: 'Roboto', sans-serif;
      font-size: 0.95rem;
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.LIGHT_700};
    }
  }

  > p {
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.LIGHT_200};
  }
`
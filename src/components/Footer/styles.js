import styled from 'styled-components'

export const Container = styled.footer`
  height: 4.875rem;
  padding: 1.5rem;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  color: white;

  > div {
    display: flex;
    align-items: center;
    gap: 0.406rem;

    svg {
      width: 1.375rem;
      height: 1.125rem;
    };

    p{
      font-size: 0.95rem;
      font-weight: 700;
    }
  }

  > p {
    font-size: 0.75rem;
    font-weight: 400;
  }
`
// some details like font and color are missing, but overall component is done
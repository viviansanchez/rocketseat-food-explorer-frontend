import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;


  label {
    color: ${({theme}) => theme.COLORS.LIGHT_400};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }

  select {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;

    padding: 1rem;
    border: none;
    border-radius: 0.5rem;

    background-color: ${({theme}) => theme.COLORS.DARK_800};
    color: ${({theme}) => theme.COLORS.LIGHT_400};

    appearance: none;
    -webkit-appearance: none;
    background-image: url('data:image/svg+xml,<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.4545 8.75358C4.89384 8.31424 5.60616 8.31424 6.0455 8.75358L12 14.7081L17.9545 8.75358C18.3938 8.31424 19.1062 8.31424 19.5455 8.75358C19.9848 9.19292 19.9848 9.90523 19.5455 10.3446L12.7955 17.0946C12.3562 17.5339 11.6438 17.5339 11.2045 17.0946L4.4545 10.3446C4.01517 9.90523 4.01517 9.19292 4.4545 8.75358Z" fill="%23C4C4CC"/></svg> ');
    background-repeat: no-repeat;
    background-position: top 50% right 1rem;
  }
`
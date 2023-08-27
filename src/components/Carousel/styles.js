import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: fit-content;

  .carousel-wrapper {
    min-width: 100%;
    width: 10rem;
    /* applying these 2 width above is kind of a hack I found to resolve an issue with swiper and page container begin a grid. I had a lot of troube with Swiper implementation. The slider turned huge (like 10k width was being applied as a style inline) for seemingly no reason --> I found out it was because the page container is a grid, and there is a weird interaction that may occur with Swiper. I found different suggestions and tried a lot of them and this one ended working out
     This comment is huge but I think it should stay here for now. I am considering switching to another lib (Splider) in the future https://splidejs.com/*/

    .swiper {
      height: 100%;

      --swiper-navigation-size: 1.25rem;
      --swiper-navigation-color: ${({theme}) => theme.COLORS.LIGHT_100};
    }
  }
`
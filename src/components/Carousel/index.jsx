import { Container } from "./styles";

import { SectionTitle } from "../SectionTitle";
import { Card } from "../Card";

// swiper:
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'


export function Carousel({ title, isAdmin = false, className, dishes }) {

  return(
    <Container className={className}>
      <SectionTitle title={title} />

      <div className="carousel-wrapper">
        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={8}
          breakpoints={{
            460: {
              slidesPerView: 2,
              spaceBetween: 8,                          
            },
            670: {
              slidesPerView: 3,
              spaceBetween: 16,              
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            860: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            1170: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
            1480: {
              slidesPerView: 4,
              spaceBetween: 16,
            }
          }}
        >
          {
            dishes.map(dish => (
              <SwiperSlide key={dish.id}>
                <Card 
                isAdmin={isAdmin}
                  data={dish}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>   
      </div>
    </Container>
  )
}
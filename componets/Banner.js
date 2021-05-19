import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'


SwiperCore.use([Navigation, Pagination, Autoplay])

function Banner() {

  const slides = []
  for (let i = 101; i < 105; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" >

        <style jsx global>{`
          .swiper-container { 
            /*background-color: white;*/
            width: 100%;
            height: 100%;
          }
          
          .swiper-container img { 
            width: 100%
          }
        `}</style>

        <img
          src={`https://picsum.photos/id/${i}/1800/700`}
          alt={`Slide-${i}`}
          loading={`lazy`}

        />
      </SwiperSlide>
    )
  }

  return (
    <Swiper id="main" tag="section" wrapperTag="ul"
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      pagination={{ clickable: 'true', }} >

      <style jsx global>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: #130282 !important;
          }
          
          .swiper-pagination-bullet {
            opacity: 0.3;
            background-color: #130282;
          }
          
          .swiper-pagination-bullet-active {
              opacity: 1;
          }
        `}
      </style>

      {slides}
    </Swiper>
  )
}

export default Banner

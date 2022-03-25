import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay, Lazy } from 'swiper'
import 'swiper/swiper-bundle.css'

SwiperCore.use([Navigation, Pagination, Autoplay, Lazy])

function Banner() {

  const slides = []
  for (let i = 1; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`} tag="li" >

        <style jsx global>{`
          .swiper-container { 
            /*background-color: white;*/
            width: 100%;
            height: 100%;
            max-height: 960px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .swiper-container img { 
            width: 100%;
          }

        `}</style>

        <img
          src={`/images/C${i}.jpg`}
          alt={`Slide-${i}`}
        />
      </SwiperSlide>
    )
  }

  return (
    <Swiper id="main" tag="section" wrapperTag="ul"
      autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
      pagination={{ clickable: 'true', }}
      className="mt-6 sm:mt-0"
    >

      <style jsx global>
        {`
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

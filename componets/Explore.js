import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import Card from '../componets/Card'


SwiperCore.use([Navigation])

function Explore() {
  return (
    <div className="bg-blue-0 text-white-0 ml-2 mr-2 mt-8">

      <h1>Tendencias</h1>

      <Swiper
        navigation={true}
        slidesPerView={1}
        spaceBetween={8}
        breakpoints={{
          "512": {
            "slidesPerView": 2
          },
          "768": {
            "slidesPerView": 3
          },
          "1024": {
            "slidesPerView": 4
          },
          "1472": {
            "slidesPerView": 5
          },
          "2496": {
            "slidesPerView": 6,
            "spaceBetween": 9
          }
        }}
        className="mySwiper">


        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>

  )
}

export default Explore

{/*
<Image
  src="/images/scont-6.png"
  alt="Slide_6"
  width={292}
  height={118}
/>
*/}
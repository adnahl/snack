import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination } from 'swiper/core'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'


SwiperCore.use([Pagination])

function Explore() {
  return (
    <div className="bg-blue-0 text-white-0 mt-8">
      <Swiper slidesPerView={1} spaceBetween={1}
        breakpoints={{
          "640": {
            "slidesPerView": 2,
            "spaceBetween": 2
          },
          "768": {
            "slidesPerView": 4,
            "spaceBetween": 4
          },
          "1024": {
            "slidesPerView": 5,
            "spaceBetween": 5
          }
        }}
        className="mySwiper">


        <SwiperSlide>
          <Image
            src="/images/scont-1.png"
            alt="Slide_1"
            width={1024}
            height={768}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/scont-2.png"
            alt="Slide_2"
            width={1024}
            height={768}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/scont-3.png"
            alt="Slide_3"
            width={1024}
            height={768}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/scont-4.png"
            alt="Slide_4"
            width={1024}
            height={768}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/scont-5.png"
            alt="Slide_5"
            width={1024}
            height={768}
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/images/scont-6.png"
            alt="Slide_6"
            width={1024}
            height={768}
          />
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
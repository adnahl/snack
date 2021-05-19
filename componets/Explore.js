import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import Image from 'next/image'
import Card from '../componets/Card'

SwiperCore.use([Navigation])





function Explore({ CategoryName }) {
  return (
    <div className="bg-blue-0 text-white-0 ml-2 mr-2 mt-10">

      <h1 className=" shadow-inner text-xl font-black mb-3 tracking-wider">
        {CategoryName}
      </h1>

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
        }} >

        <style jsx global>
          {`
          .swiper-button-prev,
          .swiper-button-next {
            color: #130282 !important;
            transform: translateY(16px);
          }
        `}
        </style>

        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card
              Title="Singing the dream"
              Snacker="Alex Sonta"
              CoverImage="C2.png"
              ChapterName="Una hora antes del show"
              Season={1}
              Chapter={3}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card
              Title="A mad nigth show"
              Snacker="Violeta Rex"
              CoverImage="C3.png"
              ChapterName="The mortal kiss"
              Season={1}
              Chapter={5}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card
              Title="The game is not over"
              Snacker="Omega Hack"
              CoverImage="C5.png"
              ChapterName="A special f*** trick"
              Season={2}
              Chapter={1}
            />
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card
              Title="El show de Miree"
              Snacker="Miree"
              CoverImage="C23.png"
              ChapterName="Pijamada"
              Season={1}
              Chapter={1}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card
              Title="Mr. Dance"
              Snacker="Dj Rock"
              CoverImage="C17.png"
              ChapterName="Party Sep 05"
              Season={1}
              Chapter={8}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="transform transition duration-500 hover:scale-95">
            <Card
              Title="Diario de chicas"
              Snacker="Doble Ana"
              CoverImage="C10.png"
              ChapterName="Quería con las 2"
              Season={2}
              Chapter={1}
            />
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
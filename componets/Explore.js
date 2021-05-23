import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper-bundle.css'
import Card from '../componets/Card'

SwiperCore.use([Navigation])


export default function Explore({ CategoryName, vid }) {
  return (
    <div className="bg-blue-0 text-white-0 ml-2 mr-2 mt-6">

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


        {

          vid.map((v) => (
            <SwiperSlide>
              <div className="transform transition duration-500 hover:scale-95">
                <Card key={`${CategoryName}-${v.id}`} CategoryName={CategoryName} video={v} />
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>

      <hr className="opacity-5 text-white-0 mt-6" />
    </div>

  )
}

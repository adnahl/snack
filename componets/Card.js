import Image from 'next/image'
import Link from "next/link"

function Card({ video, CategoryName }) {
  return (
    <>
      <Link href="/about"><a>
        <button className="hover:text-green-0 transform transition duration-500 hover:scale-110">
          <h3 className=" tracking-wide mb-1 text-l font-bold text-shadow">{video.title}</h3>
        </button>
      </a></Link>

      <br />

      <div className="relative">

        <Image
          src={`/images/${video.coverImage}`}
          alt="Image_1"
          width={910}
          height={512}
          className=" rounded absolute w-full h-48 object-cover mb-2 transform transition duration-500 hover:scale-110" />

        <button className=" top-2 left-2 z-10 absolute flex flex-row items-center pb-4 hover:text-green-0 transform transition duration-500 hover:scale-110">
          <Image
            src={`/images/Perfil5.jpg`}
            width={24}
            height={24}
            className="rounded-full"
          />
          <h5 className=" pl-5 text-sm font-semibold bg-blue-0 rounded-r pr-2 -m-3 bg-opacity-50 ">{`${video.snacker}`}</h5>
        </button>


      </div>


      {
        CategoryName == "My Snacks" ?

          <div className="text-sm flex flex-row justify-between">
            <button className="hover:text-green-0 transform transition duration-500 hover:scale-110 text-justify pr-4 ">
              {video.chapterName}
            </button>
            <div>
              <h5 className="flex justify-end">{`S${video.pos.season}:C${video.pos.chapter}`}</h5>
            </div>
          </div>

          : CategoryName == "New" ?

            <div className="text-sm flex flex-row justify-between">
              <button className="hover:text-green-0 transform transition duration-500 hover:scale-110 text-justify pr-4 ">
                {video.chapterName}
              </button>
              <div>
                <h5 className="flex justify-end">{`S${video.pos.season}:C${video.pos.chapter}`}</h5>
              </div>
            </div>

            : ""

      }

    </>
  )
}

export default Card

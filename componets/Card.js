import VidDescription from '../componets/VidDescription'
import Image from 'next/image'
import Link from 'next/link'

function Card({ video, CategoryName }) {

  return (
    <div>
      <Link href="/about"><a>
        <button className="hover:text-green-0 transform transition duration-500 hover:scale-110">
          <h3 className=" tracking-wide mb-1 text-l font-bold text-shadow">{video.title}</h3>
        </button>
      </a></Link>

      <br />

      <div className="relative">

        <Link href={`/video/${video.id}`}>
          <a>
            <Image
              key={`Cover-${video.id}`}
              quality={50}
              src={`/images/${video.coverImage}.jpg`}
              alt="Image_1"
              width={910}
              height={512}
              className=" rounded-sm absolute w-full h-48 object-cover mb-2 transform transition duration-500 hover:scale-110" />
          </a>
        </Link>

        <button className=" top-2 left-2 z-10 absolute flex flex-row items-center pb-4 hover:text-green-0 transform transition duration-500 hover:scale-110">
          <Image
            key={`Profile-${video.id}`}
            quality={20}
            src={`/images/snackers/Perfil${video.userId}.jpg`}
            width={24}
            height={24}
            className="rounded-full"
            alt={video.userId}
          />
          <h5 className=" pl-5 text-sm font-semibold bg-blue-0 rounded-r pr-2 -m-3 bg-opacity-50 ">
            {video.userId}
          </h5>
        </button>

      </div>

      {
        CategoryName == "My Snacks"
          ? <VidDescription chapterName={video.chapterName} season={video.season} chapter={video.chapter} />
          : CategoryName == "New"
            ? <VidDescription chapterName={video.chapterName} season={video.season} chapter={video.chapter} />
            : ""
      }

    </div>
  )
}

export default Card

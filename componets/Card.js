import Image from 'next/image'

function Card({ Title, Snacker, CoverImage, ChapterName, Season, Chapter }) {
  return (
    <>

      <button className="hover:text-green-0 transform transition duration-500 hover:scale-110">
        <h3 className=" tracking-wide mb-1 text-l font-bold text-shadow">{Title}</h3>
      </button>

      <br />

      <button className="hover:text-green-0 transform transition duration-500 hover:scale-110">
        <h5 className="mb-2 text-sm font-semibold text-shadow">{`${Snacker}`}</h5>
      </button>

      <Image
        src={`/images/${CoverImage}`}
        alt="Image_1"
        width={910}
        height={512}
        className="w-full h-48 object-cover mb-2 transform transition duration-500 hover:scale-110" />


      <div className="text-sm flex flex-row justify-between">
        <button className="hover:text-green-0 transform transition duration-500 hover:scale-110 text-justify pr-4 ">
          {ChapterName}
        </button>
        <div>
          <h5 className="flex justify-end">{`S${Season}:C${Chapter}`}</h5>
        </div>
      </div>


    </>
  )
}

export default Card

const { default: Image } = require("next/image");
import HeaderItem from '../componets/HeaderItem'
import { VideoCameraIcon, SearchIcon, BellIcon, UserIcon } from '@heroicons/react/solid'
import Link from "next/link"

function Header() {
  return (
    <header className="pt-2 text-white-0 mt-4 flex flex-col h-auto sm:flex-row m-2 justify-between items-center">

      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="/images/snack_logo.svg"
            width={110}
            height={72}
          />
        </a>
      </Link>

      <div className="pt-2 flex flex-grow items-center justify-evenly lg:justify-end max-w-full sm:max-w-l">
        <HeaderItem Title="VIVO" Icon={VideoCameraIcon} />
        <HeaderItem Title="Notificaciones" Icon={BellIcon} />
        <HeaderItem Title="Perfil" Icon={UserIcon} />
      </div>


      <div className="relative max-w-max mr-8">
        <input
          className="w-full border-2 border-white-0 bg-blue-0 h-10 ml-4 px-4 pr-32 rounded text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />

        <button type="submit" className="absolute right-0 top-0 mt-1 mr-1">
          <SearchIcon className="h-7" />
        </button>
      </div>



    </header>
  )
}

export default Header

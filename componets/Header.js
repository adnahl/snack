const { default: Image } = require("next/image");
import HeaderItem from '../componets/HeaderItem'
import { WifiIcon, SearchIcon, BellIcon, UserIcon } from '@heroicons/react/solid'


function Header() {
  return (
    <header className="flex flex-col h-auto sm:flex-row m-5 justify-between |items-center">

      <Image
        className="object-contain"
        src="/images/snack_logo.svg"
        width={110}
        height={72}
      />

      <div className="mt-2 flex flex-grow items-center justify-evenly lg:justify-end max-w-full sm:max-w-l">
        <HeaderItem Title="VIVO" Icon={WifiIcon} />
        <HeaderItem Title="Notificaciones" Icon={BellIcon} />
        <HeaderItem Title="Perfil" Icon={UserIcon} />
      </div>


      <div class="mt-1 pt-4 relative max-w-full sm:max-w-max mr-8">
        <input
          class="w-full border-2 border-white bg-[#130282] h-10 ml-4 px-4 pr-32 rounded text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />

        <button type="submit" class="absolute right-0 top-0 mt-5 mr-3">
          <SearchIcon className="h-8" />
        </button>
      </div>



    </header>
  )
}

export default Header

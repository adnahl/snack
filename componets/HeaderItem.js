function HeaderItem({ Title, Icon }) {
  return (
    <div className="group flex flex-col items-center cursor-pointer w-12 max-w-max hover:text-coolGray">
      <Icon className="h-7 mt-4 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 font-semibold group-hover:opacity-100 tracking-widest">
        {Title}
      </p>
    </div>
  )
}

export default HeaderItem

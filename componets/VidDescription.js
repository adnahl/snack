function VidDescription({ chapterName, season, chapter }) {
  return (
    <div className="text-sm flex flex-row justify-between pointer-events-none">
      <h5 className="text-justify pr-4 ">
        {chapterName}
      </h5>
      <h5 className="flex justify-end">
        {`S${season}:C${chapter}`}
      </h5>
    </div>
  )
}

export default VidDescription

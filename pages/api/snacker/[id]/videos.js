export default (req, res) => {
  res.status(200).json({
    byID: req.query.id,
    msg: 'getSnackersVideosById'
  })
}

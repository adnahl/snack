export default (req, res) => {
  res.status(200).json([
    {
      name: 'Adnan',
      username: 'adnahl'
    },
    {
      name: 'Adriana',
      username: 'adricgg'
    }
  ])
}

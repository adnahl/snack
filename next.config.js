const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = phase => {

  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  const env = {
    SITE_NAME: "SNACK",
    API_SNACK: (() => {
      if (isDev) {
        return "http://localhost:3000/api"
      } else {
        return "https://snack.one/api"
      }
    })()
  }
  return {
    env,
  }
}

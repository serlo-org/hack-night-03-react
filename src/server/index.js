const historyApiFallback = require('connect-history-api-fallback')
const express = require('express')
const path = require('path')

const port = process.env.PORT || 3000
const app = express()

const isProduction = process.env.NODE_ENV === 'production'

const root = path.join(__dirname, '../../public')

app.use(express.static(root))
app.use(historyApiFallback({ verbose: false }))

if (!isProduction) {
  const webpack = require('webpack')
  const webpackConfig = require('webpack.config')

  const compiler = webpack(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }))

  app.use(require('webpack-hot-middleware')(compiler))
}

app.listen(port, () => {
  console.log(`Listening on port ${port}. Open up http://localhost:${port}/ in your browser`) // eslint-disable-line no-console
})

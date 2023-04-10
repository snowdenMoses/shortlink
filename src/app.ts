import express from 'express'
import ShortLinkRoute from './routes/shortlink.route'


class App {
  public app = express()
  private readonly port = process.env.PORT || 3005
  private route = new ShortLinkRoute()
  constructor () {
      this.app.use(express.json())
      this.app.use('/', this.route.router)
  }

  public listen = () => {
        const server = this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        })
        return server
    }
}

export default App


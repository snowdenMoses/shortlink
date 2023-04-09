import express from 'express'
import ShortLinkRoute from './routes/shortlink.route'
import { type IRoutes } from './interface/route.interface'

class App {
  private readonly app = express()
  private readonly port = process.env.PORT || 3005
  constructor (route: any) {
    this.initializeServer(route)
  }

  private readonly initializeServer = (route: IRoutes) => {
    this.app.use(express.json())
    this.app.use('/', route.router)
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`)
    })
  }
}

const route = new ShortLinkRoute()
const server = new App(route)

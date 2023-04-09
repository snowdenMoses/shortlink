import express from 'express'
import { type IRoutes } from './interface/route.interface'

class App {
  public app = express()
  private readonly port = process.env.PORT || 3005
//   constructor (route: any) {
//     this.initializeServer(route)
//   }

  public initializeServer = (route: IRoutes) => {
    this.app.use(express.json())
    this.app.use('/', route.router)
  }
  public listen = () => {
        const server = this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}`)
        })
        return server
    }
}

export default App


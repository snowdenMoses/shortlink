import { Router } from 'express'
import { type IRoutes } from '../interface/route.interface'
import ShortLinkController from '../controller/shortlink.controller'

class ShortLinkRoute implements IRoutes {
  public path = ''
  public router = Router()
  private readonly shortLinkController = new ShortLinkController()

  constructor () {
    this.initializeRoutes()
  }

  private initializeRoutes () {
    this.router.get(`${this.path}/:shortUrlId`, this.shortLinkController.redirectShortUrlToLongUrl)
    this.router.post(`${this.path}/encode`, this.shortLinkController.encodeURL)
    this.router.post(`${this.path}/decode`, this.shortLinkController.decodeURL)
    this.router.post(`${this.path}/statistics/:shortUrlId`, this.shortLinkController.getShortUrlStatistics)
  }
}
export default ShortLinkRoute

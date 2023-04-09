import { type NextFunction, type Request, type Response } from 'express'
import { IShortLink, type IEncode, type IDecode, type IStatistics } from '../interface/shortlink.interface'
import ShortLinkService from '../service/shortlink.service'

class ShortLinkController {
  private readonly shortLinkService = new ShortLinkService()

  public encodeURL = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { longUrl } = req.body
      const shortUrl: IEncode = await this.shortLinkService.encodeURL(longUrl)
      res.status(200).json(shortUrl)
    } catch (error) {
      next(error)
    }
  }

  public decodeURL = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { shortUrlId } = req.body
      const longUrl: IDecode = await this.shortLinkService.decodeURL(shortUrlId)
      res.status(200).json(longUrl)
    } catch (error) {
      next(error)
    }
  }

  public getShortUrlStatistics = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { shortUrlId } = req.params
      const longUrl: IStatistics = await this.shortLinkService.getShortUrlStatistics(shortUrlId)
      res.status(200).json(longUrl)
    } catch (error) {
      next(error)
    }
  }

  public redirectShortUrlToLongUrl = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { shortUrlId } = req.params
      const url_object: IDecode = await this.shortLinkService.decodeURL(shortUrlId)
      res.redirect(url_object.longUrl)
    } catch (error) {
      next(error)
    }
  }
}
export default ShortLinkController

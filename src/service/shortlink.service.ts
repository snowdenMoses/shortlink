import { type IShortLink, type IEncode, type IDecode, type IStatistics } from '../interface/shortlink.interface'
import ShortStringGenerator from '../helperMethods/short_string_generator'

class ShortLinkService {
  private readonly port = process.env.PORT || 3005
  private readonly arrayOfUrls: IShortLink[] = []
  private readonly shortStringGenerator = new ShortStringGenerator()

  public async encodeURL (url: string): Promise<IEncode> {
    const shortUrlId = this.shortStringGenerator.generateString()
    this.arrayOfUrls.push({ shortUrlId, url })
    const shortUrl = `http://localhost:${this.port}/${shortUrlId}`
    return { shortUrl }
  }

  public async decodeURL (shortUrlId: string): Promise<IDecode> {
    const url: IShortLink = this.arrayOfUrls.find(url => url.shortUrlId === shortUrlId)!
    const longUrl = url?.url
    return { longUrl }
  }

  public async getShortUrlStatistics (shortUrlId: string): Promise<IStatistics> {
    const url = this.arrayOfUrls.find(url => url.shortUrlId === shortUrlId)!
    const long_url: string = url.url
    return { originalUrl: long_url }
  }
}
export default ShortLinkService

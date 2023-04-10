import { type IShortLink, type IEncode, type IDecode, type IStatistics } from '../interface/shortlink.interface'
import ShortStringGenerator from '../helperMethods/short_string_generator'
import { HttpException } from '../helperMethods/http_exception'

class ShortLinkService {
  private readonly port = process.env.PORT || 3005
  private readonly arrayOfUrls: IShortLink[] = []
  private readonly shortStringGenerator = new ShortStringGenerator()

  public async encodeURL (longUrl: string): Promise<IEncode> {
    if (!longUrl) throw new HttpException(404, "Not Found")
    const shortUrlId = this.shortStringGenerator.generateString()
    const createdAt: string = (new Date()).toDateString()
    this.arrayOfUrls.push({ shortUrlId, longUrl, createdAt })
    const shortUrl = `http://localhost:${this.port}/${shortUrlId}`
    return { shortUrl }
  }

  public async decodeURL (shortUrlId: string): Promise<IDecode> {
    if (!shortUrlId) throw new HttpException(404, "Not Found")
    const filteredUrl: IShortLink[] = this.arrayOfUrls.filter(url => url.shortUrlId === shortUrlId)
    let longUrl:string =""
      for (let i = 0; i < filteredUrl.length; i++){
          longUrl = filteredUrl[i].longUrl
      }
      return { longUrl }
  }

  public async getShortUrlStatistics (shortUrlId: string): Promise<IStatistics> {
    if (!shortUrlId) throw new HttpException(404, "Not Found")
    const filteredUrl: IShortLink[] = this.arrayOfUrls.filter(url => url.shortUrlId === shortUrlId)
    let longUrl: string = ""
    let createdAt: string = ""
    for (let i = 0; i < filteredUrl.length; i++) {
        longUrl = filteredUrl[i].longUrl
        createdAt = filteredUrl[i].createdAt
    }
    return { 
        originalUrl: longUrl, 
        createdAt
    }
  }
}
export default ShortLinkService

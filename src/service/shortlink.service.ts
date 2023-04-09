import { IShortLink, IEncode, IDecode, IStatistics } from "../interface/shortlink.interface";
import ShortStringGenerator from "../helperMethods/short_string_generator";

class ShortLinkService{
    private port = process.env.PORT || 3005
    private array_of_urls: IShortLink[] = []
    private shortStringGenerator = new ShortStringGenerator()

    public async encodeURL(url: string): Promise<IEncode> {
        const short_url_id = this.shortStringGenerator.generateString()
        this.array_of_urls.push({ short_url_id, url });
        const short_url = `http://localhost:${this.port}/${short_url_id}`;
        return {short_url}
    }

    public async decodeURL(short_url_id: string): Promise<IDecode> {
        const url: IShortLink = this.array_of_urls.find(url => url.short_url_id === short_url_id)!;
        const long_url = url?.url
        return { long_url }
            
    }
    public async getShortUrlStatistics(short_url_id: string): Promise<IStatistics> {
        const url = this.array_of_urls.find(url => url.short_url_id === short_url_id)!;
        const long_url: string = url.url
        return { originally_gotten_from: long_url}
       
    }
}
export default ShortLinkService
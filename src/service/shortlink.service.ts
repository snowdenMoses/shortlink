import { IShortLink, IEncode, IDecode, IStatistics } from "../interface/shortlink.interface";
import ShortStringGenerator from "../helperMethods/short_string_generator";

class ShortLinkService{
    private port = process.env.PORT || 3005
    private array_of_urls: IShortLink[] = []
    private shortStringGenerator = new ShortStringGenerator()

    public async encodeURL(url: string): Promise<IEncode> {
            const generated_string = this.shortStringGenerator.generateString()
            this.array_of_urls.push({ generated_string, url });
            const short_url = `http://localhost:${this.port}/${generated_string}`;
            return { short_url }
    }

    public async decodeURL(short_url: string): Promise<IDecode> {
            const url: IShortLink | undefined = this.array_of_urls.find(url => url.generated_string === short_url);
            const long_url = url?.url
            return { long_url }
       
    }
    public async getShortUrlStatistics(short_url: string): Promise<IStatistics> {
            const url = this.array_of_urls.find(url => url.generated_string === short_url);
            const long_url = url?.url
            return { originally_gotten_from: long_url }
       
    }
}
export default ShortLinkService
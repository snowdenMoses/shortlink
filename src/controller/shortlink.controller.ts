import { NextFunction, Request, Response } from 'express';
import { IShortLink, IEncode, IDecode, IStatistics } from "../interface/shortlink.interface";
import ShortLinkService from "../service/shortlink.service";

class ShortLinkController{
    private shortLinkService = new ShortLinkService()

    public encodeURL = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { url } = req.body
            const short_url: IEncode = await this.shortLinkService.encodeURL(url);
            res.status(200).json({ short_url });
        } catch (error) {
            next(error);
        }
    }
    public decodeURL = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { short_url } = req.body
            const long_url: IDecode = await this.shortLinkService.decodeURL(short_url);
            res.status(200).json({ long_url });
        } catch (error) {
            next(error);
        }
    }

    public getShortUrlStatistics = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { short_url } = req.body
            const long_url: IDecode = await this.shortLinkService.decodeURL(short_url);
            res.status(200).json({ long_url });
        } catch (error) {
            next(error);
        }
    }

    public redirectShortUrlToLongUrl = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { short_url } = req.params
            const long_url: IDecode = await this.shortLinkService.decodeURL(short_url);
            res.redirect(long_url.long_url);
        } catch (error) {
            next(error);
        }
    }
}
export default ShortLinkController
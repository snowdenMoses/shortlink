export interface IShortLink{
    short_url_id: string;
    url: string
}
export interface IEncode {
    short_url: string;
}
export interface IDecode {
    long_url: string 
}
export interface IStatistics {
    originally_gotten_from: string;
}
export interface IShortLink{
    generated_string: string;
    url: string
}

export interface IEncode {
    short_url: string;
}
export interface IDecode {
    long_url?: string
}
export interface IStatistics {
    originally_gotten_from?: string;
}
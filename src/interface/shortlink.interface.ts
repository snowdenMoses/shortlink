export interface IShortLink {
  shortUrlId: string
  longUrl: string
  createdAt: string
}
export interface IEncode {
  shortUrl: string
}
export interface IDecode {
  longUrl: string
}
export interface IStatistics {
  originalUrl: string
  createdAt: string
}

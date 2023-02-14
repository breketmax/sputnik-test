export interface ICollection {
  id: string
  description: null | string
  urls: IUrls
  alt_description: null | string
  user: IUser
}

interface IUrls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

interface IUser {
  username: string
  portfolio_url: string
}

export interface IRandomPhoto {
  id: string
  description: null | string
  urls: IUrls
  alt_description: null | string
  user: IUser
}

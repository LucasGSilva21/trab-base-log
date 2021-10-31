export interface ResultPercentProducts {
  name: string
  total: number
}

export interface GetPercentByProductRepository {
  getPercentByProduct (): Promise<ResultPercentProducts[]>
}

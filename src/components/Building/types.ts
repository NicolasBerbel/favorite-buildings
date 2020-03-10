export interface IDeveloper {
  id: string,
  name: string,
}

export interface IAddress {
  area: string,
  city: string,
}

export interface IDefaultImage {
  '200x140': string,
  '520x280': string,
  description: string,
  id: string
}

export interface IOpportunity {
  broker: boolean,
  client: boolean,
  exchange_units: boolean,
}

export interface IBuilding {
  id: string,
  address: IAddress,
  description: string,
  default_image: IDefaultImage,
  developer: IDeveloper,
  finality: string,
  max_area: number,
  max_bathrooms: number,
  max_bedrooms: number,
  max_parking: number,
  max_suites: number,
  min_area: number,
  min_bathrooms: number,
  min_bedrooms: number,
  min_parking: number,
  min_price: number,
  min_suites: number,
  name: string,
  opportunity: IOpportunity,
  orulo_url: string,
  price_per_private_square_meter: number,
  updated_at: string,
}

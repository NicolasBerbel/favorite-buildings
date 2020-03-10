import React from 'react';
import { IBuilding } from './types';

const equalOrRange = (a: number, b: number) => a === b ? a : `${a}~${b}`;

const Building : React.FC<IBuilding> = props => {
  const {
    name,
    description,
    min_area,
    max_area,
    min_bathrooms,
    max_bathrooms,
    min_bedrooms,
    max_bedrooms,
    min_suites,
    max_suites,
    min_parking,
    max_parking,
    min_price,
    orulo_url,
    default_image,
  } = props;

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Area: {equalOrRange(min_area, max_area)}</p>
      <p>Bathrooms: {equalOrRange(min_bathrooms, max_bathrooms)}</p>
      <p>Bedrooms: {equalOrRange(min_bedrooms, max_bedrooms)}</p>
      <p>Suites: {equalOrRange(min_suites, max_suites)}</p>
      <p>Parking: {equalOrRange(min_parking, max_parking)}</p>
      <p>Minimum price: {min_price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
      <a title="Check it on Órulo's website!" target="_blank" rel="noopener noreferrer" href={orulo_url}>Órulo link!</a>
      <img src={default_image["520x280"]} alt={default_image.description} />
    </div>
  )
}

export default Building;
import React from 'react';

export interface IBuilding {
  id: string
}

const Building : React.FC<IBuilding> = (props) => {
  return (
    <div>
      {props.id}
    </div>
  )
}

export default Building;
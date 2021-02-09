import React from 'react';

const WidgetCard = ({name, description}) => {
  return (
    <div className="WidgetCard">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}


export default WidgetCard;
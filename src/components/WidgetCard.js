import React from 'react';

const WidgetCard = ({widget: {name, description}}) => {
  return (
    <div className="WidgetCard">
      <p>I'm a card</p>
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}


export default WidgetCard;
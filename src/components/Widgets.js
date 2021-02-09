import React from 'react';
import WidgetCard from './WidgetCard'

const Widgets = ({ widgets }) => {
  console.log(widgets)
  const widgetCards = widgets.map(w => 
      <WidgetCard widget={w} key={w.name}/>
    ) 

  return (
    <div>
      <h1>I'm Widgets</h1>
      { widgetCards }
    </div>
  )
}

export default Widgets;
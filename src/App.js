import React from 'react';
import Widgets from "./components/Widgets"
import WidgetForm from "./components/WidgetForm"
import Home from "./components/Home"


class App extends React.Component {
  state = {
    widgets: []
  } 

  addWidget = widget => this.setState({
    widgets: this.state.widgets.concat(widget)
  })

  render() {
    return <div>
      <Home />
      <Widgets widgets={this.state.widgets}/>
      <WidgetForm addWidget={this.addWidget}/>
    </div>;
  }
}

export default App;
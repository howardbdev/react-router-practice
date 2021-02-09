import React from 'react';

class WidgetForm extends React.Component {
  state = {
    name: "",
    description: ""
  }

  resetForm = () => this.setState({name: "", description: ""})

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    // const newWidget = {
    //   widget: this.state
    // }

    // const body = JSON.stringify(newWidget)

    // fetch("http://localhost:3001/widgets", {
    //   method: "POST",
    //   body
    // }) 
    //   .then(r => r.json())
    //   .then(resp => {
    //     if (resp.errors) {
    //       console.log(resp)
    //     } else {
    //       this.props.addWidget(resp)
    //       this.resetForm()
    //     }
    //   })
    this.props.addWidget(this.state)
    this.resetForm()
  }

  render() {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <input 
          onChange={this.handleInputChange}
          name="name"
          type="text"
          value={this.state.name}
          placeholder="name"
        />
        <input 
          onChange={this.handleInputChange}
          name="description"
          type="text"
          value={this.state.description}
          placeholder="name"
        />
       <input type="submit" value="Submit" />
      </form>
    </div>;
  }
}


export default WidgetForm;
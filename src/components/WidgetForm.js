import React from 'react';

class WidgetForm extends React.Component {
  state = {
    name: "",
    description: ""
  }

  resetForm = () => this.setState({name: "", description: ""})

  handleSubmit = e => {
    e.preventDefault()

    const body = JSON.stringify(state)

    fetch("http://localhost:3001/widgets", {
      method: "POST",
      body
    }) 
      .then(r = r.json())
      .then(resp => {
        if resp.errors {
          console.log(resp)
        } else {
          this.props.addWidget(resp)
          this.resetForm()
        }
      })
  }

  render() {
    return <div>
      <form>

      </form>
    </div>;
  }
}


export default WidgetForm;
import { Component } from 'react';
import { Form } from 'semantic-ui-react';


class BuildingForm extends Component {
  state = { year_built: '', address: '' }

  componentDidMount() {
    if (this.props.id) {
      const { year_built, description, address  } = this.props
      this.setState({ year_built, description, address})
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      const { id, updatebuilding, toggleEdit } = this.props
      updatebuilding(id, this.state )
      toggleEdit()
    } else {
      this.props.addBuilding(this.state)
    }
    this.setState({ year_built: '', description: '', address: '' })
  }

  render() {
    const { year_built, description, address } = this.state 
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='year_built' 
          value={year_built}
          onChange={this.handleChange}
          required
          label='Year Built'
        />
        <Form.Input
          name='description' 
          value={description}
          onChange={this.handleChange}
          required
          label='Description'
        />
        <Form.Input
          name='address' 
          value= {address}
          onChange={this.handleChange}
          required
          label='Address'
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>

      
    )
  }
}

export default BuildingForm;

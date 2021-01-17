import { Component } from ‘react’;
import { Form } from ‘semantic-ui-react’;
class JobForm extends Component {
  state = { job_name: ‘’, price: 0.0, pic: ‘’ }
  componentDidMount() {
    if (this.props.id) {
      const { job_name, price, pic } = this.props
      this.setState({ job_name, price, pic })
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { price } = this.state
    this.setState({ price: parseFloat(price)})
    if (this.props.id) {
      const { buildingId, update, id, setOpen } = this.props
      updateJob(buildingId, id, this.state)
      setOpen(false)
    } else {
      const { addJob, Id } = this.props
      addJob(buildingId, this.state)
    }
    this.setState({ job_name: ‘’, price: 0.0, pic: ‘’ })
  }
  render() {
    const { job_name, price, pic } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Job
          name=‘completed’
          value={job_name}
          onChange={this.handleChange}
          required
          label=‘Job Name’
        />
        <Form.Input
          name=‘title’
          value={title_name}
          onChange={this.handleChange}
          required
          label=‘Title’
        />
        <Form.Input
          name=‘pay’
          value={pay}
          onChange={this.handleChange}
          required
          label=‘Pay’
          type=“number”
          step=“0.01"
        />
         <Form.Input
          name=‘description’
          value={description_name}
          onChange={this.handleChange}
          required
          label=‘Description’
        />
         <Form.Input
          name=‘priority’
          value={priority_name}
          onChange={this.handleChange}
          required
          label=‘Priority’
        />
        <Form.Button>
          Submit
        </Form.Button>
      </Form>
    )
  }
}
export default JobForm;
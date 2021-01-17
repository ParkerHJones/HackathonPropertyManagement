import { Component } from 'react';
import axios from 'axios';
import { BuildingConsumer } from '../../providers/BuildingProvider';
import { Button, Icon } from 'semantic-ui-react';
import BuildingForm from './BuildingForm';
import Moment from 'react-moment';

class Building extends Component {
  state = { id: 0, title: '', created_at: '', updated_at: '', editing: false }

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/buildings/${id}`)
      .then( res => {
        this.setState({ ...res.data })
      })
      .catch( err => {
        console.log(err);
      });
  }

  toggleEdit = () => {
    const { editing } = this.state 
    this.setState({ editing: !editing })
  }

  render() {
    const { id, title, updated_at, editing } = this.state
    const { deletebuilding, updatebuilding } = this.props
    let buildingId = this.props.match.params.id
    return(
      <>
        <h1>{title}</h1>
        <h5>Last updated: <Moment format="MM/DD/YYYY">{updated_at}</Moment></h5>
        <Button icon color='red' onClick={() => deletebuilding(id)}>
          <Icon name='trash' />
        </Button>
        { 
          editing ? 
            <buildingForm 
              id={id}
              title={title}
              toggleEdit={this.toggleEdit}
              updatebuilding={updatebuilding}
            />
          :
          <Button icon color='yellow' onClick={() => this.toggleEdit()}>
            <Icon name='pencil' />
          </Button>
        }
        <buildings buildingId={buildingId} />
      </>
    )
  }
}

const Connectedbuilding = (props) => (
  <buildingConsumer>
    { value => (
      <building 
        {...props}
        deletebuilding={value.deletebuilding}
        updatebuilding={value.updatebuilding}
      />
    )}
  </buildingConsumer>
)

export default Connectedbuilding;
import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const BuildingContext = React.createContext();
export const BuildingConsumer = BuildingContext.Consumer;

class BuildingProvider extends Component {
  state = { buildings: [] }

  componentDidMount() {
    // grab our buildings from db
    axios.get('/api/buildings')
      .then( res => {
        // set to state 
        this.setState({ buildings: res.data })
      })
      .catch( err => {
        console.log(err);
      })
  }

  addBuilding = (building) => {
    debugger 
    axios.post('/api/buildings', { building })
    .then(res => {
        // add to the state
        const { buildings } = this.state; 
        this.setState({ buildings: [...buildings, res.data]})
      })
      .catch( err => {
        console.log(err);
      })
  }

  updateBuilding = (id, building) => {
    // update to the db
    axios.put(`/api/buildings/${id}`, { building })
      .then( res => {
        // update to the state
        const buildings = this.state.buildings.map( m => {
          if (m.id === id) {
            return res.data
          } 
          return m
        })
        this.setState({ buildings })
      })
      .catch( err => {
        console.log(err);
      })
  }

  deleteBuilding = (id) => {
    // delete in the db
    axios.delete(`/api/buildings/${id}`)
      .then( res => {
        // delete in the state
        const { buildings } = this.state
        this.setState({ buildings: buildings.filter( b => b.id !== id)})
        window.location.href = '/building'
        // return <Redirect to='/cafe' />
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
      <BuildingContext.Provider value={{
        ...this.state,
        addBuilding: this.addBuilding,
        updateBuilding: this.updateBuilding,
        deleteBuilding: this.deleteBuilding,
      }}>
        { this.props.children }
      </BuildingContext.Provider>
    )
  }
}

export default BuildingProvider;
import { Component } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Menu } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';


class Navbar extends Component {
  
  rightNavItems = () => {
    const { user, handleLogout, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }
  
  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
            <Link to='/management'>
            <Menu.Item
              name='management'
              id='management'
              active={this.props.location.pathname === '/management'}
            />
          </Link>
          </Link>
            { this.rightNavItems() }
        </Menu>
        

          
            { this.rightNavItems() }
      </div>
    )
  }
}

const ConnectedNavbar = (props) => (
  <AuthConsumer> 
    { auth => 
      <Navbar { ...props } {...auth} />
    }
  </AuthConsumer>
)
 

export default withRouter(ConnectedNavbar);

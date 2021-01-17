import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const BuildingList = ({ buildings }) => (
  <List divided relaxed>
    { buildings.map( b => 
    <List>
        <List.Content>
          <List.Header>
            <Link to={`/building/${b.id}`}>
              {b.address}
              {b.year_built}
            </Link>
          </List.Header>
          <List.Description as='a'>{b.description}</List.Description>
        </List.Content>
    </List>
    )}
  </List>
)

export default BuildingList;
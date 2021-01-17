import BuildingForm from './BuildingForm';
import BuildingList from './BuildingList';
import { BuildingConsumer } from '../../providers/BuildingProvider';

const Management = () => (
  <BuildingConsumer>
    { value => (
      <>
        <h1>Building Information</h1>
        <BuildingForm addBuilding={value.addBuilding} />
        <BuildingList buildings={value.buildings} />
      </>
    )}
  </BuildingConsumer>
)

export default Management;
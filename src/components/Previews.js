import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Travel from '../pages/samples/Travel'
import Food from '../pages/samples/Food'
import { TravelProvider } from '../context/TravelContext';
import { FoodProvider } from '../context/FoodContext';


function Previews() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
      variant='tabs'
    >
      <Tab eventKey="home" title="Travel">
        <TravelProvider>
          <Travel />
        </TravelProvider>
      </Tab>
      <Tab eventKey="profile" title="Food">
        <FoodProvider>
          <Food />
        </FoodProvider>
      </Tab>
    </Tabs>
  );
}

export default Previews;
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Travel from '../pages/samples/Travel'
import Food from '../pages/samples/Food'


function Previews() {
  return (
    <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Travel">
        <Travel />
      </Tab>
      <Tab eventKey="profile" title="Food">
        <Food />
      </Tab>
    </Tabs>
  );
}

export default Previews;
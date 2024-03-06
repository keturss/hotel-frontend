import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import RouteApiUser from './Routes/RouteApiUser';
import RouteApiHotel from './Routes/RouteApiHotel';
import RouteApiBooking from './Routes/RouteApiBooking';

function TabsCategories() {
  return (
    <Tabs
      data-testid="tabsCategories"
      defaultActiveKey="user"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="user"  title="User">
        <RouteApiUser/>
      </Tab>
      <Tab eventKey="hotels" title="Hotels">
        <RouteApiHotel/>
      </Tab>
      <Tab eventKey="booking" title="Booking">
        <RouteApiBooking/>
      </Tab>
    </Tabs>
  );
}

export default TabsCategories;
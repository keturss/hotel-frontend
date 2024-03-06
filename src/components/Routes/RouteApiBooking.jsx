import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Create from '../Forms/Create';
import Read from '../Forms/Read';
import Update from '../Forms/Update';
import Delete from '../Forms/Delete';


const route = "Booking";
const struct = [
  "_id",
  "userId",
  "hotelId",
  "date",
]

function RouteApiBooking() {
  return (
    <Tabs
      data-testid="routeApiBooking"
      defaultActiveKey="user"
      id="uncontrolled-tab-example"
      className="mb-4"
    >
      <Tab eventKey="create" title="Create">
      <Create struct={struct} route={route} />
      </Tab>
      <Tab eventKey="read" title="Read">
      <Read route={route}/>
      </Tab>
      <Tab eventKey="update" title="Update">
      <Update struct={struct} route={route}/>
      </Tab>
      <Tab eventKey="delete" title="Delete">
      <Delete route={route}/>
      </Tab>
    </Tabs>
  );
}

export default RouteApiBooking;
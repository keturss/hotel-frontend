import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Create from '../Forms/Create';
import Read from '../Forms/Read';
import Update from '../Forms/Update';
import Delete from '../Forms/Delete';


const route = "Hotel"
const struct = [
  "_id",
  "name",
  "location",
  "description",
  "picture_list",
]

function RouteApiHotel() {
  return (
    <Tabs
      data-testid="routeApiHotel"
      defaultActiveKey="create"
      id="uncontrolled-tab-example"
      className="mb-4"
    >
      <Tab eventKey="create" title="Create">
      <Create struct={struct} route={route} />
      </Tab>
      <Tab eventKey="read" title="Read">
      <Read struct={struct} route={route}/>
      </Tab>
      <Tab eventKey="update" title="Update">
      <Update struct={struct} route={route} />
      </Tab>
      <Tab eventKey="delete" title="Delete">
      <Delete route={route}/>
      </Tab>
    </Tabs>
  );
}

export default RouteApiHotel;
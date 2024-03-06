import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Login from '../Forms/Login';
import Logout from '../Forms/Logout';

import Create from '../Forms/Create';
import Read from '../Forms/Read';
import Update from '../Forms/Update';
import Delete from '../Forms/Delete';

const route = "User"
const struct = [
  "_id",
  "email",
  "password",
]

function RouteApiUser() {
  return (
    <Tabs
      data-testid="routeApiUser"
      defaultActiveKey="login"
      id="uncontrolled-tab-example"
      className="mb-6"
    >
      <Tab eventKey="login" title="Login">
        <Login/>
      </Tab>
      <Tab eventKey="logout" title="Logout">
      <Logout/>
      </Tab>
      <Tab eventKey="create" title="Create">
      <Create struct={struct} route={route}/>
      </Tab>
      <Tab eventKey="read" title="Read">
      <Read struct={struct} route={route}/>
      </Tab>
      <Tab eventKey="update" title="Update">
      <Update struct={struct} route={route} />
      </Tab>
      <Tab eventKey="delete" title="Delete">
      <Delete struct={struct} route={route} />
      </Tab>
    </Tabs>
  );
}

export default RouteApiUser;
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { DeleteUser} from '../../api/UserBackend';
import { DeleteBooking } from '../../api/BookingBackend';
import { DeleteHotel } from '../../api/HotelBackend';


function Delete(props) {
  const [state, setState] = useState();
  const [inputValue, setInputValue] = useState('');
  const route = props?.route;

  var DeleteStructById = async () => {
    var result;
    switch (route) {
      case "User":
         result = await DeleteUser(inputValue);
        break;
        case "Hotel":
           result = await DeleteHotel(inputValue);
          break;
          case "Booking":
             result = await DeleteBooking(inputValue);
            break;
    }
    setState(result );
  }

  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>{route +" ID"}</Form.Label>
        <Form.Control type="text" onChange={(e) => setInputValue(e.target.value)} placeholder={"Enter "+route+" Id"} />
      </Form.Group>

      <Button variant="primary" type="button" onClick={DeleteStructById}>
        Delete
      </Button>
    </Form>
        {
          <p>
            {state?.message}
          </p>
        }
        </div>
  );
}

export default Delete;
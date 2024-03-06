import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { UpdateUser} from '../../api/UserBackend';
import { UpdateBooking } from '../../api/BookingBackend';
import { UpdateHotel } from '../../api/HotelBackend';

function Update(props) {
  const [state, setState] = useState();
  const [inputValue, setInputValue] = useState({});
  const route = props?.route;

  var updateStructApi = async () => {
    var result;
    switch (route) {
      case "User":
         result = await UpdateUser(inputValue._id,inputValue);
        break;
        case "Hotel":
           result = await UpdateHotel(inputValue._id,inputValue);
          break;
          case "Booking":
             result = await UpdateBooking(inputValue._id,inputValue);
            break;
    }
    setState(result );

  }

  return (
    <div>
    <Form>
      {props?.struct?.map((properties, index) => {
        return (
      <Form.Group className="mb-3" controlId={properties} key={index}>
        <Form.Label>{properties}</Form.Label>
        <Form.Control type="text" onChange={(e) => setInputValue({...inputValue,[properties]: e.target.value})} placeholder={'Enter ' + properties} />
      </Form.Group>
        )
      })}

      <Button variant="primary" type="button" onClick={updateStructApi}>
        Update User
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

export default Update;
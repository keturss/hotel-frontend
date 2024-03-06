import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

import { CreateUser} from '../../api/UserBackend';
import { CreateBooking } from '../../api/BookingBackend';
import { CreateHotel } from '../../api/HotelBackend';

function Create(props) {
  const [state, setState] = useState();
  const [inputValue, setInputValue] = useState({});
  const route = props?.route;

  var createStructApi = async () => {
    var result;
    switch (route) {
      case "User":
         result = await CreateUser(inputValue);
        break;
        case "Hotel":
           result = await CreateHotel(inputValue);
          break;
          case "Booking":
             result = await CreateBooking(inputValue);
            break;
    }
    setState(result );

  }

  return (
    <div>
    <Form>
      {props?.struct?.filter(prop => prop !== "_id").map((properties, index) => {
        return (
      <Form.Group className="mb-3" controlId={properties} key={index}>
        <Form.Label>{properties}</Form.Label>
        <Form.Control type="text" onChange={(e) => setInputValue({...inputValue,[properties]: e.target.value})} placeholder={'Enter ' + properties} />
      </Form.Group>
        )
      })}
      
      <Button variant="primary" type="button" onClick={createStructApi}>
        Submit
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

export default Create;
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { getAllUsers, getUserId} from '../../api/UserBackend';
import { getAllBooking, getBookingId } from '../../api/BookingBackend';
import { getAllHotel,getHotelId } from '../../api/HotelBackend';

function Read(props) {
  const [stateArray, setStateArray] = useState();
  const [state, setState] = useState();
  const [inputValue, setInputValue] = useState('');
  const route = props?.route;


  var getUserByIdState = async () => {
    var result;
    switch (route) {
      case "User":
         result = await getUserId(inputValue);
        break;
        case "Hotel":
           result = await getHotelId(inputValue);
          break;
          case "Booking":
             result = await getBookingId(inputValue);
            break;
    }
    setState(result)
    setStateArray(null)
  }


  var getAllUsersState = async () => {
    var result;
    switch (route) {
      case "User":
         result = await getAllUsers();
        break;
        case "Hotel":
           result = await getAllHotel();
          break;
          case "Booking":
             result = await getAllBooking();
            break;
    }

    setStateArray(result );
    setState(null)
  }

  return (
    <div>
    <Form>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label>{route +" ID"}</Form.Label>
        <Form.Control type="text" onChange={(e) => setInputValue(e.target.value)} placeholder={"Enter "+route+" Id"} />
      </Form.Group>

      <Button variant="primary" type="button" onClick={getUserByIdState}>
        {"Get " + route}
      </Button>
    </Form>
    <Form>
    
    <Button variant="primary" type="button" onClick={getAllUsersState}>
      Get All
    </Button>
  </Form>
  

  {
      <div>
        {props?.struct?.map((properties,index2) => {
          return(<p key={index2}>{state?.data[properties]}</p>)
        })}
    </div>
  }


  {stateArray?.data?.map((result, index) => {
    return(
      <div key={index}>
        {props?.struct?.map((properties,index2) => {
          return(<p key={index2}>{result[properties]}</p>)
        })}
    
    </div>
    )
  })}

  
  </div>
  );
}

export default Read;
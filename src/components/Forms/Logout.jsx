import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Logout() {
  return (
    <Form>
      <Button variant="danger" type="submit">
        Logout
      </Button>
    </Form>
  );
}

export default Logout;
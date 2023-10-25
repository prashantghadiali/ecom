import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';

function NavbarComp() {
  const count = useSelector((state) => state.counter.value)
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Ecom</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#729ce4",}} /> {count}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
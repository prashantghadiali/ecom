import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

function NavbarComp() {

  const cartItems = useSelector((state) => state.cart.cartItems);
  const location = useLocation();
  
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">Ecom</Navbar.Brand>
        <NavLink href='/'>Products</NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <NavLink href='/cart'>
          <Navbar.Text>
            <FontAwesomeIcon icon={faCartShopping} style={{color: "#729ce4",}} /> {cartItems.length}
          </Navbar.Text>
          </NavLink>
          &nbsp;&nbsp;
          {location.pathname !== '/create' && (
            <div>
              <Link to='/create'>
                <Button variant="primary">
                  Add Product
                </Button>
              </Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import NavbarComp from '../Components/NavbarComp';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cart/action';
import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Cart() {
  // cart items getting from redux
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  // total price fuctuion using price and quantity
  const TotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // total quantity of cart item to display
  const TotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

    
  return (
    <div>
      <NavbarComp />
      <section className="h-100 gradient-custom">
        <Container className="py-5">
          <Row className="d-flex justify-content-center my-4">
            <Col md={8}>          
              <Card  className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">Cart -  items</h5>
                </Card.Header>
                <Card.Body>
                  
                  {cartItems.map((crtitm, index) => {
                    return (
                          <Row key={index}   className="mb-4">
                            <Col lg={3} md={12}>
                              <div className="bg-image hover-overlay hover-zoom ripple rounded">
                                <Card.Img  height={200} src="https://static.vecteezy.com/system/resources/previews/011/883/293/original/modern-paper-bag-colorful-logo-good-for-technology-e-commerce-logo-online-shop-logo-cart-logo-dummy-logo-bussiness-logo-free-vector.jpg" />
                              </div>
                            </Col>

                            <Col lg={5} md={6} className="mb-4 mb-lg-0">
                              <p>
                                <strong>{crtitm.title}</strong>
                              </p>
                              <Button
                                variant="danger"
                                size="sm"
                                className="me-1 mb-2"
                                data-mdb-toggle="tooltip"
                                title="Remove item"
                              //   onClick={() => dispatch(removeItem(data.id))}
                                onClick={() => dispatch(removeFromCart(crtitm.id))}
                              >Remove Item &nbsp;
                                <FontAwesomeIcon icon={faTrash} style={{color: "#white",}} />
                              </Button>
                            </Col>
                          
                            <Col lg={4} md={6} className="mb-4 mb-lg-0">
                              <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                                <Button
                                  variant="primary"
                                  className="px-3 me-2"
                                  onClick={() => dispatch(decreaseQuantity(crtitm.id))}
                                >
                                  <FontAwesomeIcon icon={faMinus} />
                                </Button>

                                <div className="form-outline">
                                  <input   
                                    min="0"
                                    name="quantity"
                                    value={crtitm.quantity}
                                    type="number"
                                    className="form-control"
                                    onChange={() => null}
                                  />
                                </div>

                                <Button
                                  variant="primary"
                                  className="px-3 ms-2"
                                  onClick={() => dispatch(increaseQuantity(crtitm.id))}
                                >
                                  <FontAwesomeIcon icon={faPlus} />
                                </Button>
                              </div>

                              <p className="text-start text-md-center">
                                <strong>&#8377; {crtitm.price * crtitm.quantity }</strong>
                              </p>
                            </Col>
                            
                            <hr/>
                          </Row>
                      )})}
                </Card.Body>
              </Card>
               
            </Col>
          

            <Col md={4}>
              <Card className="mb-4">
                <Card.Header>
                  <h5 className="mb-0">Summary</h5>
                </Card.Header>
                <Card.Body>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>totalQuantity</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>{TotalQuantity()}</strong>
                      </div>
                      <span>
                        <strong>&#8377; {TotalPrice()}</strong>
                      </span>
                    </li>
                  </ul>

                  <Button variant="primary" size="lg" block>
                    Go to checkout
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Cart

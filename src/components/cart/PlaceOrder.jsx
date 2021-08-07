import React from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps";

const PlaceOrder = () => {
  const { cartItems, cartTotalAmount, cartTotalQuantity } = useSelector(
    (state) => state.products
  );
  console.log(cartItems);
  const auth = useSelector((state) => state.auth);
  const address = useSelector((state) => state.checkout.shippingAddress);
  const payment = useSelector((state) => state.checkout.payment);

  if (!auth._id) return <Redirect to="/login" />;
  if (!address.deliveryAddress) return <Redirect to="/cart/shipping-details" />;
  if (!payment.paymentMethod) return <Redirect to="/cart/payment-method" />;

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  const shippingPrice =
    cartItems.length === 0 ? addDecimals(0) : addDecimals(100);
  const taxPrice = addDecimals(Number(0.07 * cartTotalAmount).toFixed(2));
  const totalPrice = (
    Number(cartTotalAmount) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);

  const handlePlaceOrder = () => {};

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping Details</h2>
              <p>
                <strong>Phone:</strong> {address.phone} <br />
                <strong>Address:</strong> {address.deliveryAddress},{" "}
                {address.region}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method:</strong> {payment.paymentMethod} <br />
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
              ) : (
                <ListGroup variant="flush">
                  {cartItems.map((item) => (
                    <ListGroup.Item key={item._id}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.title}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item._id}`}>{item.title}</Link>
                        </Col>
                        <Col md={5}>
                          {item.cartQuantity} x Ksh.{item.price} = Ksh.
                          {item.cartQuantity * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>{cartTotalQuantity} Items</Col>
                  <Col>Ksh. {addDecimals(cartTotalAmount)}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Ksh. {shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Ksh. {taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    <strong>Total</strong>
                  </Col>
                  <Col>Ksh. {totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cartItems.length === 0}
                  onClick={handlePlaceOrder}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default PlaceOrder;

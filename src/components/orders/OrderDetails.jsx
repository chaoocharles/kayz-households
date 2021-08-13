import React, { useEffect } from "react";
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { getOrderDetails } from "../../store/slices/orderSlice";

const OrderDetails = ({ match }) => {
  const orderId = match.params.id;

  const auth = useSelector((state) => state.auth);
  const orderDetails = useSelector((state) => state.orders);

  const { order, getOrderStatus } = orderDetails;

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, []);

  if (!auth._id) return <Redirect to="/login" />;

  return (
    <>
      <h1>Order - {orderId}</h1>
      {getOrderStatus === "pending" ? (
        <Spinner animation="grow" />
      ) : getOrderStatus === "success" ? (
        <Row>
          <Col md={8}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Shipping Details</h2>
                <p>
                  <strong>Phone:</strong> {order.shippingAddress.phone} <br />
                  <strong>Address:</strong>{" "}
                  {order.shippingAddress.deliveryAddress},{" "}
                  {order.shippingAddress.region}
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Payment Method</h2>
                <p>
                  <strong>Method:</strong> {order.paymentMethod} <br />
                </p>
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>Order Items</h2>
                {order.orderItems.length === 0 ? (
                  <p>No order items.</p>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item) => (
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
                            <Link to={`/product/${item._id}`}>
                              {item.title}
                            </Link>
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
                    <Col>{order.orderItems.length} Items</Col>
                    <Col>Ksh. {order.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Shipping</Col>
                    <Col>Ksh. {order.shippingPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Tax</Col>
                    <Col>Ksh. {order.taxPrice}</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>
                      <strong>Total</strong>
                    </Col>
                    <Col>Ksh. {order.totalPrice}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default OrderDetails;

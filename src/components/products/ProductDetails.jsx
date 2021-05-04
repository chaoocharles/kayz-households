import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
} from "react-bootstrap";
import Rating from "../common/Rating";
import { addToCart } from "../../store/slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";

const ProductDetails = ({ match }) => {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.productItems);
  const product = products.find((product) => product.id == match.params.id);

  return (
    <div className="custom-container">
      <Container>
        <Link className="btn btn-light my-3" to="/">
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.title} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.title}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: Ksh.{product.price}</ListGroup.Item>
              <ListGroup.Item>Description: {product.desc}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <ListGroup varinat="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>Ksh.{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    className="btn-block"
                    type="button"
                    onClick={() => dispatch(addToCart(product))}
                    disabled={product.countInStock === 0}
                  >
                    Add To Cart - <span>{product.cartQuantity}</span>
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;

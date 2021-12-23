import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { FaMoneyBill, FaShoppingCart } from 'react-icons/fa';

const Product = (props) => {
  const { productImg, productName, pricing, productDescription } =
    props.product;
  return (
    <Col xs={12} md={6} lg={4} className="d-block d-lg-flex">
      <Card className="border-top-1 rounded-0 w-100">
        <div className="p-4 d-flex align-items-center">
          <Card.Img
            style={{ height: '250px' }}
            className="img-fluid"
            variant="top"
            src={productImg}
          />
        </div>
        <hr />
        <Card.Body>
          <Card.Title className="h5 text-primary">{productName}</Card.Title>
          <Card.Text>{productDescription}</Card.Text>
        </Card.Body>

        <Card.Footer>
          <Row>
            <Col xs={7}>
              <level
                className="input-group-text border-0 bg-light"
                title="Product Price"
              >
                <FaMoneyBill size="1.4em" className="me-1" /> {pricing} $
              </level>
            </Col>
            <Col xs={5}>
              <div className="input-group itemCartHolder">
                <input
                  type="number"
                  className="form-control productQuantity"
                  value="1"
                  min="1"
                  max="100"
                  title="Quantity"
                />
                <div class="button-group">
                  <button
                    data-id="10"
                    type="button"
                    className="btnAddToCart btn btn-primary"
                    title="Add to Cart"
                  >
                    <FaShoppingCart size="1.4em" className="me-1" />
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Product;

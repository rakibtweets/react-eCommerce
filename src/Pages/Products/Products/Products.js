import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://infinite-lowlands-55861.herokuapp.com/allProducts')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <section className="all__products mt-5">
        <Container>
          <Row xs={1} md={2} lg={3} className="gy-5">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Products;

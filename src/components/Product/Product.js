import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = (props) => {
  const {img, name, stock, price} = props.product;
  return (
    <Col xl={3} lg={4} md={6} sm={12} xs={12}>
      <Card className="product mt-3">
          <Card.Img className="img-fluid px-5 pt-4 pb-3" src={img} />
          <Card.Body>
            <Card.Title><Link to={"/product/"+name}>{name.slice(0, 35)}...</Link></Card.Title>
            <Card.Text className="product-stock">Total in stock {stock}</Card.Text>
            <Card.Text className="product-price">${price}</Card.Text>
            {props.showAddToCart === true && <Button 
            onClick={() => props.handleAddToCart(props.product)}
            className="btn btn-cart d-flex m-auto mt-2 py-2 px-3">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></svg>
              <span> Add To Cart</span>
            </Button>}
          </Card.Body>
        </Card>
    </Col>
  );
};

export default Product;
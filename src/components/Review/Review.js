import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';

const Review = () => {
  const [cart, setCart] = useState([]);

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  }

  const removeProduct = (productKey) => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  }
  
  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map(key => {
      const product =fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  let thankYou;
  if(orderPlaced) {
    thankYou = <h2 className="p-2">Your Order is Completed</h2>
  }
  return (
    <Container className="review pb-5">
      <Row>
        <Col xl={8}>
          <h2 className="mb-3 mt-lg-5 mt-4 pb-2">Your Order</h2>
          <Card className="p-4">
            {
              cart.map (pd =>  
              <ReviewItem 
                removeProduct = {removeProduct}
                key = {pd.key}
                product={pd}>
              </ReviewItem>)
            }
            {
              thankYou 
            }
          </Card>
        </Col>
        <Col xl={4}>
          <h2 className="mb-3 mt-lg-5 mt-4 pb-2">Order Summary</h2>
          <Cart cart={cart}>
            <Button onClick={handlePlaceOrder} className="btn btn-cart w-100 m-auto mt-2 py-2 px-3">
              Place Order
            </Button>
          </Cart>
        </Col>
      </Row>
    </Container>
  );
};

export default Review;
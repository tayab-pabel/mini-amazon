import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
  const first80 =fakeData.slice(0, 80);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    const cartProducts = productKeys.map(key => {
      const product =fakeData.find(pd => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, [])

  const handleAddToCart = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct){
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count; 
      const others = cart.filter(pd => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
  }

  useEffect(() => {
    setProducts(first80);
  }, [])
  
  return (
    <div className="shop pt-3 pb-5 py-xl-4">
      <Container>
        <Row>
          <Col  xl={10} className="order-1 order-xl-0">
          <Row>
          {
            products.map(product => 
            <Product 
              showAddToCart = {true}
              handleAddToCart = {handleAddToCart}
              product= {product}
              key = {product.key}
            >
            </Product>)
          }
          </Row>
          </Col>
            <Col xl= {2}>
              <Cart cart={cart}>
                <Button className="btn btn-cart w-100 m-auto mt-2 py-2 px-3">
                  <Link to="/review" >Review Order</Link>
                </Button>
              </Cart>
            </Col>        
          </Row>
      </Container>
    </div>
  );
};

export default Shop;
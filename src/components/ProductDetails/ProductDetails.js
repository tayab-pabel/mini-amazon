import React from 'react';
import fakeData from '../../fakeData';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetails = () => {
  const {productName} = useParams();
  const product = fakeData.find(product => product.name === productName);
  console.log(product);
  return (
    <div>
      <Container className="text-center py-5">
        {/* <p>{productName}</p> */}
        <Product showAddToCart={false} product={product}></Product>
      </Container>
    </div>
  );
};

export default ProductDetails;
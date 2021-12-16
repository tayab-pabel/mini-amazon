import React from 'react';
import { Button } from 'react-bootstrap';
import './ReviewItem.css';

const ReviewItem = (props) => {
  const {img, name, price, key, quantity} = props.product;
  return (
    <div className="single-cart d-flex align-items-start py-3">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="item-content">

        <div className="item-title d-flex justify-content-between">
          <div>
            <p className="item-name">{name}</p>
          </div>
          <div>
            <p className="item-price">${Math.floor(price)}</p>
          </div>
        </div>

        <div className="item-content d-flex justify-content-between mt-2">
          <div className="item-quantity border">
            <button className="left px-2 font-bold border">-</button>
            <span className="quantity">{quantity}</span>
            <button className="right px-2 font-bold border">+</button>
          </div>
          <div className="mt-2">
            <Button className="remove-btn" 
              onClick={() => props.removeProduct(key)}>
              Remove
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReviewItem;
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = (props) => {
  const cart = props.cart;
  //const total = cart.reduce((total, prd) => total + prd.price, 0)
  let total = 0;
    for (let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price * product.quantity;
    }

    let shipping = 0;
    if (total > 500){
      shipping = 0;
    }
    else if(total > 250){
      shipping = 5;
    }
    else if(total > 0) {
      shipping = 10;
    }

    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    const formatNumber = num => {
        const precision =num.toFixed(2);
        return Number(precision);
    }

  return (
    <div className="cart mt-3">
      <Card className="p-4">
        <div className="d-flex justify-content-between">
          <p className="common">Total Item</p>
          <p className="common">{cart.length}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="common">Subtotal</p>
          <p className="common">{formatNumber(total)}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="common">Shipping Cost</p>
          <p className="common">{shipping}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="common">Tax + VAT</p>
          <p className="common">{tax}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="total">Total</p>
          <p className="total">{grandTotal}</p>
        </div>
        {
          props.children
        }
      </Card>
    </div>
  );
};

export default Cart;
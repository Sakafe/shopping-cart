import React from 'react';
// import Button from 'react-bootstrap/Button';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total,sub)=>total +sub.price,0);
    let total = 0;
    const tax = (totalPrice/10).toFixed(2);
    const grandTotal = (totalPrice + Number(tax)).toFixed(2);
      return (
        <div>
            <h1>Order summary </h1>
                <p>Items ordered: {cart.length}</p>
                <p>Product price:{totalPrice}</p>
                <p>Tax:{tax}</p>
                <h5>Total Amount:{grandTotal}</h5>
                <button type="button" class="btn btn-success">Place Order</button>
        </div>
    );
};

export default Cart;
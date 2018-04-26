import React, { Component } from 'react';
import './Body.css';
import CheckoutButton from '../PayPalButtons/CheckoutButton';
import AddToCart from '../PayPalButtons/AddToCart';
import ExpressCheckout from '../PayPalButtons/ExpressCheckout';
import PayPalCreditButton from '../PayPalButtons/PayPalCreditButton';
class Body extends Component {
    render() {
        return (
            //todo: style boxes nicer
            <div className="content">
                <div className="box e"> <div className="box-title">MiniBrowser Buttons</div>
                    <ExpressCheckout/> <PayPalCreditButton/>  </div>
                <div className="box f"> <div className="box-title">Update cart</div><AddToCart/> </div>
                <div className="box g"> <div className="box-title">Webapps/shoppingcart Redirect</div><CheckoutButton/> </div>

             </div>
        );
    }
}

export default Body;

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
                <div className="box e"> <CheckoutButton/> </div>
                <div className="box f"> <AddToCart/> </div>
                <div className="box g"> <ExpressCheckout/> <PayPalCreditButton /> </div>

             </div>
        );
    }
}

export default Body;

import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import props from 'prop-types';
import './PayPalButtons.css';

const Button = paypal.Button.driver('react', { React, ReactDOM });

export default class ExpressCheckout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            client: {
                sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
                production: 'aohdoiahaoih'
            },
        }
    }

    payment(data, actions) {
        return actions.payment.create({
            transactions: [
                {
                    amount: { total: "100.00", currency: 'USD'}
                }
            ]
        });
    }

    onAuthorize(data, actions) {
        return actions.payment.execute();
    }

    render() {
        return (
            <div className="pp" >
                <Button
                    commit={true}
                    env="sandbox"
                    client={this.state.client}
                    payment={ (data, actions) => this.payment(data, actions) }
                    onAuthorize={ (data, actions) => this.onAuthorize(data, actions) }
                />
            </div>
        );
    }
}
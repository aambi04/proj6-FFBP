import React from 'react';
import ReactDOM from 'react-dom';
import paypal from 'paypal-checkout';
import props from 'prop-types';

const Button = paypal.Button.driver('react', { React, ReactDOM });

export default class PayPalCreditButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            client: {
                sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
                production: 'aohdoiahaoih'
            },
            style: {
                label: 'credit',
                size:  'small', // small | medium | large | responsive
                shape: 'rect',  // pill | rect
            }
        }
    }

    payment(data, actions) {
        return actions.payment.create({
            payment: {
                transactions: [
                    {
                        amount: { total: '100.00', currency: 'USD' }
                    }
                ],

                payer: {
                    payment_method: 'paypal',
                    external_selected_funding_instrument_type: 'CREDIT'
                }
            }
        });
    }

    onAuthorize(data, actions) {
        return actions.payment.execute().then(function() {
            window.alert('Payment Complete!');
        });
    }

    render() {
        return (
            <Button
                commit={true}
                env="sandbox"
                style={this.state.style}
                client={this.state.client}
                payment={ (data, actions) => this.payment(data, actions) }
                onAuthorize={ (data, actions) => this.onAuthorize(data, actions) }
            />
        );
    }
}
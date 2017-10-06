import React, {Component} from 'react';

export default class AddToCart extends Component {

    render() {
        return (
            <div>
                <form target="paypal" action="https://www.sandbox.paypal.com/cgi-bin/webscr" method="post">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value="97KZH277EQDZE"/>
                            <table>
                                <tbody>
                                    <tr><td><input type="hidden" name="on0" value="Name of drop-down menu"/>Add number of items to cart</td></tr>
                                    <tr><td><select name="os0" >
                                        <option value="1 item">1 item $10.00 USD</option>
                                        <option value="2 items">2 items $100.00 USD</option>
                                        <option value="3 items">3 items $300.00 USD</option>
                                    </select> </td></tr>
                                </tbody>
                            </table>
                            <input type="hidden" name="currency_code" value="USD" />
                                <input type="image" src="https://www.sandbox.paypal.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" />
                                    <img alt="" border="0" src="https://www.sandbox.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>

            </div>
        )
    }
}
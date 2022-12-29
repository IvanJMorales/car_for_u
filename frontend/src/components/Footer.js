import React from 'react';
import "../styles/Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="column-footer">
                <div className="left-footer">
                    <h3>VISIT US</h3>
                    <p>555 Main Street, </p>
                    <a href="tel:(718)-555-5555">(718)-555-5555</a>
                    <br></br>
                    <a href="#"></a>
                </div>
                <div className="middle-footer">
                    CAR 4 U
                </div>
                <div className="right-footer">
                    <h3>FOLLOW US</h3>
                </div>
            </div>
            <div className="footer-footer">
                <h6>Car 4 U Copyright All rights reserved.</h6>
            </div>
        </div>
    );
};

export default Footer;
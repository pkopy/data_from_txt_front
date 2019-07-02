import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <p>Created by Paweł Kopycki</p>
                <div className="email"><a href="mailto:pawel.kopycki@gmail.com?Subject=Hello%20again" target="_top">Send Mail</a></div>
            </footer>
        )
    }
}

export default Footer;
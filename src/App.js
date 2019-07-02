import React, { Component } from 'react';
import Header from './header/Header'
import './header/Header.scss'
import Records from './records/Records'
import './records/Records.scss'
import Customer from './customer/Customer'
import './customer/Customer.scss'
import Footer from './footer/Footer'
import './footer/Footer.scss'
import './App.css';
import helpers from './helpers'


class App extends Component {
    state = {
        records: [],
        record: []
    }
    componentDidMount() {
        fetch('http://168.63.37.129:6001/data')
            .then(data => data.json())
            .then(data => {
                this.setState({ records: data })
            })
    }
    showDetails = (e, record) => {
        e.stopPropagation();
        const containerDetails = document.querySelector('.container_details');
        const details = document.querySelector('.details');
        containerDetails.style.height = window.innerHeight + window.pageYOffset + 'px'
        this.setState({ record })
        // this.setState({idMatch : match.id})
        containerDetails.style.display = 'block';
        helpers.changeElementSize(details, 600)
            .then(() => {
                // body.style.overflowY = 'hidden';
                // body.style.scrollBehavior = '';
                const detailsContent = document.querySelector('.details_content');
                detailsContent.style.display = 'block'
            })
    };



    render() {
        return (
            <div className="App">
                <Header />
                <Records
                    records={this.state.records}
                    showDetails={this.showDetails}
                />
                <Customer
                    record={this.state.record}
                />
                <Footer />
            </div>
        );

    }
}

export default App;

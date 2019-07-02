import React, { Component } from 'react';

class Records extends Component {

    render() {
        const { records } = this.props;
        let key = 0
        records.sort()
        return (
            <div className="records">
                <ol>
                    {records.map(record =>
                        <li key={key++} className="record" onClick={(e) => this.props.showDetails(e, record)}>
                            <div>{record[3].Value}</div>
                        </li>
                    )}
                </ol>
            </div>
        )
    }
}

export default Records
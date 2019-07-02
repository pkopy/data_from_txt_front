import React, { Component } from 'react';


class Customer extends Component {
    state = {
        showHidden: false
    };

    hidden = (event) => {
        this.setState({ showHidden: event.target.checked })
    }

    hideDetails = () => {
        const details = document.querySelector('.details');
        const containerDetails = document.querySelector('.container_details');
        const detailsContent = document.querySelector('.details_content');
        const checkbox = document.querySelector('input')
        detailsContent.style.display = 'none';
        // body.style.overflowY = 'auto';
        details.style = '';
        containerDetails.style.display = 'none';
        this.setState({ showHidden: false });
        checkbox.checked = false
    };

    render() {
        const { record } = this.props
        let key = 0;
        return (
            <div className="container_details">
                <div className="background_details"></div>
                <div className="details">
                    <div className="details_content">
                        <table>
                            <tbody>
                                {record.map(rec =>
                                    <tr key={key++}>
                                        {rec.Visible && (<td><b>{rec.TRANSLATION_CURRENT}</b></td>)}
                                        {rec.Visible && (<td><b>{rec.Value}</b></td>)}
                                        {this.state.showHidden && !rec.Visible && (<td><b>{rec.TRANSLATION_CURRENT}</b></td>)}
                                        {this.state.showHidden && !rec.Visible && (<td><b>{rec.Value}</b></td>)}

                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <form >
                            <label>
                                Show hidden fields
                                <input type="checkbox" onChange={(e) => this.hidden(e)} />
                            </label>
                        </form>
                        <button onClick={() => this.hideDetails()}>
                            CLOSE
                        </button>
                    </div>
                </div>
            </div>
        )
    };
};

export default Customer
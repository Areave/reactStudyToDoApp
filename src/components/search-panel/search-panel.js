import React from 'react';
import './search-panel.css';

export default class SearchPanel extends React.Component {

    setText = (e) => {
        e.preventDefault();
        this.props.setTerm(e.target.value)
    }

    render() {
        return (
            <input
                className="search-input form-control"
                type="text"
                placeholder="search on form"
                onChange={this.setText}
            />
        );
    }

}

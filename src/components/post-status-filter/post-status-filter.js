import React from 'react';
import { Button } from 'reactstrap';
import './post-status-filter.css';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttons: [
                { filter: 'all', label: 'all', color: "info" },
                { filter: 'liked', label: 'liked', color: "secondary" }
            ]
        }
    }

    setParameters(e, param) {
        console.log(param)
        e.preventDefault();
        this.props.setParam(param);
    }

    render() {

        const buttons = this.state.buttons.map(item => {
            const { filter, label, color } = item;
            console.log(filter);
            return (
                <Button key={filter} onClick={(e) => this.setParameters(e, filter)} outline color={color}>{label}</Button>
            )
        });

        return (
            <div className="btn-group">
                {buttons}
                {/* <button type='button' className="btn btn-info">All</button>
                <button type='button' className="btn btn-outline-secondary">Likes</button> */}

            </div>
        )
    }

}
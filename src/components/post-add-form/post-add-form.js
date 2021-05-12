import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    // constructor(props, addItem) {
    //     super(props);
    //     this.state = {
    //         text:''
    //     }
    //     this.addItem = addItem;
    //     this.text = this.state.text;
    // }

    // const setText = (event) => {
    //     const text = event.target.value;
    //     console.log(text);
    //     this.setState(() => ({ text: text }))
    // }

    clearText = () => {
        this.setState({text:""});
    }

    addText = (event) => {
        this.setState({ text: event.target.value });
    }

    render() {
        const { text } = this.state;
        const { addItem } = this.props;
        return (
            <form className="bottom-panel d-flex"
                onSubmit={(event) => {
                    addItem(event, text);
                    this.clearText();
                }}>
                <input
                    type="text"
                    placeholder="write here"
                    className="form-control new-post-label"
                    onChange={this.addText}
                    value={this.state.text}
                />
                <button
                    type='submit'
                    className="btn btn-outline-secondary"

                >
                    add</button>
            </form>
        )
    }
}



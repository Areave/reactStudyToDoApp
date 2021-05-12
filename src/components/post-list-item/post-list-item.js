import React, { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {

    render() {
        const { label, num, onDelete, onLike, liked, onImportant, important} = this.props;
        let classNames = "app-list-item d-flex justify-content-between app-list-item" + num;
        if (important) classNames += ' important';
        if (liked) {
            classNames += ' like';}
        return (
            <div className={classNames}>
                <span className="app-list-item-label" onClick={onLike}>{label}</span>
                <div className="d-flex justify-content-center align-items-center">
                    <button
                        type="submit" 
                        className="btn-star btn-sm"                        
                        onClick={onImportant}>
                        <i className="fa fa-star"></i>
                    </button>
                    <button
                        type="submit"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}

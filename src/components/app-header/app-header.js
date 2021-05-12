import React from 'react';
import './app-header.css';

const AppHeader = (props)=>{
    const {amount, likedAmount} = props;
    return (
        <div className="app-header d-flex">
            <h1>to do
            </h1>
            <h2>{amount} записей, понравилось {likedAmount}</h2>

        </div>
    )
}

export default AppHeader;
import React from 'react';
import './ShowData.css';

const ShowData = (props) => {
    const {image, vehicle, payment} = props.detail;
    return (
        <div className="custom">
            <li><img width="20px" src={image} alt=""/> Hire: {vehicle} Fee: {payment}</li>
        </div>
    );
};

export default ShowData;
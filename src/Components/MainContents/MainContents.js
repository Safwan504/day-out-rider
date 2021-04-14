import React from 'react';
import { Link } from 'react-router-dom';
import './MainContents.css'

const MainContents = (props) => {
    const { id, vehicle, image } = props.data;
    const handleClick = (id) => {
        console.log('click');
    }
    return (
        <div className="col-md-3 d-flex justify-content-center">
            <div className="custom m-5 p-5">
                <Link to={`search/${id}`}>
                    <img onClick={() => handleClick(props.data)} src={image} alt="" />
                </Link>
                <h4>{id}: {vehicle}</h4>
            </div>
        </div>
    );
};

export default MainContents;
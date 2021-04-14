import React from 'react';
import fakeData from '../../fakeData/fakeData.json';
import MainContents from '../MainContents/MainContents';
import './HomeData.css'

const HomeData = () => {
    return (
        <div className="background-part">
            <div className="container">
                <div className="row">
                    {
                        fakeData.map(data => <MainContents data={data} key={data.id}></MainContents>)
                    }
                </div>
            </div>
        </div>


    );
};

export default HomeData;
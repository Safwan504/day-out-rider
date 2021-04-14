import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData/fakeData';
import ShowData from '../ShowData/ShowData';
import './Search.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Search = () => {
    const { id } = useParams();
    const data = fakeData.find(res => res.id == id);
    const [ showData, setShowData] = useState([]);
    const handleClick = (data) => {
        const info = [data];
           setShowData(info);
    };
    const [selectedDate, setSelectedDate] = useState();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h6 className="mt-5">From</h6>
                    <input type="text" /><br />
                    <h6 className="mt-3">To</h6>
                    <input type="text" /><br />
                    <h6 className="mt-5">Select Date:</h6>
                    <DatePicker
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)} 
                    dateFormat='dd/MM/yyyy'
                     /> <br/>

                    <button onClick={() => handleClick(data)} className="btn btn-primary mt-3 mb-5">Search</button>
                    {
                        showData.map(detail => <ShowData detail={detail}></ShowData> )
                    }
                </div>
                <div className="col-md-6">
                    <div className='m-5 d-flex'> <iframe title="My map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82239086815!2d90.27923710646989!3d23.780887457084543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1618424077455!5m2!1sen!2sbd" width="600" height="450" style={{border:'0'}} allowFullScreen="" loading="lazy"></iframe></div>
                 
                </div>

            </div>

        </div>

    );
};

export default Search;
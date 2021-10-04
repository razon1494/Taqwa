import React from 'react';
import {useParams} from 'react-router';
import './Enroll.css';
const Enroll=() => {
    const params=useParams();
    const id=params.courseId;
    const idNum=parseInt(id);
    return (
        <div className='enroll' >
            <div className="enroll-text">
            <h1 className='enroll-head'>You Want to enroll Course No:  {idNum+1000}</h1>
            <h3>Please Pay Throgh Bkash and email us your payment info. We will send you all instruction through Mail</h3>
            <h4>Thank You</h4>
                <p>Stay With Taqwa Islamic Center</p>
            </div>
        </div>
    );
};

export default Enroll;
import React from 'react';
import './SingleCourse.css'
const SingleCourse=(props) => {
    const {course}=props;
    console.log(course);
    const {hadithId,hadithName, quantity,classes, duration, fee,img}=course;
    return (
        <div className="col-5  m-3 course">
            <h3 className='code text-center'>Course Code: {1000+hadithId}</h3>
            <div className="d-flex">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="text m-3">
                <h3>{hadithName}</h3>
                <div className="text-center mb-3">
            <small className=''>Total {quantity} hadiths you will learn</small></div>
            <p>Course Duration: {duration}</p>
            <p>Total Classes: {classes} Classes (120min/class)</p>
            <p>Course Fee : {fee}/=</p>
            </div>
</div>
        </div>
    );
};

export default SingleCourse;
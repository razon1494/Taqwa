import React from 'react';
import './SingleCourse.css'
const SingleCourse=(props) => {
    const {course}=props;
    console.log(course);
    const {hadithName, quantity,classes, duration, fee,img}=course;
    return (
        <div className="col-5 d-flex m-3">
            <div className="img">
                <img src={img} alt="" />
            </div>
            <div className="text m-3">
                <h2>Course Name: {hadithName}</h2>
            <small>Total {quantity} hadith you will learn</small>
            <p>Course Duration: {duration}</p>
            <p>Total Classes: {classes}</p>
            <p>Course Fee : {fee}</p>
            </div>

        </div>
    );
};

export default SingleCourse;
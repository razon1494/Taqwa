import React from 'react';
import './Instructor.css'
const Instructor=(props) => {
    const {instructor}=props;
    // Showing Instructs in a card with animation box shadow
    return (
        <div className='col-md-3 instructor-card px-2'>
            <img className='container-fluid instructor-img' src={instructor.img} alt="instructor" />
            <h3 className='instructor-name'>{instructor.name}</h3>
            <h5 className='instructor-post'>{instructor.post}</h5>

        </div>
    );
};

export default Instructor;
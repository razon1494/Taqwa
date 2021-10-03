import React from 'react';
import useHadith from '../../hooks/useHadith';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'
const Courses=() => {
    const [courses]=useHadith();
    return (
        <div>
            <div className="home-title">
                <h2 className='text-center fw-bold mt-3'>Please Check Our All Courses</h2>
            </div>
            <div className="popular-courses row mt-4 g-5 container-fluid justify-content-center">
                {
                    courses.map(course => <SingleCourse
                        key={course.id}
                        course={course}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Courses;
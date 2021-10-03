import React from 'react';
import useHadith from '../../hooks/useHadith';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Home.css'
const Home=() => {
    const [courses]=useHadith();
    const popularCourses=courses.filter(course => course.fee>=10000);
    return (
        <div>
            <div className="home-title">
                <h2 className='text-center fw-bold mt-3'>Explore Our Most Popular Courses</h2>
            </div>
            <div className="popular-courses row mt-4 g-5 container-fluid justify-content-center">
                {
                    popularCourses.map(course => <SingleCourse
                        key={course.id}
                        course={course}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Home;
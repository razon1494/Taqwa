import React from 'react';
import useHadith from '../../hooks/useHadith';
import SingleCourse from '../SingleCourse/SingleCourse';
import Slider from '../Slider/Slider';
import './Home.css';
const Home=() => {
    const [courses]=useHadith();
    //filtering popular courses based on course fee
    const popularCourses=courses.filter(course => course.fee>=10000);
    return (
        <div>
            <div className="slider">
                <Slider></Slider>
            </div>
            <div className="home-title">
                <h2 className='text-center fw-bold mt-3 '>Explore Our Most <span id='popular-courses'> Popular Courses</span></h2>
            </div>
            <div className="popular-courses row mt-4 g-5 container justify-content-between mx-auto mb-4">
                {
                    // showing popular courses
                    popularCourses.map(course => <SingleCourse
                        key={course.hadithId}
                        course={course}
                    ></SingleCourse>)
                }
            </div>
        </div>
    );
};

export default Home;
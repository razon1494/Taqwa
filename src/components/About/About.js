import React from 'react';
import useInstructor from '../../hooks/useInstructor';
import Instructor from '../Instructor/Instructor';
import './About.css'
const About=() => {
    // destructuring to get the instructors array from public json file
    const [instructors]=useInstructor();
    return (
        <div className='container text-center mt-3'>
            <div className="about-head">
            <h2>Taqwa Islamic Center</h2>
                <p className='about-p'>Taqwa Institute is the brainchild of Ustadh Nouman Ali Khan, a pioneering, influential American Muslim who grew up in New York City, with the aim of spreading the universal message of Islam.

Founded in 2005, Bayyinah is currently based in Dallas, Texas. The institute’s mission is to make learning the Arabic language and the study of the Quran accessible worldwide in a way that is innovative, accesible, and approachable.

Bayyinah’s founder believes that using modern technology and cutting-edge educational tools is key to encouraging an appreciation of the Quran and the Arabic language for those who want to improve themselves by drawing nearer to Allah through study.

To make this vision a reality, Bayyinah offers a variety of full-time, part-time and self-paced learning programs with professional scholars and specialists. Bayyinah leverages the power of media to deliver high quality content, teaching texts to thousands of male and female students from all walks of life, across the globe.   </p>
            </div>
            <div className="mission">
                 <h2>Our Mission</h2>
                <p className='about-p'>Taqwa Foundation is a non-profit organization created with a passion to give back to the Muslim community by launching Quranic & Arabic based learning initiatives to educate both those in the United States and abroad.</p>
            </div>
            <div className="instructors">
                <h2>We Have World's Famous Instructor.</h2>
                <div className="instructor row g-4 justify-content-center">
                    {
                        // Showing Instructors
                        instructors.map(instructor => <Instructor
                            key={instructor.key}
                            instructor={instructor}
                        ></Instructor>)
                    }

                </div>
            </div>

        </div>
    );
};

export default About;
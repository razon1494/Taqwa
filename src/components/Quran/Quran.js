import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import './Quran.css'
const Quran=() => {
    const [learner, setLearner]=useState(false);
    const handleJoinNow=()=>{
        setLearner(true);
    }
    const handleRemove=() => {
        setLearner(false);
    }
    //Marketing Free Quran Course
    return (
        <div className='text-center quran-container row'>
            <div className="text-container col-4">
            <h1>Learn Quran Free</h1>
            <h3>Every Friday we have free classes on quran learning.
            </h3>
                <p>We have separate session for men and women. The free classes are divided into two parts Tafsir and Tilwat</p>
                <button onClick={handleJoinNow} className='choice-btn'>Join Now</button>
                {
                    learner?<div>
                        <h4 className='mt-3'>Please Join this group <br />
                            <span id='group-link'>fb.com/groups/taqwaislamic/ </span> <br />With Code: <span className='code-kalima'> La-Ilaha-Illahllah</span></h4>
                        <h5 className='text-center'>If you do not want to join <Link to='/quran' onClick={handleRemove} className='remove-click'> Click Here</Link> </h5>
                    </div>:<div>
                            <h5 className='mt-4 miss-text'>If you miss this opportunity of learning Quran, You are missing something special. This education will give you peace eternally.</h5>
                            <p className='text-center fs-3 miss-p'>So do not wait just click <Link to='/quran' onClick={handleJoinNow} className='remove-click'> Join Now</Link></p>
                    </div>
                }
            </div>

        </div>
    );
};

export default Quran;
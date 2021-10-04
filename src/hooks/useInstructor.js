import {useEffect} from 'react';
import {useState} from 'react';
//getting Instructors
const useInstructor=() => {
    const [instructor, setInstructor]=useState([]);
    useEffect(() => {
        fetch('./instructor.json')
            .then(res => res.json())
            .then(data => setInstructor(data));
    }, []);
    return [instructor, setInstructor];
};

export default useInstructor;
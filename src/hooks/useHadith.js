import {useEffect} from 'react';
import {useState} from 'react';
const useHadith=() => {
    const [courses, setCourses]=useState([]);
    useEffect(() => {
        fetch('./hadith.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, []);
    return [courses, setCourses];
};

export default useHadith;
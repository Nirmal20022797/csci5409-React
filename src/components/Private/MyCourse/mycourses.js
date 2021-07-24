import { CardDeck } from "react-bootstrap";
import './mycourses.css';
import React from 'react';
import CourseCard from './coursecard';

function MyCourse() {

    return (
        <div>
            <h2>My Courses</h2>
            <CardDeck>
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            <CourseCard />
            </CardDeck>
        </div>
    );
}

export default MyCourse;
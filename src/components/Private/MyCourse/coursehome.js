import VideoCard from './videocard';
import CourseContent from './coursecontent';
import './coursehome.css';
import React, { useState } from 'react';
import Rating from 'react-simple-star-rating';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';


function CourseHome() {

    const [rating, setRating] = useState(0)
    const handleRating = (rate) => {
        setRating(rate)
    }

    return (
        <div id="course">

            <h1>MERN Stack</h1>
            <div>
                <VideoCard />
            </div>
            <div>
                <h2>Notes</h2>
                <CourseContent />
            </div>
            <div>
                <h2>Rate the Course</h2>
                <Card style={{ width: '50rem', maxheight: '100rem' }} id="rate">
                    <Card.Body>
                        <Rating
                            onClick={handleRating}
                            ratingValue={rating}
                            size={20}
                            transition
                            fillColor='gold'
                            emptyColor='gray'
                            className='foo'
                        />
                        <Button type="submit" id="button">Post Rating</Button>
                        <Card.Text>
                            <textarea class="form-control" rows="10" id="comment" placeholder="Comment.."></textarea>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default CourseHome;
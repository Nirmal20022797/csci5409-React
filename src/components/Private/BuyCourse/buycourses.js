import BuyCourseCard from './buycoursecard';
import { CardDeck } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import './buycourse.css';

function BuyCourse() {
    return (
        <div>
            <h2>Popular Topic</h2>
            <CardDeck id="topic">
                <Card border="secondary" style={{ width: '5rem' }}>
                    <Card.Body>
                        <Card.Title>Web Development</Card.Title>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '5rem' }}>
                    <Card.Body>
                        <Card.Title>Machine Learning</Card.Title>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '5rem' }}>
                    <Card.Body>
                        <Card.Title>Artificial Intelligence</Card.Title>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '5rem' }}>
                    <Card.Body>
                        <Card.Title>Data Structures</Card.Title>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '5rem' }}>
                    <Card.Body>
                        <Card.Title>Python</Card.Title>
                    </Card.Body>
                </Card>
                <Card border="secondary" style={{ width: '5rem' }}>
                    <Card.Body>
                        <Card.Title>Advance Java</Card.Title>
                    </Card.Body>
                </Card>
                
            </CardDeck>
            <h2>Trending Courses</h2>
            <CardDeck id="topic2">
                <BuyCourseCard />
                <BuyCourseCard />
                <BuyCourseCard />
                <BuyCourseCard />
                <BuyCourseCard />
                <BuyCourseCard />
                <BuyCourseCard />
                <BuyCourseCard />
            </CardDeck>
        </div>

    );
}

export default BuyCourse;
import './coursedetail.css'
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import image from './test1.jpg';

function CourseDetail() {
    return (
        <div id="coursedetail">
            <Card id="card" style={{ width: '60rem' }}>
                <Card.Img id="img" src={image}/>
                <Card.Body id="text1">
                    <Card.Title>MERN Stack</Card.Title>
                    <Card.Text>
                        MERN is the acronym for MongoDB, Express JS, React JS and Node JS. 
                        The MERN stack is a combination of the above technologies, all based on JavaScript, used to build advanced web applications. 
                        It is an open source full stack development framework i.e. It provides entire front-end to back-end development components.
                    </Card.Text>
                </Card.Body>
                <Card.Body id="text1">
                    <div>Rating: 3.5</div><br/>
                    <div>Expert: Adam Williams</div><br/>
                    <div>Badge: Yes</div><br/>
                    <div>Price: 100</div><br/>
                    <div>Award: 50</div><br/>
                </Card.Body>
                <Card.Body id="text1">
                    <Button id="button">Add to Whishlist</Button>
                    <Button id="button">Buy Course</Button>
                </Card.Body>
            </Card>
        </div>

    );
}

export default CourseDetail;
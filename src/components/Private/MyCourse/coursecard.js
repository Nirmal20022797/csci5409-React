import Card from 'react-bootstrap/Card';
import { BsFillTrashFill } from "react-icons/bs";
import image from './test1.jpg';
import './coursecard.css'
import { useHistory } from 'react-router-dom';

function CourseCard() {
    const history = useHistory();
    const handleOnClick =()=>{history.push('/coursehome')}
    return (
        <div className="coursecard">
            <Card style={{ width: '20rem' }} onClick={handleOnClick}>
                <Card.Img className="img" src={image} />
                <Card.Body className="text1">
                    <div className="sub"><Card.Title>MERN Stack</Card.Title></div>
                    <div className="sub" id="icon"><BsFillTrashFill size={20} /></div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CourseCard;
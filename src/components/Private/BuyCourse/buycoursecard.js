import Card from 'react-bootstrap/Card';
import { FaStar } from "react-icons/fa";
import { RiCoinsLine } from "react-icons/ri";
import image from './test1.jpg';
//import './buycoursecard.css';
import { useHistory } from 'react-router-dom';

function BCourseCard() {
    const history = useHistory();
    const handleOnClick =()=>{history.push('/coursedetail')}
    return (
        <div className="coursecard">
            <Card style={{ width: '20rem' }} onClick={handleOnClick}>
            <Card.Img className="img" src={image}/>
                <Card.Body className="text1">
                    <div className="sub"><Card.Title>MERN Stack</Card.Title></div>
                    <div className="sub2">
                        <div className="sub" id="icon">  3.5 <FaStar size={15}/></div>
                        <div className="sub" id="icon"> 100 <RiCoinsLine size={15}/></div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BCourseCard;
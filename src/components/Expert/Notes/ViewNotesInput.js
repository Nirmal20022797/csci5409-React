import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    Form,
    Button,
    Modal
} from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import { notesTitle, notesDescription, selectCourse, notesName } from './notesValidation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Typography, message } from 'antd';
import axios from 'axios';
import { useSelector } from "react-redux";
import QuillEditor from '../Editor/QuillEditor';

const useStyles = makeStyles((theme) => ({
    title: {
        padding: '36px 0 32px 36px',
        fontSize: '36px',
        textTransform: "capitalize",
        marginBottom: '0px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            fontSize: 30,
            padding: '12px 0 12px 12px',
            textAlign: 'center',
        },
    },
    link: {
        textTransform: "uppercase",
        fontWeight: "500",
        fontSize: "12px",
        lineHeight: "18px",
        color: "#000000",
        padding: "0 18px",
        margin: "auto",
        [theme.breakpoints.down("sm")]: {
            margin: "20px 0",
            textAlign: "center",
            background: "#FFFFFF",
            height: "50px",
            boxShadow: "0px 2px 3px rgba(0, 0, 0, 0.25)",
            borderRadius: 16,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
    },
    right: {
        [theme.breakpoints.down("md")]: {
            marginTop: 30,
        },
    },
    dropimg: {
        width: 50,
        borderRadius: "50%",
    },

    otheuperrow: {
        marginTop: "40px",
    },
    active: {
        background: "#000",

    },
    active1: {
        color: "#fff !important",
    },
    sidelink: {
        fontWeight: 600,
        fontSize: "14px",
        lineHeight: "21px",
        textTransform: "capitalize",
        color: "#000",
    },
    input: {
        color: '#000',
        fontSize: 12,
        textTransform: "capitalize",
        fontWeight: 500,
        height: '50px',
        '&::placeholder': {
            textTransform: "capitalize",
        },
    },
    btnactive: {
        background: '#000',
        color: '#fff',
        border: '1px solid #000',
        borderRadius: '16px',
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
        textTransform: "capitalize",
        width: 120,
        '&:hover': {
            background: "#fff",
            color: '#000',
            border: '1px solid #000',
        },

    },
    btnreset: {
        background: '#fff',
        color: '#000',
        width: '100%',
        padding: '10px',
        height: '60px',
        margin: '0 10%',
        border: 'none',
        borderRadius: '16px',
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
        textTransform: "capitalize",
        '&:hover': {
            background: "#fff",
            color: '#000',
            border: 'none',
        },
        [theme.breakpoints.down("md")]: {
            width: '80%',
            margin: '10px 0'
        },
    },
    btnsubmit: {
        background: '#000',
        color: '#fff',
        width: '100%',
        padding: '10px',
        height: '60px',
        border: 'none',
        borderRadius: '16px',
        boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.25)',
        textTransform: "capitalize",
        '&:hover': {
            background: "#fff",
            color: '#000',
            border: 'none',
        },
        [theme.breakpoints.down("md")]: {
            width: '80%',
            margin: '10px 0'
        }
    },
    btngroup: {
        [theme.breakpoints.down("md")]: {
            textAlign: 'center'
        }
    },
    formgroup: {
        [theme.breakpoints.down("xs")]: {
            marginTop: '1rem'
        }
    }
}));

toast.configure()
const ViewNotesInput = ({ id }) => {
    const classes = useStyles();

    const [notesdata, setNotesData] = useState({courseName : "",  });

    useEffect(() => {
        axios.get("https://csci-5709-nodejs.herokuapp.com/api/expert/getNote/" + id).then(res => {
            console.log(res.data.data[0]);
            setNotesData(res.data.data[0]);
        }).catch(err => console.log("Err is", err))
    }, [])



    console.log(id);
    return (
        <div>

            <Form.Group className="mb-3" controlId="noteename">

                <Form.Label>Select Course</Form.Label>

                <select className={`form-control ${classes.input}`} id="courseSelect" >
                    <option value="" > {notesdata.courseName}</option>
                </select>
            
            </Form.Group>
            <Form.Group className="mb-3" controlId="notesname">
                <Form.Label>Note Name</Form.Label>
                <Form.Control type="select" className={classes.input} value= {notesdata.notesName}   autoComplete="off" />
               
            </Form.Group>

            <Form.Group className="mb-3" rows={3} controlId="notesTitle">
                <Form.Label>Notes Title </Form.Label>
                <Form.Control type="text" rows={3} className={classes.input} value= {notesdata.notesTitle} autoComplete="off" />
              
            </Form.Group>

            <Form.Group className="mb-3" controlId="notesReference">
                <Form.Label>Content</Form.Label>
                <div dangerouslySetInnerHTML={{ __html: notesdata.content }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="notesReference">
                <Form.Label>References</Form.Label>
                <Form.Control type="text" className={classes.input}  value= {notesdata.notesReference}  autoComplete="off"  autoComplete="off" />
            </Form.Group>

        </div>
    );
}

export default ViewNotesInput;

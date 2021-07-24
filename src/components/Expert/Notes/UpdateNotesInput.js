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
import axios from 'axios';
import { notesTitle, notesDescription, selectCourse, notesName } from './notesValidation';
import UpdateQuillEditor from '../Editor/UpdateQuillEditor';

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


const UpdateNotesInput = ({ id, courseData }) => {
    const classes = useStyles();

    const [note, setNote] = useState({ courseName: "", courseId: "", notesName: "", notesTitle: "", notesReference: "" })
    const [formErrForInsert, setFormErrsForInsert] = useState({ errorForCourseSelect: "", errorForNotesName: "", errorForNotesTitle: "" });
    const [courseId, setCourseId] = useState(null);

    useEffect(() => {
        console.log(" in use effect mrthod")
        console.log(id)
        axios.get("https://csci-5709-nodejs.herokuapp.com/api/expert/getNote/" + id).then(res => {
            console.log(res.data.data[0]);
            setNote(res.data.data[0])
        }).catch(err => console.log("Err is", err))
    }, [])


    function handleChange(e) {
        e.preventDefault();

        const { id, value } = e.target;

        switch (id) {
            case 'courseSelect':
                if (selectCourse(value)) {
                    setFormErrsForInsert({ ...formErrForInsert, errorForCourseSelect: "*Select Course from list" })
                }
                else {
                    delete formErrForInsert.errorForCourseSelect
                }
                setNote({ ...note, courseId: value })
                break;
            case 'notesname':
                if (notesName(value)) {
                    setFormErrsForInsert({ ...formErrForInsert, errorForNotesName: "*Notes Name is required" })
                }
                else {
                    delete formErrForInsert.errorForNotesName;
                }
                setNote({ ...note, notesName: value })
                break;
            case 'notesTitle':
                if (notesTitle(value)) {
                    setFormErrsForInsert({ ...formErrForInsert, errorForNotesTitle: "*Notes Title is required" })
                }
                else {
                    delete formErrForInsert.errorForNotesTitle
                }
                setNote({ ...note, notesTitle: value })
                break;
            case 'notesTitle':
                if (notesTitle(value)) {
                    setFormErrsForInsert({ ...formErrForInsert, errorForNotesTitle: "*Notes Title is required" })
                }
                else {
                    delete formErrForInsert.errorForNotesTitle
                }
                setNote({ ...note, notesTitle: value })
                break;
            case 'notesReference':

                setNote({ ...note, notesReference: value })
                break;

            default:
                break;
        }
    }


    // quill text editor 
    const [content, setContent] = useState("")
    const [files, setFiles] = useState([])

    const onEditorChange = (value) => {
        setContent(value)
        console.log(content)
    }

    const onFilesChange = (files) => {
        setFiles(files)
    }



    return (
        <div>
            <Form.Group className="mb-3" controlId="noteename">

                <Form.Label>Select Course</Form.Label>

                <select className={`form-control ${classes.input}`} id="courseSelect" onBlur={handleChange} onChange={handleChange} value={note.courseId}>
                    <option value="" >Select Course</option>
                    {(courseData && courseData.length) ?
                        courseData.map((t, itemNumber) => {
                            return (
                                <option value={t.courseId} key={itemNumber + 1} >{t.courseName}</option>
                            )
                        }
                        ) : null

                    }

                </select>
                <small style={{ color: "red" }}>{formErrForInsert.errorForCourseSelect}</small>



            </Form.Group>
            <Form.Group className="mb-3" controlId="notesname">
                <Form.Label>Note Name</Form.Label>
                <Form.Control type="select" className={classes.input} placeholder="Notes Name" value={note.notesName || ""} onBlur={handleChange} onChange={handleChange} autoComplete="off" />

            </Form.Group>

            <Form.Group className="mb-3" rows={3} controlId="notesTitle">
                <Form.Label>Notes Title </Form.Label>
                <Form.Control type="text" rows={3} className={classes.input} placeholder="Notes Title" value={note.notesTitle || ""} onBlur={handleChange} onChange={handleChange} autoComplete="off" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="notesReference">
                <Form.Label>Content</Form.Label>
                <div dangerouslySetInnerHTML={{ __html: note.content || "" }} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="notesReference">
                <Form.Label>References</Form.Label>
                <Form.Control type="text" className={classes.input} placeholder="Notes Reference" value={note.notesReference || ""} onBlur={handleChange} onChange={handleChange} autoComplete="off" />
            </Form.Group>
        </div>
    );
}

export default UpdateNotesInput;

import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal
} from "react-bootstrap";

import {  FaPen } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { makeStyles } from "@material-ui/core/styles";
import CreateIcon from '@material-ui/icons/Create';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
  },
  greenbtn: {
    color: "#fff",
    backgroundColor: "#00FF00",
    borderColor: "#007bff"
}
}));

function ManageCourses(props) {
  const classes = useStyles();

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [idUpdate, setIdUpdate] = useState(null);

  const [showModalforDelete, setShowModalforDelete] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [idDelete, setIdDelete]= useState(null);

  const handleCloseDelete = () => {
    setShowDelete(false);
    setIdDelete(null);
  }


  const handleShowDelete = () => {
    setShowDelete(true);
    
  }

  const toggleTrueFalseDelete = () => {
    setShowModalforDelete(handleShowDelete)
    setIdDelete();
  }


  const handleCloseUpdate = () => {
    setShowUpdate(false);
    setIdUpdate(null);
  }


  const handleShowUpdate = () => {
    setShowUpdate(true);

  }

  const toggleTrueFalseUpdate = (id) => {
    setShowUpdateModal(handleShowUpdate)
    setIdUpdate(id);
  }


  const DeleteModalContent = () => {
    return (
      <Modal
        
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showDelete}
        onHide={handleCloseDelete}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Delete Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <p>Are you sure want to delete course?</p>
          


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseDelete}>Close</Button>
          <Button onClick= {handleCloseDelete}>Delete </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const UpdateModalContent = () => {
    return (
      <Modal

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showUpdate}
        onHide={handleCloseUpdate}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Course Detail
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form.Group className="mb-3" controlId="coursename">
            <Form.Label>Course Name</Form.Label>
            <Form.Control type="text" className={classes.input} placeholder="Mean Stack" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="courseDescription">
            <Form.Label>Course Description</Form.Label>
            <Form.Control type="textarea" rows={3} className={classes.input} placeholder="Learning how to design both the front and back end of web applications opens up twice as many job opportunities for developers. If you already know JavaScript, learning the MEAN Stack is easy. Udemy offers top-rated courses on every aspect of MEAN usage, from Angular, to Node.js, to Express, and MongoDB." />
          </Form.Group>

          <Form.Group className="mb-3" controlId="credit">
            <Form.Label>Credit Required</Form.Label>
            <Form.Control type="number" className={classes.input} placeholder="25" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Tags</Form.Label>
            <Form.Check
              type="checkbox"
              id={`default-radio`}
              label={`Basic Course`}
              name="formHorizontalRadios"
            />

            <Form.Check
              type="checkbox"
              id={`default-radio`}
              label={`Intermediate Course`}
              name="formHorizontalRadios"
            />

            <Form.Check
              type="checkbox"
              id={`default-radio`}
              label={`Expert Course`}
              name="formHorizontalRadios"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="credit">
            <Form.Label>Live Link</Form.Label>
            <Form.Control type="number" className={classes.input} placeholder="Live Link"  />
          </Form.Group>





        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseUpdate}>Close</Button>
          <Button onClick={handleCloseUpdate}>Add Course</Button>
        </Modal.Footer>
      </Modal>
    )
  }

  var linkData = [
    {
      name: ' Dashboard',
      to: '/admin/dashboard',
      icon: <CreateIcon />,
      linkActive: false
    },
    {
      name: ' Course ',
      to: '/admin/courses',
      icon: <CreateIcon />,
      linkActive: false
    },
    {
      name: 'Manage Course',
      to: '/admin/courses/manageCourses',
      icon: <CreateIcon />,
      linkActive: true
    },

  ]
  return (

    <div style={{ background: "aliceblue" }}>
      <TopNavbar />

      <Row className={`uperrow ${classes.otheuperrow}`}>
        <OtherSideBar linkName={linkData} />


        <Col
          lg="9"
          md="12"
          sm="12"
          xs="12"
          className={`right ${classes.right}`}
        >
          <Card className="graphcard1">
            <h5 className={classes.title}>All Courses

              <Col className='ml-auto' lg={3} md={3}>
                <Form.Group className="mb-3" controlId="search">

                  <Form.Control type="serach" className={classes.input} placeholder="search" />
                </Form.Group>
              </Col>


              {showUpdate ? <UpdateModalContent /> : null}
              {showDelete ? <DeleteModalContent /> : null}
            </h5>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>

                    <TableCell align="center">Index</TableCell>
                    <TableCell align="center">Course Name</TableCell>
                    <TableCell align="center">Course Description</TableCell>
                    <TableCell align="center">Update</TableCell>
                    <TableCell align="center">Delete</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>

                  <TableRow key='1'>
                    <TableCell component="th" scope="row">
                      1
                    </TableCell>
                    <TableCell align="center">Mean Stack</TableCell>
                    <TableCell align="center">Learning how to design both the front and back end of web applications opens up twice as many job opportunities for developers. If you already know JavaScript, learning the MEAN Stack is easy. Udemy offers top-rated courses on every aspect of MEAN usage, from Angular, to Node.js, to Express, and MongoDB.</TableCell>
                    <TableCell align="center">  <Button  style={{backgroundColor: "#00FF00" ,  borderColor: "#00FF00" , hover: "00A300"}} onClick={() => toggleTrueFalseUpdate("1")}>
                      <FaPen />
                    </Button>
                    </TableCell>
                    <TableCell align="center"> <Button   style={{backgroundColor: "#FF0000" ,  borderColor: "#FF0000" , hover: "00A300"}}  onClick={() => toggleTrueFalseDelete()}>
                      <AiFillDelete />
                    </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow key='2'>
                    <TableCell component="th" scope="row">
                      2
                    </TableCell>
                    <TableCell align="center">Course 1</TableCell>
                    <TableCell align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                    <TableCell align="center">  <Button  style={{backgroundColor: "#00FF00" ,  borderColor: "#00FF00" , hover: "00A300"}} onClick={() => toggleTrueFalseUpdate("1")}>
                      <FaPen />
                    </Button>
                    </TableCell>
                    <TableCell align="center"> <Button   style={{backgroundColor: "#FF0000" ,  borderColor: "#FF0000" , hover: "00A300"}}  onClick={() => toggleTrueFalseDelete()}>
                      <AiFillDelete />
                    </Button>
                    </TableCell>


                  </TableRow>
                  <TableRow key='3'>
                    <TableCell component="th" scope="row">
                      3
                    </TableCell>
                    <TableCell align="center">Course 2</TableCell>
                    <TableCell align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                    <TableCell align="center">  <Button  style={{backgroundColor: "#00FF00" ,  borderColor: "#00FF00" , hover: "00A300"}} onClick={() => toggleTrueFalseUpdate("1")}>
                      <FaPen />
                    </Button>
                    </TableCell>
                    <TableCell align="center"> <Button   style={{backgroundColor: "#FF0000" ,  borderColor: "#FF0000" , hover: "00A300"}}  onClick={() => toggleTrueFalseDelete()}>
                      <AiFillDelete />
                    </Button>
                    </TableCell>


                  </TableRow>
                  <TableRow key='4'>
                    <TableCell component="th" scope="row">
                      4
                    </TableCell>
                    <TableCell align="center">Course 3</TableCell>
                    <TableCell align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                    <TableCell align="center">  <Button  style={{backgroundColor: "#00FF00" ,  borderColor: "#00FF00" , hover: "00A300"}} onClick={() => toggleTrueFalseUpdate("1")}>
                      <FaPen />
                    </Button>
                    </TableCell>
                    <TableCell align="center"> <Button   style={{backgroundColor: "#FF0000" ,  borderColor: "#FF0000" , hover: "00A300"}}  onClick={() => toggleTrueFalseDelete()}>
                      <AiFillDelete />
                    </Button>
                    </TableCell>


                  </TableRow>
                  <TableRow key='5'>
                    <TableCell component="th" scope="row">
                      5
                    </TableCell>
                    <TableCell align="center">Course 4</TableCell>
                    <TableCell align="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TableCell>
                    <TableCell align="center">  <Button  style={{backgroundColor: "#00FF00" ,  borderColor: "#00FF00" , hover: "00A300"}} onClick={() => toggleTrueFalseUpdate("1")}>
                      <FaPen />
                    </Button>
                    </TableCell>
                    <TableCell align="center"> <Button   style={{backgroundColor: "#FF0000" ,  borderColor: "#FF0000" , hover: "00A300"}}  onClick={() => toggleTrueFalseDelete()}>
                      <AiFillDelete />
                    </Button>
                    </TableCell>

                  </TableRow>


                </TableBody>
              </Table>
            </TableContainer>




          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default ManageCourses

import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Form,
  Button,
  Modal
} from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddFAQInput from './AddFAQInput';
import UpdateFAQInput from './UpdateFAQInput';


import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  editButton: {
    '&:focus': {
      backgroundColor: 'rgb(0, 255, 0) !important',
      borderColor: 'rgb(0, 255, 0) !important',
      color: "#ffffff !important"
    }
  },
  deleteButton: {
    '&:focus': {
      backgroundColor: 'rgb(255, 0, 0) !important',
      borderColor: 'rgb(255, 0, 0) !important',
      color: "#ffffff !important"
    },
  },
  background: {
    background : "linear-gradient(to right, #fa709a 0%, #fee140 100%) !important"
  }
}));

toast.configure()
function FAQ(props) {
  const classes = useStyles();

  const [showModalforDelete, setShowModalforDelete] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [idDelete, setIdDelete] = useState(null);
  const [itemNumber, setitemNumber] = useState(null);

  const [showUpdateFAQModal, setShowUpdateFAQModal] = useState(false);
  const [showUpdateFAQ, setShowUpdateFAQ] = useState(false);
  const [idUpdateFAQ, setIdUpdateFAQ] = useState(null);

  const [showFAQModal, setShowFAQModal] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [idFAQ, setIdFAQ] = useState(null);

  const [showAddFAQModal, setShowAddFAQModal] = useState(false);
  const [showAddFAQ, setShowAddFAQ] = useState(false);
  const [idAddFAQ, setIdAddFAQ] = useState(null);


  const [tabledata, settabledata] = useState([]);
  const [searchstr, setsearchstr] = useState("");
  const [searcheddata, setsearcheddata] = useState([]);
  const [issearched, setissearched] = useState(false);

  useEffect(() => {
    axios.get("https://csci-5709-nodejs.herokuapp.com/api/expert/getFAQS").then(res => {
      settabledata(res.data.data);
      setsearcheddata(res.data.data);
    }).catch(err => console.log("Err is", err))
  }, [])

  const handleCloseDelete = () => {
    setShowDelete(false);
    setIdDelete(null);
  }

  const handleShowDelete = () => {
    setShowDelete(true);

  }

  const toggleTrueFalseDelete = (id, itemNumber) => {
    setShowDelete(true)

    setIdDelete(id);
    setitemNumber(itemNumber);
  }


  const handleCloseFAQ = () => {
    setShowFAQ(false);
    setIdFAQ(null);
  }

  const handleShowFAQ = () => {
    setShowFAQ(true);

  }

  const toggleTrueFalseFAQ = () => {
    setShowFAQModal(handleShowFAQ)
    setIdFAQ();
  }


  const handleCloseAddFAQ = () => {
    setShowAddFAQ(false);
    setIdAddFAQ(null);
  }

  const handleShowAddFAQ = () => {
    setShowAddFAQ(true);

  }

  const toggleTrueFalseAddFAQ = () => {
    setShowAddFAQModal(handleShowAddFAQ)
    setIdAddFAQ();
  }

  const handleCloseUpdateFAQ = () => {
    setShowUpdateFAQ(false);
    setIdUpdateFAQ(null);
  }

  const handleShowUpdateFAQ = () => {
    setShowUpdateFAQ(true);

  }

  const toggleTrueFalseUpdateFAQ = (id) => {
    console.log(id);
    setShowUpdateFAQ(true)
    setIdUpdateFAQ(id);
  }

  const FAQModalContent = () => {
    return (
      <Modal

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showFAQ}
        onHide={handleCloseFAQ}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            FAQ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form.Group className="mb-3" controlId="coursename">
            <Form.Label>Question </Form.Label>
            <Form.Control type="select" className={classes.input} placeholder="How can I buy Course?" disabled />
          </Form.Group>

          <Form.Group className="mb-3" rows={3} controlId="courseDescription">
            <Form.Label>Answer  </Form.Label>
            <Form.Control type="text" rows={3} className={classes.input} placeholder="Select Course and hit button buy button. If you do not have enough credit to buy course it will give you warning otherwise you will be able to purchase course." disabled />
          </Form.Group>


        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseFAQ}>Close</Button>
          
        </Modal.Footer>
      </Modal>
    )
  }

  const handelAddFAQSubmit = (event, data) => {

    event.preventDefault();

    const formData = {

      question: data.FAQQuestion,
      answer: data.FAQAnswer,

    };

    console.log(" question" + data.FAQQuestion);
    console.log(" answer" + data.FAQAnswer);

    axios.post('https://csci-5709-nodejs.herokuapp.com/api/expert/addFAQ', {
      question: data.FAQQuestion,
      answer: data.FAQAnswer
    })
      .then(function (res) {

        if (res.data.success == true) {
          toast.success('Faq Addedd successfully!', {
            position: toast.POSITION.TOP_RIGHT
          })
          handleCloseAddFAQ();
          settabledata([...tabledata, res.data.data[0]])
        }
      })
  };

  const AddFAQModalContent = () => {
    return (
      <Modal

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showAddFAQ}
        onHide={handleCloseAddFAQ}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add FAQ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <AddFAQInput handelAddFAQSubmit={handelAddFAQSubmit} />

        </Modal.Body>

      </Modal>
    )
  }

  const handleFAQDelete = () => {
    console.log("handle course", idDelete)
    axios({
      method: "delete",
      url: "https://csci-5709-nodejs.herokuapp.com/api/expert/deleteFAQ/" + idDelete,
    })
      .then((res) => {
        if (res.data.success == true) {
          toast.success('Course Deleted successfully!', {
            position: toast.POSITION.TOP_RIGHT
          })

          const temp = [...tabledata];

          temp.splice(itemNumber, 1);

          settabledata(temp);

          setShowDelete(false);
        }
      })
      .catch((err) => {
        toast.error('Try again!', {
          position: toast.POSITION.TOP_RIGHT
        })
        setShowDelete(false);
      })


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
            Delete FAQ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <p>Are you sure want to delete FAQ?</p>



        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleCloseDelete}>Close</Button>
          <Button onClick={handleFAQDelete}>Delete </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  const handelUpdateNotesSubmit = (data) => {

    axios.put('https://csci-5709-nodejs.herokuapp.com/api/expert/updateFAQ/' + idUpdateFAQ, {
      question: data.question,
      answer: data.answer
    })
      .then((res) => {
        if (res.data.success == true) {
          toast.success('Course Updated successfully!', {
            position: toast.POSITION.TOP_RIGHT
          })

          settabledata(
            tabledata.map(item =>
              item.idfaq === idUpdateFAQ
                ? res.data.data[0]
                : item
            ))
          setShowUpdateFAQ(false);
        }


      })
      .catch((err) => {
        toast.error('Try again!', {
          position: toast.POSITION.TOP_RIGHT
        })
        setShowUpdateFAQ(false);
      })

  };

  const UpdateFAQModalContent = () => {
    return (
      <Modal

        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={showUpdateFAQ}
        onHide={handleCloseUpdateFAQ}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update FAQ
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <UpdateFAQInput faqId={idUpdateFAQ} handelUpdateNotesSubmit={handelUpdateNotesSubmit} />



        </Modal.Body>

      </Modal>
    )
  }

  
  return (

    <div style={{ background: "aliceblue" , overflow: "auto", maxHeight: "100vh"  }}>

      <Row style={{alignContent: "center" , justifyContent: "center"}}>

        <Col
          lg="12"
          md="12"
          sm="12"
          xs="12"
          className={`right ${classes.right}`}
        >
          <Card className="graphcard1"  style= {{opacity : "1" }} className={classes.background}>
            <h5 className={classes.title}>All Notes

              <Col className='ml-auto' lg={3} md={3}>
                <Form.Group className="mb-3" controlId="search">

                  <Form.Control type="serach" className={classes.input} placeholder="search" onChange={(event) => {
                    setsearchstr(event.target.value);
                    if (event.target.value.length > 2) {
                      setsearcheddata([...tabledata.filter(x => x.question.toLowerCase().includes(event.target.value.toLowerCase()))]);
                    }

                  }} />

                </Form.Group>
              </Col>

              <Col className='ml-auto' lg={3} md={3} >

                <Button className={classes.btnsubmit} onClick={() => toggleTrueFalseAddFAQ()}
                >
                  Add FAQ
                </Button>

              </Col>
              {showFAQ ? <FAQModalContent /> : null}
              {showAddFAQ ? <AddFAQModalContent /> : null}
              {showUpdateFAQ ? <UpdateFAQModalContent /> : null}
              {showDelete ? <DeleteModalContent /> : null}

            </h5>

            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table"  style= {{opacity : "1" }} className={classes.background}>
                <TableHead>
                  <TableRow>

                    <TableCell align="center">Index</TableCell>
                    <TableCell align="center">Question </TableCell>
                    <TableCell align="center">Answer</TableCell>
                    <TableCell align="center">Update</TableCell>
                    <TableCell align="center">Delete</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>


                  {
                    (searchstr && searchstr.length > 2) ?
                      (
                        searcheddata.map((t, itemNumber) => {
                          return (
                            <TableRow key={t.idfaq}>
                              <TableCell component="th" scope="row"  align="center">
                                {itemNumber + 1}
                              </TableCell>

                              <TableCell align="center">{t.question}</TableCell>
                              <TableCell align="center">{t.answer}</TableCell>

                              <TableCell align="center">  <Button className={classes.editButton} style={{ backgroundColor: "#00FF00", borderColor: "#00FF00", hover: "00A300", boxShadow: "0px 2px 3px black" }} onClick={() => toggleTrueFalseUpdateFAQ(t.idfaq)}>
                                <FaPen />
                              </Button>
                              </TableCell>
                              <TableCell align="center"> <Button className={classes.deleteButton} style={{ backgroundColor: "#FF0000", borderColor: "#FF0000", hover: "00A300", boxShadow: "0px 2px 3px black" }} onClick={() => toggleTrueFalseDelete(t.idfaq, itemNumber)}>
                                <AiFillDelete />
                              </Button>
                              </TableCell>

                            </TableRow>
                          )
                        })

                      ) :
                      (
                        tabledata.map((t, itemNumber) => {
                          return (
                            <TableRow key={t.idfaq}>
                              <TableCell component="th" scope="row"  align="center">
                                {itemNumber + 1}
                              </TableCell>
                              <TableCell align="center">{t.question}</TableCell>
                              <TableCell align="center">{t.answer}</TableCell>

                              <TableCell align="center">  <Button className={classes.editButton} style={{ backgroundColor: "#00FF00", borderColor: "#00FF00", hover: "00A300", boxShadow: "0px 2px 3px black" }} onClick={() => toggleTrueFalseUpdateFAQ(t.idfaq)}>
                                <FaPen />
                              </Button>
                              </TableCell>
                              <TableCell align="center"> <Button className={classes.deleteButton} style={{ backgroundColor: "#FF0000", borderColor: "#FF0000", hover: "00A300", boxShadow: "0px 2px 3px black" }} onClick={() => toggleTrueFalseDelete(t.idfaq, itemNumber)}>
                                <AiFillDelete />
                              </Button>
                              </TableCell>

                            </TableRow>
                          )
                        })

                      )
                  }

                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default FAQ

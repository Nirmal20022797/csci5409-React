import React from "react";
import {
  Row,
  Col,
  Card,
  Form
} from "react-bootstrap";
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
      display:'flex',
      alignItems:'center',
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

function UserList(props) {
    const classes = useStyles();
    var linkData=[
        {
          name:' Dashboard',
          to:'/admin/dashboard',
          icon: <CreateIcon />,
          linkActive:false
        },
        {
          name:'Manage User',
          to:'/admin/users',
          icon: <CreateIcon />,
          linkActive:true
        },
        {
          name:' User Statistics ',
          to:'/admin/users/userStatistics',
          icon: <CreateIcon />,
          linkActive:false
        }
        
        
      ]
    return (
        <div  style={{background: "aliceblue"}}>
        <TopNavbar  />

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
      <h5 className={classes.title}>All Users
      <Col className='ml-auto' lg={3} md={3} >
              

                  <Form.Group className="mb-3" controlId="search">
                    <Form.Label>Search here</Form.Label>
                    <Form.Control type="serach" className={classes.input} placeholder="search" />
                  </Form.Group>

            </Col>
      </h5>

      <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
             
                  <TableCell align="center">Index</TableCell>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">See Statistics</TableCell>
                  
                </TableRow>
              </TableHead>
              <TableBody>

                <TableRow key='1'>
                  <TableCell component="th" scope="row">
                   1
                  </TableCell>
                  <TableCell align="center">Nirmal</TableCell>
                  <TableCell align="center">nirbhimani@gmail.com</TableCell>
                  <TableCell align="center">  <Link to='employee/addemp'>
                <Button className={classes.btnsubmit}
                >
                  View
                </Button>

              </Link>
</TableCell>
              
                </TableRow>
                <TableRow key='2'>
                <TableCell component="th" scope="row">
                   2
                  </TableCell>
                  <TableCell align="center">Nikunj</TableCell>
                  <TableCell align="center">nikbhimani@gmail.com</TableCell>
                  <TableCell align="center">Enable, Disble</TableCell>
                 


                </TableRow>
                <TableRow key='3'>
                <TableCell component="th" scope="row">
                   3
                  </TableCell>
                  <TableCell align="center">Mehul</TableCell>
                  <TableCell align="center">bholukatrodiya@gmail.com</TableCell>
                  <TableCell align="center">Enable, Disble</TableCell>
                 


                </TableRow>
                <TableRow key='4'>
                <TableCell component="th" scope="row">
                   4
                  </TableCell>
                  <TableCell align="center">Vishal</TableCell>
                  <TableCell align="center">vishalsorthiya@gmail.com</TableCell>
                  <TableCell align="center">Enable, Disble</TableCell>
                 


                </TableRow>
                <TableRow key='5'>
                <TableCell component="th" scope="row">
                   5
                  </TableCell>
                  <TableCell align="center">Bansi</TableCell>
                  <TableCell align="center">bansipagdal@gmail.com</TableCell>
                  <TableCell align="center">Enable, Disble</TableCell>
                 


                </TableRow>
                <TableRow key='6'>
                <TableCell component="th" scope="row">
                   6
                  </TableCell>
                  <TableCell align="center">kishan</TableCell>
                  <TableCell align="center">kishangajipara@gmail.com</TableCell>
                  <TableCell align="center">Enable, Disble</TableCell>
                 


                </TableRow>
                <TableRow key='7'>
                <TableCell component="th" scope="row">
                   7
                  </TableCell>
                  <TableCell align="center">YYY</TableCell>
                  <TableCell align="center">yyy@gmail.com</TableCell>
                  <TableCell align="center">Enable, Disble</TableCell>
                 


                </TableRow>
                <TableRow key='8'>
                <TableCell component="th" scope="row">
                   8
                  </TableCell>
                  <TableCell align="center">zzz</TableCell>
                  <TableCell align="center">zzz@gmail.com</TableCell>
                  <TableCell align="center">Enable, Disble</TableCell>
                 


                </TableRow>
                <TableRow key='9'>
                <TableCell component="th" scope="row">
                   9
                  </TableCell>
                  <TableCell align="center">qqq</TableCell>
                  <TableCell align="center">qqq@gmail.com</TableCell>
                  <TableCell align="center">Enable, Disble</TableCell>
                 


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

export default UserList

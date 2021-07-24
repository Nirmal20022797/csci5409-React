// Author: 
// Author: Dhrumil Rakesh Shah (B00870600)
import React, { Component, useState } from 'react';
import { Switch,Route } from 'react-router';
import PrivateNavbar from '../Navbar/navbar';
import Sidebar from '../Sidebar/sidebar';
import Course from '../CoursePage/course';
import FAQ from '../FAQ/faq';
import Expert from '../Expert/Expert';
import ProfilePage from '../Profile/profilepage';
import MyCourse from '../MyCourse/mycourses';
import CourseHome from '../MyCourse/coursehome';
import BuyCourse from '../BuyCourse/buycourses';
import CourseDetail from '../BuyCourse/coursedetail';


import CourseExpert from '../../Expert/Courses/Courses';
import ManageUser from '../../Expert/Users/ManageUser';
import NotesExpert from '../../Expert/Notes/Notes';
import FAQExpert from  '../../Expert/FAQ/FAQ';

const Layout = () => {

    const [sidebarexpand,setsidebarexpand] = useState();
    const setstyle = sidebarexpand ? "200px" : "52px";

    return ( 
        <div>
            <div>
                <PrivateNavbar></PrivateNavbar>
            </div>
            <div>
                <div style={{position:"relative"}}  > 
                    <Sidebar sendExpandedvalue={isExpanded=>setsidebarexpand(isExpanded)}></Sidebar>
                </div>
                <div style={{ marginLeft : setstyle }}>
                    <Switch>
                        <Route path="/coursepage" component={Course}>
                            <Course></Course>
                        </Route>
                        <Route path="/faq" component={FAQ}>
                            <FAQ />
                        </Route>
                        <Route path="/expert" component={Expert}>
                            <Expert />
                        </Route>
                        <Route path="/profilepage" component={ProfilePage}>
                            <ProfilePage></ProfilePage>
                        </Route>
                        <Route path="/mycourse" component={MyCourse}>
                            <MyCourse />
                        </Route>
                        <Route path="/coursehome" component={CourseHome}>
                            <CourseHome />
                        </Route>
                        <Route path="/buycourse" component={BuyCourse}>
                            <BuyCourse />
                        </Route>
                        <Route path="/coursedetail" component={CourseDetail}>
                            <CourseDetail />
                        </Route>


                        <Route path="/admin/users" component={ManageUser}>
                            <ManageUser></ManageUser>
                        </Route>
                        <Route path="/admin/courses" component={CourseExpert}>
                            <CourseExpert></CourseExpert>
                        </Route>
                        <Route path="/admin/notes" component={NotesExpert}>
                            <NotesExpert></NotesExpert>
                        </Route>
                        <Route path="/admin/faq" component={FAQExpert}>
                            <FAQExpert></FAQExpert>
                        </Route>
              
                    </Switch>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;
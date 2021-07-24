import React, { Component, useState } from 'react';
import { Switch,Route } from 'react-router';
import PrivateNavbar from '../../Private/Navbar/navbar';
import Sidebar from '../../Private/Sidebar/sidebar';
import Course from '../../Expert/Courses/Courses'; 
import ManageUser from '../../Expert/Users/ManageUser'; 
import FAQ from '../../Expert/FAQ/FAQ';  
import Notes from '../../Expert/Notes/Notes'; 



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
                        <Route path="/admin/users" component={ManageUser}>
                            <ManageUser></ManageUser>
                        </Route>
                        <Route path="/admin/courses" component={Course}>
                            <Course></Course>
                        </Route>
                        <Route path="/admin/notes" component={Notes}>
                            <Notes></Notes>
                        </Route>
                        <Route path="/admin/faq" component={FAQ}>
                            <FAQ></FAQ>
                        </Route>
              
                    </Switch>
                </div>
            </div>
        </div>
     );
}
 
export default Layout;
import React from 'react'
import { BrowserRouter as Route  } from 'react-router-dom';

import ManageUser from './Users/ManageUser';
import Notes from './Notes/Notes';
import Courses from './Courses/Courses';
import FAQ from './FAQ/FAQ';

import '../../css/adminStyle.scss'
function Index({match}) {
  
    return (
        <div className= "admin-pages">
          <Route  path={`${match.url}/users`} exact={true} render={()=>(<Route component={ManageUser} />)} />
          
          <Route  path={`${match.url}/notes`} exact={true} render={()=>(<Route component={Notes} />)} />
         
          <Route  path={`${match.url}/courses`} exact={true} render={()=>(<Route component={Courses} />)} />
          
          <Route  path={`${match.url}/faq`} exact={true} render={()=>(<Route component={FAQ} />)} />
          
        </div>
    )
}

export default Index

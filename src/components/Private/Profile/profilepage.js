import React, { Component } from 'react';
import profileimg from '../../../assests/images/profileimg.jpeg'
import './profilepage.css'

const ProfilePage = () => {
    return ( 
    <div className="container profile-page">
        <div className="row">
            <div className="col-md-3 col-sm-12">
                <div className="profile-img">
                    <img src={profileimg} alt=""></img>
                    <div className="file btn btn-lg btn-primary">
                        Change Photo
                        <input type="file" name="file"/>
                    </div>
                </div>
            </div>
            <div className="col-md-7 col-sm-9">
                <div className="profile-head">
                    <h5>Sarthak Patel</h5>
                    <h6>Web Developer and Designer</h6>
                    <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                    
                </div>
            </div>
            <div className="col-md-2 col-sm-3">
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#edit-modal" >Edit Profile</button>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3">
                <div className="profile-work">
                    <p className="font-weight-bold">Age</p>
                        <span>23</span><br/><br/>
                    <p className="font-weight-bold">SKILLS</p>
                        <span>Web Designer</span><br/>
                        <span>Web Developer</span><br/>
                        <span>Machine Learning</span><br/>
                        <span>Cloud</span><br/>
                        <span>Big Data</span><br/><br/>
                </div>
            </div>
            <div className="col-md-9">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="education-tab" data-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="true">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="work-tab" data-toggle="tab" href="#work" role="tab" aria-controls="work" aria-selected="false">Work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="social-tab" data-toggle="tab" href="#social" role="tab" aria-controls="social" aria-selected="false">Social</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="badges-tab" data-toggle="tab" href="#badges" role="tab" aria-controls="badges" aria-selected="false">Badges</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
                        </li>
                    </ul>
                
                <div className="tab-content education-tab" id="myTabContent">
                    <div className="tab-pane fade show active" id="education" role="tabpanel" aria-labelledby="education-tab">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Degree Name</th>
                                    <th scope="col">University</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Graduation</td>
                                        <td>Indian Institute of Technology</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Graduation</td>
                                        <td>Indian Institute of Technology</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Graduation</td>
                                        <td>Indian Institute of Technology</td>
                                    </tr>
                                </tbody>
                            </table>                                
                    </div>
                    <div className="tab-pane fade " id="work" role="tabpanel" aria-labelledby="work-tab">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Company Name</th>
                                    <th scope="col">Post</th>
                                    <th scope="col">Years</th>
                                </tr>
                            </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Tata Consultancy Services</td>
                                        <td>Jr. Developer</td>
                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Tata Consultancy Services</td>
                                        <td>Jr. Developer</td>
                                        <td>3 Years</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Tata Consultancy Services</td>
                                        <td>Jr. Developer</td>
                                        <td>3 Years</td>
                                    </tr>
                                </tbody>
                            </table>
                    </div>
                    <div className="tab-pane fade " id="social" role="tabpanel" aria-labelledby="social-tab">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Github</td>
                                        <td>Link</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>LinkedIn</td>
                                        <td>Link</td>
                                    </tr>
                                </tbody>
                    </table>
                    </div>
                    <div className="tab-pane fade " id="badges" role="tabpanel" aria-labelledby="badges-tab">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Website</th>
                                    <th scope="col">Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Github</td>
                                        <td>Link</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>LinkedIn</td>
                                        <td>Link</td>
                                    </tr>
                                </tbody>
                    </table>
                    </div>
                    <div className="tab-pane fade " id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Info
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Email</td>
                                        <td>Link</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Phone</td>
                                        <td>Link</td>
                                    </tr>
                                </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
        <div className="modal " id="edit-modal">
        <div className="modal-dialog modal-lg">
            <div className="modal-content">

                <div className="modal-header">
                    <h4 className="modal-title">Edit Profile</h4>
                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                <form>
                <div class="form-group">
                        <h6>Skills</h6>
                        <div className="row">    
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="skill1" placeholder="Skill 1"></input>
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="skill2"  placeholder="Skill 2"></input>                  
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="skill3"  placeholder="Skill 3"></input>                  
                            </div>
                        </div>
                        <div className="row">    
                                
                        <div className="col-md-4">
                                <input type="text" class="form-control" id="skill4" placeholder="Skill 4"></input>
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="skill5"  placeholder="Skill 5"></input>                  
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="skill6"  placeholder="Skill 6"></input>                  
                            </div>
                        </div>
                        </div>
                    <div class="form-group">
                        <h6>Education</h6>
                        <div className="row">    
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="degree1" placeholder="Enter 1st Degree"></input>
                            </div>
                            <div className="col-md-4">
                            <input type="text" class="form-control" id="school1"  placeholder="Enter 1st School"></input>                  
                            </div>
                        </div>
                        <div className="row">    
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="degree2" placeholder="Enter 2nd Degree"></input>
                            </div>
                            <div className="col-md-4">
                            <input type="text" class="form-control" id="school2"  placeholder="Enter 2nd School"></input>                  
                            </div>
                        </div>
                        <div className="row">    
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="degree3" placeholder="Enter 3rd Degree"></input>
                            </div>
                            <div className="col-md-4">
                            <input type="text" class="form-control" id="school3"  placeholder="Enter 3rd School"></input>                  
                            </div>
                        </div>                        
                    </div>

                    <div class="form-group">
                        <h6>Work Experience</h6>
                        <div className="row">    
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="cname1" placeholder="Enter 1st Company"></input>
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="post1"  placeholder="Enter your Post"></input>                  
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="years1"  placeholder="Enter Years of Experience "></input>                  
                            </div>
                        </div>
                        <div className="row">    
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="cname2" placeholder="Enter 2nd Company"></input>
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="post2"  placeholder="Enter your Post"></input>                  
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="years2"  placeholder="Enter Years of Experience"></input>                  
                            </div>
                        </div>
                        <div className="row">    
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="cname3" placeholder="Enter 3rd Company"></input>
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="post3"  placeholder="Enter your Post"></input>                  
                            </div>
                            <div className="col-md-4">
                                <input type="text" class="form-control" id="years3"  placeholder="Enter Years of Experience"></input>                  
                            </div>
                        </div>                        
                    </div>
                    <div class="form-group">
                        <h6>Social</h6>
                        <div className="row">    
                            <div className="col-md-6">
                                <input type="text" class="form-control" id="github" placeholder="Enter your Github Link"></input>
                            </div>
                            <div className="col-md-6">
                                <input type="text" class="form-control" id="linkedin"  placeholder="Enter your Linked Link"></input>                  
                            </div>
                        </div>
                        </div>
                        <div class="form-group">
                        <h6>Contact Details</h6>
                        <div className="row">    
                            <div className="col-md-6">
                                <input type="text" class="form-control" id="phone" placeholder="Enter your Phone Number"></input>
                            </div>
                        </div>
                        </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <input type="submit" className="btn btn-primary" value="Submit" ></input>
                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                </div>
            </div>
        </div>
    </div> 
);
}
 
export default ProfilePage;
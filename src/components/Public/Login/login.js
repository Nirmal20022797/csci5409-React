import Cookies from 'universal-cookie';
import React, { Component , useState  } from 'react';
import loginService from '../../../services/Public/login.service';
import { useHistory } from 'react-router-dom';

const Login = () => {

    const [user,setUser] = useState();
    const history = useHistory();

    function handleChange(e){
        const {id, value} = e.target;
        switch(id){
            case 'email':
                setUser({...user,email: value})
                break;

            case 'password':
                setUser({...user,password: value})
                break;
        }
    }

    function handlelogin(){
        loginService.loginUser(user).then((response)=>{
            if(response.data.success === true && response.data.message === "Logged IN"){
                localStorage.clear();
                localStorage.setItem("isUserLoggedin",true);
                localStorage.setItem("token",response.data.data.token);
                localStorage.setItem('UserId',response.data.data.id);
                localStorage.setItem("Role",response.data.data.role);
                history.push("/profile");
                window.location.reload();    
            }
        }).catch((error) => {
            alert(error.response.data.message);
            history.push("/login");
        });
    }

    return ( <div className="row justify-content-center" >
    <div className="col-xl-3 col-md-4 col-sm-6 col-12">
        <h1 className="text-center mt-5">Login</h1>
        <div className="mt-4">
            <form>
                <div className="form-group">
                    <input type="text" className="form-control" id="email" placeholder="Email" onChange={handleChange}/>
                    <small id="emailHelp" className="form-text text-danger"></small>
                </div>
                <div className="form-group ">
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleChange}/>
                    <small id="passwordHelp" className="form-text text-danger"></small>
                </div>
                <div className="text-center mt-5">
                    <button type="submit" className="btn btn-primary" onClick={handlelogin} placeholder="Submit">Submit</button>
                </div>
                <div className="text-center mt-5 ">
                    <p className="mb-sm-0">Forgot Password ?... <a href="#">Click Here</a></p>
                </div>    
                <div className="text-center">
                    <p>Don't Have an Account ?... <a href="/signup">Register Here</a></p>
                </div>
            </form>
        </div>
    </div>
</div> );
}
 
export default Login;
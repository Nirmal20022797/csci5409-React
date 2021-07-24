import React from 'react';
import { useHistory } from 'react-router-dom';


const PrivateNavbar = () => {
    
    const history = useHistory();


    function handlelogout(){
        localStorage.setItem("isUserLoggedin",false);
        localStorage.setItem("token",null);
        localStorage.setItem('UserId',null);
        localStorage.setItem("Role",null);
        localStorage.clear();
        history.push("/login");
        window.location.reload();
    }

    return ( 
    <nav className="navbar navbar-expand-lg navbar-dark" id="home-navbar" style={{backgroundColor: '#26262c'}}>
        <a className="navbar-brand" href="#">Qlick2Learn</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="#navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
            <div></div>
            <div className="dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color: '#fff'}}>
                My Account
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/profilepage">MyProfile</a>
                    <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#" onClick={handlelogout}>Logout</a>
                    </div>
            </div>
        </div>
    </nav>
    );
          
}
 
export default PrivateNavbar;
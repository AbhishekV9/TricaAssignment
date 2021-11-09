import React from 'react';


function Navbar(){
    return(
        <div className="nav">
            <div><img src="https://s3.ap-south-1.amazonaws.com/staticstaging.tricaequity.co/trica-equity-logo-01.png" alt="trica-logo" /></div>
            <div className="tabs"><p className="active">Jobs </p>&nbsp; &nbsp; &nbsp;   <p>Recruiters</p></div>
            <div className="nav-right"><img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="userlogo"/><p>&nbsp;Hellow, Shankar&nbsp;&nbsp;</p> <i className="fas fa-angle-down"></i></div>
        </div>

    );
}

export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";
import './css/Navbar.css'
const Navbars = () => {
    return (<>
    <div className="list">
        <div className="container">
        <div className="row">
            <div className="col-12 d-none d-lg-block">
                <ul className="list">
                    <li className="list"><NavLink exact to="/" className={isActive =>
    "active" + (!isActive ? " unselected" : "")
  }>Home</NavLink></li>
                    <li class="list"> <NavLink exact activeClassName="active" to="/principal_page">Principal's Page</NavLink></li>
                    <li class="list"> <NavLink to="/administration">Administration</NavLink></li>
                    <li class="list"> <NavLink to="/faculties">Faculties</NavLink></li>
                    <li class="list"> <NavLink to="/admissions">Admissions</NavLink></li>
                    <li class="list"> <NavLink to="/gallery">Gallery</NavLink></li>
                    <li class="list"> <NavLink to="/notices">Notices</NavLink></li>
                    <li class="list"> <NavLink to="/contact_us">Contact_us</NavLink></li>
                </ul>
            </div>
            <div className="col-12 d-lg-none d-block ">


                <div class="navbar navbar-custom">
                    <div class="container">
                        <a class="navbar-brand" href="/">

                        </a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse">☰</button>
                        <div class="navbar-collapse collapse">
                            <ul class="nav navbar-nav">

                                <li class="dropdown menu-large nav-item">
                                </li>
                                <li class="list2"><NavLink className={isActive =>
    "active" + (!isActive ? " active" : "")
  } to="/">Home</NavLink><hr /></li>
                                <li class="list2"> <NavLink to="/principal_page">Principal's Page</NavLink><hr /></li>
                                <li class="list2"> <NavLink to="/administration">Administration</NavLink><hr /></li>
                                <li class="list2"> <NavLink to="/faculties">Faculties</NavLink><hr /></li>
                                <li class="list2"> <NavLink to="/admissions">Admissions</NavLink><hr /></li>
                                <li class="list2"> <NavLink to="/gallery">Gallery</NavLink><hr /></li>
                                <li class="list2"> <NavLink to="/notices">Notices</NavLink><hr /></li>
                                <li class="list2"> <NavLink to="/contact_us">Contact_us</NavLink></li>
                            </ul>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </>)
}

export default Navbars
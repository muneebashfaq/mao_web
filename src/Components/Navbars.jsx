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
                            <li class="list"> <NavLink exact className={isActive =>
                                "active" + (!isActive ? " unselected" : "")
                            } to="/principal_page">Principal's Page</NavLink></li>
                            <li class="list"> <NavLink to="/administration" className={isActive =>
                                "active" + (!isActive ? " unselected" : "")
                            }>Administration</NavLink></li>
                            <li class="list"> <NavLink to="/faculties" className={isActive =>
                                "active" + (!isActive ? " unselected" : "")
                            }>Faculties</NavLink></li>
                            <li class="list"> <NavLink to="/admissions" className={isActive =>
                                "active" + (!isActive ? " unselected" : "")
                            }>Admissions</NavLink></li>
                            <li class="list"> <NavLink to="/gallery" className={isActive =>
                                "active" + (!isActive ? " unselected" : "")
                            }>Gallery</NavLink></li>
                            <li class="list"> <NavLink to="/notices" className={isActive =>
                                "active" + (!isActive ? " unselected" : "")
                            }>Notices</NavLink></li>
                            <li class="list"> <NavLink to="/contact_us" className={isActive =>
                                "active" + (!isActive ? " unselected" : "")
                            }>Contact_us</NavLink></li>
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
                                        <li class="list2"> <NavLink to="/principal_page" className={isActive =>
                                            "active" + (!isActive ? " active" : "")
                                        }>Principal's Page</NavLink><hr /></li>
                                        <li class="list2"> <NavLink to="/administration" className={isActive =>
                                            "active" + (!isActive ? " active" : "")
                                        }>Administration</NavLink><hr /></li>
                                        <li class="list2"> <NavLink to="/faculties" className={isActive =>
                                            "active" + (!isActive ? " active" : "")
                                        }>Faculties</NavLink><hr /></li>
                                        <li class="list2"> <NavLink to="/admissions" className={isActive =>
                                            "active" + (!isActive ? " active" : "")
                                        }>Admissions</NavLink><hr /></li>
                                        <li class="list2"> <NavLink to="/gallery" className={isActive =>
                                            "active" + (!isActive ? " active" : "")
                                        }>Gallery</NavLink><hr /></li>
                                        <li class="list2"> <NavLink to="/notices" className={isActive =>
                                            "active" + (!isActive ? " active" : "")
                                        }>Notices</NavLink><hr /></li>
                                        <li class="list2"> <NavLink to="/contact_us" className={isActive =>
                                            "active" + (!isActive ? " active" : "")
                                        }>Contact_us</NavLink></li>
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
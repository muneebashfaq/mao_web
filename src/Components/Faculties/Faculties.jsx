 import { NavLink } from 'react-router-dom'
import '../css/Faculties.css'
 const Faculties=()=>{
    return(<>  <div className="row">
    <div className="col pt-4">
<h3 className="faculties_heading">ADMINISTRATION</h3>
</div>
</div>
<div className='container'> 
<div className='row row-cols-3'>
<div className='col-md-4 link1'>
    <NavLink to="main_page/Psychology" className="faculties_link" >Department of Applied Psychology</NavLink></div>

    <div className='col-md-4 link2'><NavLink to="main_page/Botany_Biology" className="faculties_link" >Department of Botany + Biology</NavLink></div>

    <div className='col-md-4 link3'><NavLink to="main_page/Chemistry" className="faculties_link" >Department of Chemistry</NavLink></div>

    <div className='col-md-4 link3'>
    <NavLink to="main_page/Commerce" className="faculties_link" >Department of Commerce</NavLink></div>

    <div className='col-md-4 link1'><NavLink to="main_page/Computer-Science" className="faculties_link" >Department of Computer Science</NavLink></div>
    
    <div className='col-md-4 link2'><NavLink to="main_page/Economics" className="faculties_link" >Department of Economics</NavLink></div>

    <div className='col-md-4 link1'>
    <NavLink to="main_page/English" className="faculties_link" >Department of English</NavLink></div>

    <div className='col-md-4 link2'><NavLink to="main_page/Geography" className="faculties_link" >Department of Geography</NavLink></div>

    <div className='col-md-4 link3'><NavLink to="main_page/History" className="faculties_link" >Department of History</NavLink></div>

    
    <div className='col-md-4 link3'>
    <NavLink to="main_page/Islamiat" className="faculties_link" >Department of Islamiat</NavLink></div>

    <div className='col-md-4 link1'><NavLink to="main_page/Mass-Communication" className="faculties_link" >Department of Mass Communication</NavLink></div>
    
    <div className='col-md-4 link2'><NavLink to="main_page/Mathematics" className="faculties_link" >Department of Mathematics</NavLink></div>



    <div className='col-md-4 link3'>
    <NavLink to="main_page/Persian" className="faculties_link" >Department of Persian</NavLink></div>

    <div className='col-md-4 link1'><NavLink to="main_page/Philosophy" className="faculties_link" >Department of Philosophy</NavLink></div>
    
    <div className='col-md-4 link2'><NavLink to="main_page/Physical_Education" className="faculties_link" >Department of Physical Education</NavLink></div>

    <div className='col-md-4 link1'>
    <NavLink to="main_page/Physics" className="faculties_link" >Department of Physics</NavLink></div>

    <div className='col-md-4 link2'><NavLink to="main_page/Political_Science" className="faculties_link" >Department of Political Science</NavLink></div>

    <div className='col-md-4 link3'><NavLink to="main_page/Punjabi" className="faculties_link" >Department of Punjabi</NavLink></div>

    <div className='col-md-4 link3'>
    <NavLink to="main_page/Sociology" className="faculties_link" >Department of Sociology</NavLink></div>

    <div className='col-md-4 link1'><NavLink to="main_page/Statistics" className="faculties_link" >Department of Statistics</NavLink></div>

    <div className='col-md-4 link2'><NavLink to="main_page/Urdu" className="faculties_link" >Department of Urdu</NavLink></div>
    
    <div className='col-md-4 link3'><NavLink to="main_page/Zoology" className="faculties_link" >Department of Zoology</NavLink></div>
    
    
  
    </div>
   
    </div>
    </>)
}

export default Faculties
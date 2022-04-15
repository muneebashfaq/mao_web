import { NavLink } from 'react-router-dom'
import './css/Footer.css'
const Footer=()=>{
    return(<>
    <div className='container-fluid'>
   <div className='row'>
       <div className='col-12 footer'>
           <div className='upper_part'> 
           <ul className='footer'>
               <li className='footer'><NavLink to='/society'>Societies</NavLink></li>
               <li className='footer'><NavLink to='/M.A.O Telephone '>M.A.O Telephone </NavLink></li>
               <li className='footer'><NavLink to='/Downloads'>Downloads</NavLink></li>
               <li className='footer'><NavLink to='/M.A.O Emails  '>M.A.O Emails</NavLink></li>
           </ul>
           </div>
      
       </div>
   </div>
   <div className='row'>
   <div className='col-12 footer2'>
       © Copyright 2022- Govt. M.A.O Graduate College, Lahore. All Rights Reserved,  
       </div>
   </div>
   </div>
    </>)
}
export default Footer
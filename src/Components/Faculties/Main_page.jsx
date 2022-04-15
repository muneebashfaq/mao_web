import { useParams } from "react-router"
import Psychology from "./Psychology"
import Botany_Biology from "./Botany_Biology"
import { useEffect, useState } from "react"
import '../css/Faculties.css'

import {useNavigate} from 'react-router-dom';
import back_arrow from '../Pictures/back_arrow.png'
const Main_page=()=>{
    const{name} = useParams()
    const [state,updatestate]=  useState([])
    const history = useNavigate();
  useEffect(() => {
    if(name === "Psychology"){
     updatestate(Psychology)
    }else if( name === "Botany_Biology"){
      updatestate(Botany_Biology)
    }
  }, )
  const handle=()=>{
    history("/faculties")
  }
  
   return(<>
   <div className="container-fluid">
     <div className="row">
       <div className="col-12 pt-3">
         <h3 className="faculties_heading">Department Of {name}</h3>
<img src={back_arrow} onClick={handle} className="back_arrow"/>
       </div>
     </div>
  <div className="row">
<div className="col-md-8">
{state.map((val)=>{
      return(<> <div className='row'>
    <div className='col-md-4'  >
<img src={val.src} className="faculties"/>
    </div>
    <div className='col-lg-8  align-self-center'>
<h4 className='faculties'>{val.name}</h4>
<h6 className="faculties">{val.position}</h6>
    </div>
</div>
<hr/>
      </>)
  })}
</div>

  </div>
  </div> 
   </>)

    
    
}

export default Main_page
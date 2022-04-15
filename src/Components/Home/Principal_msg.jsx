import react from 'react'
import  '../css/Home.css'
import principle from '../Pictures/principle.jpeg'
import { NavLink } from 'react-router-dom'
const Principal_msg=()=>{
    return(<>
        <h3 className='home'>Message By The Principal</h3>
 <div className="row">
 <div className="col-xl-4 offset-xl-0 offset-lg-4 offset-md-3 offset-sm-3">
 <img src={principle} className="home"/>
  <div className="name">
      <h6>Prof. Dr. Shabbir Ahmad Rana
  Principal</h6>
  </div>
 </div>
 <div className="col-xl-8">
<p>
Dear Students<br/>
I welcome you on behalf of my colleagues and myself at Govt. M.A.O. College Lahore. Govt. M.A.O. College stands towering amongst the institutions of Punjab in providing education of a high standard at Intermediate (F.A, F.Sc., I.Com, ICS, BS(H) and Post Graduate levels. This college is offering its students opportunities for overall development amidst a disciplined and peaceful environment in multiple phases. We have a qualified faculty with 20 Ph.D's and 43 M.Phil's imparting knowledge in different disciplines at most affordable rates.Govt. M.A.O. College Lahore adjacent to the Civil Secretariat with a dedicated Metro Bus and Orange Train Stations is a prestigious seat of learning in disciplines of Arts, 
</p>
</div>
</div>
<div className="row">
<div className="col-12">
    <p>Computer Science, Commerce and Pure Sciences. It was founded in 1933 by Anjuman-e-Islamia at Amritsar. Professor S. Mercado was appointed as the first Principal of the College after its establishment in 1933. After partition in 1947 the college was shifted to Lahore to its present building, which belonged to Sanatan Dharana (SD) College, established in 1916...<NavLink to="/principal_page" style={{"color":"blue"}}>Read More</NavLink></p>
</div>

</div>
    </>)
}
export default Principal_msg
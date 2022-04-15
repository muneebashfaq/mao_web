
import '../css/Home.css'
const Lower_section2 = () => {
  return (<>
    <div className="col-md-4 lower_secion">
      <h6 className='home'>Faculties</h6>
      <ul className='lower_section'>
        <li className='lower_section'><a href=''>Science and Technology</a></li>
        <li className='lower_section'><a href=''>Arts & Social Sciences</a></li>
        <li className='lower_section'><a href=''>Languages, Islamic & Oriental Learning</a></li>
        
      </ul>
    </div>
    <div className="col-sm-4  lower_secion"> <h6 className='home'>Examinations</h6>
      <li className='lower_section'><a href=''>Examination Regulations</a></li>
      <li className='lower_section'><a href=''>Exams. Date Sheet
      </a></li>
      <li className='lower_section'><a href=''>Examinations & Results</a></li>
      <li className='lower_section'><a href=''>Affiliations</a></li>
    </div>
    <div className="col-sm-4 offset-xl-0 offset-lg-0 offset-md-0 offset-sm-4 lower_secion"> <h6 className='home'>Library</h6>
      <li className='lower_section'><a href=''>Digital Library</a></li>
      
    </div>
  </>)
}

export default Lower_section2
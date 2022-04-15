
import '../css/Home.css'
const Lower_section = () => {
  return (<>
    <div className="col-md-4 lower_secion">
      <h6 className='home'>About Us</h6>
      <ul className='lower_section'>
        <li className='lower_section'><a href=''>An Overview</a></li>
        <li className='lower_section'><a href=''>Vision</a></li>
        <li className='lower_section'><a href=''>Mission Statement</a></li>
        <li className='lower_section'><a href=''>Administration</a></li>
        <li className='lower_section'><a href=''>M.A.O Offices</a></li>
        <li className='lower_section'><a href=''>History
        </a></li>
      </ul>
    </div>
    <div className="col-sm-4  lower_secion"> <h6 className='home'>Admissions</h6>
      <li className='lower_section'><a href=''>Intermediate</a></li>
      <li className='lower_section'><a href=''>BS(H) 4 Years Program
      </a></li>
      <li className='lower_section'><a href=''>M.A./M.Sc</a></li>
    </div>
    <div className="col-sm-4 offset-xl-0 offset-lg-0 offset-md-0 offset-sm-3 lower_secion"> <h6 className='home'>Life @ M.A.O</h6>
      <li className='lower_section'><a href=''>Scholarships/Fin.Aid</a></li>
      <li className='lower_section'><a href=''>Societies
      </a></li>
    </div>
  </>)
}

export default Lower_section
import '../css/Admissions.css'
import list from "../Pictures/Admissions/1st_merit_bs_final.pdf"
import open from "../Pictures/Admissions/Open Merit 2021.jpeg"
import new_icon from "../css/news_icon.png"
import { padding } from '@mui/system'
const Admissions = () => {
    return (<>

        <div className='row'>
            <div className='col-12'>
                <h3 className='admission_heading mt-3'>BS MERIT LISTS (MORNING)</h3>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'><a href={list} className='admission_links'><h5 className='admission_links'>View BS Detailed First Merit List<img src={new_icon} style={{ height: "25px", marginLeft: "10px" }} /></h5></a></div>
                        <div className='col-md-4'><a href={open} target="__blank" className='admission_links'><h5 className='admission_links'>View 1st BS Open Merit 2021</h5></a></div>

                        <div className='col-md-4'><a href='' className='admission_links'><h5 className='admission_links'>View 1st BS Open Merit 2021</h5></a></div>

                    </div>
                    <div className='row'>
                        <div className='col-md-4'><a href={list} className='admission_links'><h5 className='admission_links'>View 3rd BS Merit 2021</h5></a></div>

                    </div>
                </div>

            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <h3 className='admission_heading mt-3'>MERIT LISTS BS (EVENING)</h3>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'><a href="" className='admission_links'><h5 className='admission_links'>View BS Evening 1st Merit List 2021<img src={new_icon} style={{ height: "25px", marginLeft: "10px" }} /></h5></a></div>
                        <div className='col-md-4'><a href="" target="__blank" className='admission_links'><h5 className='admission_links'>View BS Evening 2nd Merit List 2021</h5></a></div> </div>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <h3 className='admission_heading mt-3'>INTERMEDIATE MERIT LISTS (MORNING)</h3>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'><a href="" className='admission_links'><h5 className='admission_links'>View Inter First Morning Merit List 2021<img src={new_icon} style={{ height: "25px", marginLeft: "10px" }} /></h5></a></div>
                        <div className='col-md-4'><a href="" target="__blank" className='admission_links'><h5 className='admission_links'>View Inter 2nd Morning Merit List 2021</h5></a></div> </div>
                </div>
            </div>
        </div>


        <div className='row'>
            <div className='col-12'>
                <h3 className='admission_heading mt-3'>INTERMEDIATE MERIT LISTS (EVENING)</h3>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-4'><a href="" className='admission_links'><h5 className='admission_links'>View Inter 1st Evening Merit List 2021<img src={new_icon} style={{ height: "25px", marginLeft: "10px" }} /></h5></a></div>
                       </div>
                </div>
            </div>
        </div>

        <div className='row'>
            <div className='col-12'>
                <h3 className='admission_heading mt-3'>ADMISSION</h3>
                <div className='row'>
                        <div className='col-md-4'><a href={list} className='admission_links'><h5 className='admission_links'>View Prospectus 2021<img src={new_icon} style={{ height: "25px", marginLeft: "10px" }} /></h5></a></div>
                        <div className='col-md-4'><a href={open} target="__blank" className='admission_links'><h5 className='admission_links'>Revised BS Schedule</h5></a></div>

                        <div className='col-md-4'><a href='' className='admission_links'><h5 className='admission_links'>Revised Inter Schedule</h5></a></div>
                    </div>
                    <div className='row'>
                        <ul>
                            <li className='admission'>Intermediate (Morning)<span style={{color:"red"}}> Admission Closed (Last Date : 01-11-2021)</span> To Download Prospectus<a href=''>(Click Here)</a> </li>
                            <li className='admission'>Intermediate (Evening)<span style={{color:"red"}}> Admission Closed (Last Date : 04-11-2021)</span> To Download Prospectus<a href=''>(Click Here)</a> </li>
                            <li className='admission'>BS (H) 4 Years Program Morning<span style={{color:"red"}}> Admission Closed (Last Date : 30-10-2021)</span> To Download Prospectus<a href=''>(Click Here)</a> </li>
                            <li className='admission'>BS (H) 4 Years Program Evening <span style={{color:"red"}}>Admission Closed (Last Date : 03-11-2021)</span> To Download Prospectus<a href=''>(Click Here)</a> </li>
                            <li className='admission'>M.A/ M.Sc.<span style={{color:"red"}}>ADMISSIONS CLOSED</span>  </li>
                
                        </ul>
                        </div>
            </div>
        </div>

    </>)
}

export default Admissions
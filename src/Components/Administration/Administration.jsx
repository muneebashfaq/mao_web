import '../css/Administration.css'
import Array from './Array'


const Administration=()=>{
    return(<>
    <div className="row">
    <div className="col pt-4">
<h3 className="administration_heading">ADMINISTRATION</h3>
    </div>
</div>
{Array.map((val)=>{
   return( <div className='row'>
    <div className='col-md-2'  >
<img src={val.src} className="administraion"/>
    </div>
    <div className='col-10 col-lg-9  align-self-center'>
<h4 className='administration'>{val.name}</h4>
<h6 className="administraion">{val.position}</h6>
    </div>
</div>)
})}


    </>)
}

export default Administration
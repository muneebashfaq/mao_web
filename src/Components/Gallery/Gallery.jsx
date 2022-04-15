import '../css/Gallery.css'
import gallery1 from '../Pictures/Gallery/gallery1.jpeg'
import gallery2 from '../Pictures/Gallery/gallery2.jpeg'
import gallery3 from '../Pictures/Gallery/gallery3.jpeg'
import gallery4 from '../Pictures/Gallery/gallery4.jpeg'
import gallery5 from '../Pictures/Gallery/gallery5.jpeg'


const Gallery=()=>{
    return(<>
  <div className='row'>
            <div className='col-12'>
                <h3 className='gallery_heading mt-3'>Gallery</h3>
                </div>

                </div>
                <div className="row ">
                    <div className='container-fluid'>
                        <h4>Clean And Green Paksitan</h4>
                <div class="responsive">
  <div class="gallery">
    <a target="_blank" href={gallery1}>
      <img src={gallery1} alt="Cinque Terre" width="600" height="400"/>
    </a>
    
  </div>
</div>


<div class="responsive">
  <div class="gallery">
    <a target="_blank" href={gallery2}>
      <img src={gallery2} alt="Forest" width="600" height="400"/>
    </a>
    
  </div>
</div>

<div class="responsive">
  <div class="gallery">
    <a target="_blank" href={gallery3}>
      <img src={gallery3} alt="Northern Lights" width="600" height="400"/>
    </a>
                </div>
                </div>
                <div class="responsive">
  <div class="gallery">
    <a target="_blank" href={gallery4}>
      <img src={gallery4} alt="Northern Lights" width="600" height="400"/>
    </a>
                </div>
                </div>

      

                </div>
                </div>
                <div className="row">
                    <div className='container-fluid'>
                    <div class="responsive">
  <div class="gallery">
    <a target="_blank" href={gallery5}>
      <img src={gallery5} alt="Northern Lights" width="600" height="400"/>
    </a>
                </div>
                </div>
                        </div>
                    </div>
    </>)
}

export default Gallery
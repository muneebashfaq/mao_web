import React, { useEffect, useState } from "react"
import banner from './Pictures/banner.jpg'
import banner2 from './Pictures/banner2.jpeg'
import './css/slider.css'
 const Sliders = ()=>{
 return<>
<div className="row"> 
<div className="col-12">
<div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 h-20" src={banner} alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100 h-20" src={banner2} alt="Second slide"/>
    </div>
  </div>
</div>
</div>
</div>
 </>
 }

 export default Sliders
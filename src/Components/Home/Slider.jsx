import slider1 from '../Pictures/Slider/slider1.jpg'
import slider2 from '../Pictures/Slider/slider2.jpeg'
import slider3 from '../Pictures/Slider/slider3.jpeg'
import slider4 from '../Pictures/Slider/slider4.jpeg'
import slider5 from '../Pictures/Slider/slider5.jpeg'
import  '../css/Home.css'
const Slider=()=>{
    return(<>
     <div id="carouselExampleIndicators" class="carousel slide slider" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={slider1} alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider2} alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider3} alt="Third slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider4} alt="forth slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={slider5} alt="fiveth slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
  </div>
    </>)
}

export default Slider
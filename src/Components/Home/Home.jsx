import React from "react";
import  '../css/Home.css'
import Principal_msg from "./Principal_msg";
import Side_news from "./Side_news";
import Lower_section from "./Lower_section"
import Lower_section2 from "./Lower_section2"
import FacebookIcon from '@mui/icons-material/Facebook';
const Home=()=>{
    return<>
    <div className="main_body">
<div className="container">
<div className="row main_body">
    <div className="col-lg-9 ">
<Principal_msg/>
<div className="row ">
  <Lower_section/>
</div>
<div className="row ">
  <Lower_section2/>
</div>


        </div>          
    <div className="col-lg-3 ">
  <Side_news/>
  <div className="row">
    <div className="col-7 ml-auto facebook">Follow Us:<a href="https://www.facebook.com/groups/384299336373035/?ref=share&_rdc=2&_rdr" target="__blank"><FacebookIcon/></a></div>

</div>
    </div>
</div>
</div>
</div>
    </>
}

export default Home
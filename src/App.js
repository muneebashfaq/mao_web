import Sliders from './Components/Sliders';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home';
import Navbars from './Components/Navbars';
import P_page from './Components/Principal_page/P_page';
import Footer from './Components/Footer';
import Administration from './Components/Administration/Administration'
import Faculties from './Components/Faculties/Faculties';
import Admissions from './Components/Admissions/Admissions';
import Gallery from './Components/Gallery/Gallery';
import Notices from './Components/Notices/Notices';
import Contact from './Components/Contact/Contact';
import Main_page from './Components/Faculties/Main_page';

function App() {
  return (
  <>
  <div className='container-fluid'>
    <Sliders/>
  <Navbars/>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/principal_page' element={<P_page/>}/>
    <Route exact path='/administration' element={<Administration/>}/>
    <Route exact path='/faculties' element={<Faculties/>}/>
    <Route exact path='/admissions' element={<Admissions/>}/>
    <Route exact path='/gallery' element={<Gallery/>}/>
    <Route exact path='/notices' element={<Notices/>}/>
    <Route exact path='/contact_us' element={<Contact/>}/>
    <Route exact path='/faculties/main_page/:name' element={<Main_page/>}/>





    

  </Routes>
 <Footer/>
  </div>
  </>
  );
}

export default App;

import react,{ useState } from "react"
import '../css/Principal_page.css'
import principle from '../Pictures/principle2.jpeg'
const P_page=()=>{
    return(<>
<div className="row">
    <div className="col pt-4">
<h3 className="principal_heading">PRINCIPAL'S PAGE</h3>
    </div>
</div>
<div className="row">
    <div className="col pt-4">
<h7 className="principal_heading">MESSAGE BY THE PRINCIPAL</h7>
    </div>
</div>
<div className="row">
    <div className="col ">
    <img src={principle} className="principal"/>
  <p className="">
  Dear Students
I welcome you on behalf of my colleagues and myself at Govt. M.A.O. College Lahore. Govt. M.A.O. College stands towering amongst the institutions of Punjab in providing education of a high standard at Intermediate (F.A, F.Sc., I.Com, ICS, BS(H)) and Post Graduate levels. This college is offering its students opportunities for overall development amidst a disciplined and peaceful environment in multiple phases. We have a qualified faculty with 20 Ph.D’s and 43 M.Phil’s imparting knowledge in different disciplines at most affordable rates.Govt. M.A.O. College, Lahore adjacent to the Civil Secretariat with a dedicated Metro Bus and Orange Line Stations is a prestigious seat of learning in disciplines of Arts, Computer Science, Commerce and Pure Sciences. It was founded in 1933 by Anjuman-e-Islamia at Amritsar.<br/>
 Professor S. Mercado was appointed as the first Principal of the College after its establishment in 1933. After partition in 1947 the college was shifted to Lahore to its present building, which belonged to Sanatan Dharana (SD) College, established in 1916. The likes of Dr. M.D Taseer, Prof. Dr. Dilawar Hussain and Prof. Karamat Hussain Jaffari have served the college as its Principals. <br/>
 Govt. M.A.O. College Lahore has produced renowned scholars and distinguished teachers, judges, professional men, politicians, scientists and sportsmen. They include Akhtar Hussain Raipuri, Faiz Ahmad Faiz, Nazir Ahmad Qureshi, Dr. Imdad Hussain, Sahibzada Mahmood-ul-Zafar, Dr. M.A. Azeem, Arif Abdul Mateen, Dr. Khalid Aftab, Amjad Islam Amjad, Atta-ul-Haq Qasmi, Saqlain Mushtaq, Taufeeq Umer, Saeed Ajmal, Sohail Fazal, Muhammad Saqlain, Naveed Aalam, Salman Akbar and the list goes on. <br/>
During Eighty Six years of its history the college has left indelible imprints in every phase of human life. The Alumni of the college has won laurels not only for their Alma mater but also served the country in different capacities in almost all spheres of life. The college has enviable atmosphere not only conducive to the academic pursuits but also fruitful for Co-Curricular and Extra-Curricular Activities with emphasis on Sports, Debates and Dramatics. There are many literary, science and cultural societies contributing to the balanced personality development of the future generation of Pakistan. The college thus provides ample opportunities to the students to discover themselves, realize their potentials and prepare for the Challenges of life.<br/>
Govt. M.A.O. College offers BS (Hons.) Programme in twelve disciplines and M.A classes in six disciplines. M.A.O College has co-education and provides a congenial atmosphere to all the students. At Post Graduate Levels it offers classes in English, Economics, Mathematics, Mass Communication, Psychology, and Urdu. At BS (Hons.) levels it offers classes in the disciplines of Chemistry, Computer Science, Mathematics, English, Economics, Physics, Mass Communication, Botany, Political Science & Psychology.
  </p>
 </div>
    </div>
    <div className="row">
    <div class="col ">
    <h6 className="principal_name">Prof. Dr. Shabbir Ahmad Rana</h6>
    <p className="principal_name">Principal</p>
    </div>
    </div>
    </>)
}

export default P_page
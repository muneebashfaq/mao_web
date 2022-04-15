import NewspaperIcon from '@mui/icons-material/Newspaper';
import '../css/Home.css'
import Slider from '../Home/Slider'
import Media_talks from './Media_talks';
import add from '../Pictures/News_data/add.jpg'

const Side_news = () => {
    return (<>
        <h2><NewspaperIcon />MAO NEWS</h2>
        <ul className='news'>
            <li className="news"> Admissions Open for BS 5TH Semester (Replacement for M.A / M.Sc) 2021-2022(<a href={add} download>Click Here)</a></li><br/>
            <li className="news"> Schedule Of Admission for Inter Part-1(<a href='../Pictures/principle.jpeg' download>Click Here)</a></li><br/>
            <li className="news"> Parent Teacher Meeting (INtermediate) to be held on 9 March 2022 at 9 a.m. to 1 p.m.</li><br/>
            <li className="news">Punjab Spring Festival from 14 March(<a href='../Pictures/principle.jpeg' download>Click Here)</a></li><br/>
            <li className="news">47th Annual Athletics Meet is going to held on 19 March</li>
        </ul>

        <div>
           
<Slider/>
<Media_talks/>
        </div>
    </>)
}

export default Side_news
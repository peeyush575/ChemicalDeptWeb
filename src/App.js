import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './assets/App.css';
import './assets/variables.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import FooterComp from './components/FooterComp';
import Home from './components/Home'
import Faq from "./components/Faq";
import RegularFaculty from "./components/RegularFaculty";
import ScholarsResi from "./components/ScholarsResi";
import TechStaff from "./components/TechStaff";
import AdminStaff from "./components/AdminStaff";
import UgAcads from "./components/UgAcads";
import UgPlacement from "./components/UgPlacement";
import PgAcads from "./components/PgAcads";
import PgPlacement from "./components/PgPlacement";
import DocAcads from "./components/DocAcads";
import PhDPlacement from "./components/PhDPlacement";
import OnProj from "./components/OnProj";
import CompProj from "./components/CompProj";
import SponsColab from "./components/SponsColab";
import Webinar from "./components/Webinar";
import ChaitanyaTalk from "./components/talks/Chaitanya_talk";
import MandalSandeepTalk from "./components/talks/Mandal_Sandeep_talk";
import AakashTalk from "./components/talks/AakashTalk";
import ApratimTalk from "./components/talks/ApratimTalk";
import ManishaTalk from "./components/talks/Manisha_talk";
import RajdipTalk from "./components/talks/Rajdip_talk";
import MasaruTalk from "./components/talks/Masaru_talk";
import SarveshTalk from "./components/talks/Sarvesh_talk";
import JessicaTalk from "./components/talks/Jessica_talk";
import RajaramTalk from "./components/talks/Rajaram_talk";
import RavindraTalk from "./components/talks/Ravindra_talk";
import NachiketTalk from "./components/talks/Nachiket_talk";
import JhumpaTalk from "./components/talks/Jhumpa_talk";
import NaveenTalk from "./components/talks/Naveen_talk";
import SuryaTalk from "./components/talks/Surya_talk";
import PradipTalk from "./components/talks/Pradip_talk";
import GuruswamyTalk from "./components/talks/Guruswamy_talk";
import YamunaTalk from "./components/talks/Yamuna_talk";
import CorpRelation from "./components/CorpRelation";
import Donation from "./components/Donation";
import ResearchLabs from "./components/ResearchLabs";
import Newsletter from "./components/Newsletter";
import Achievements from "./components/Achievements";
import InfoForCompany from "./components/InfoForCompany";
import Recruiters from "./components/Recruiters";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <>
      <Router>
          <ScrollToTop />
          <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/regularFaculty" element={<RegularFaculty/>}/>
            <Route exact path="/scholarsResidence" element={<ScholarsResi/>}/>
            <Route exact path="/technicalStaff" element={<TechStaff/>}/>
            <Route exact path="/adminStaff" element={<AdminStaff/>}/>
            <Route exact path="/ugAcads" element={<UgAcads/>}/>
            <Route exact path="/ugPlacement" element={<UgPlacement/>}/>
            <Route exact path="/pgAcads" element={<PgAcads/>}/>
            <Route exact path="/pgPlacement" element={<PgPlacement/>}/>
            <Route exact path="/doctoralAcads" element={<DocAcads/>}/>
            <Route exact path="/phDPlacement" element={<PhDPlacement/>}/>
            <Route exact path="/currProjects" element={<OnProj/>}/>
            <Route exact path="/completedProjects" element={<CompProj/>}/>
            <Route exact path="/sponsorsColabs" element={<SponsColab/>}/>
            <Route exact path="/webinars" element={<Webinar/>}/>
            <Route exact path="/chaitanya-talk" element={<ChaitanyaTalk/>}/>
            <Route exact path="/mandalSandeep-talk" element={<MandalSandeepTalk/>}/>
            <Route exact path="/aakash-talk" element={<AakashTalk/>}/>
            <Route exact path="/apratim-talk" element={<ApratimTalk/>}/>
            <Route exact path="/manisha-talk" element={<ManishaTalk/>}/>
            <Route exact path="/rajdip-talk" element={<RajdipTalk/>}/>
            <Route exact path="/masaru-talk" element={<MasaruTalk/>}/>
            <Route exact path="/sarvesh-talk" element={<SarveshTalk/>}/>
            <Route exact path="/jessica-talk" element={<JessicaTalk/>}/>
            <Route exact path="/rajaram-talk" element={<RajaramTalk/>}/>
            <Route exact path="/ravindra-talk" element={<RavindraTalk/>}/>
            <Route exact path="/nachiket-talk" element={<NachiketTalk/>}/>
            <Route exact path="/naveen-talk" element={<NaveenTalk/>}/>
            <Route exact path="/spc-talk" element={<SuryaTalk/>}/>
            <Route exact path="/pradip-talk" element={<PradipTalk/>}/>
            <Route exact path="/guruswamy-talk" element={<GuruswamyTalk/>}/>
            <Route exact path="/yamuna-talk" element={<YamunaTalk/>}/>
            <Route exact path="/jhumpa-talk" element={<JhumpaTalk/>}/>
            <Route exact path="/corpBrochure" element={<CorpRelation/>}/>
            <Route exact path="/researchArea" element={<ResearchLabs/>}/>
            <Route exact path="/newsLetter" element={<Newsletter/>}/>
            <Route exact path="/achievements" element={<Achievements/>}/>
            <Route exact path="/donate" element={<Donation/>}/>
            <Route exact path="/infoComp" element={<InfoForCompany/>}/>
            <Route exact path="/ourRecs" element={<Recruiters/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/faq" element={<Faq/>}/>
          </Routes>
          <FooterComp/>
        </Router> 
    </>
  );
}
export default App;
document.addEventListener('DOMContentLoaded', () => {
  // "use strict";

  /**
   * Mobile nav toggle
   */
  const mobileNavToogle = document.querySelector('.mobile-nav-toggle');
  if (mobileNavToogle) {
    mobileNavToogle.addEventListener('click', function(event) {
      event.preventDefault();

      document.querySelector('body').classList.toggle('mobile-nav-active');

      this.classList.toggle('bi-list');
      this.classList.toggle('bi-x');
    });
  }

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

});

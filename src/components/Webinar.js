import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';

export default function Webinar() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Webinars & Talks</h2>
                </div>
            </div>
            <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/chaitanya-talk"><h4>Process Safety in Hydrogen Projects</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Mr. Gottimukkala Chaitanya</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Oct 19, 2022</p>
                                    <p style={{textAlign:'justify'}}>Abstract: This talk will cover the fundamentals of process safety and hazard analysis throughput a facility lifecycle, and design categories that must be considered. A case study on a past incident involving hydrogen will be discussed...</p><hr></hr>
                                    <Link aria-current="page" to="/chaitanya-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/mandalSandeep-talk"><h4>Role of Chemical Engineering in the Department of Atomic Energy</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speakers: Prof. D. Mandal & Dr. Sandeep K.C.</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Sept 1, 2022</p>
                                    <p style={{textAlign:'justify'}}>Speakers: Prof. D. Mandal, Head, Alkali Material & Metal Division, Bhabha Atomic Research Centre, Trombay, Mumbai, and Dr. Sandeep K.C., Senior Scientist, Heavy Water Division, Bhabha Atomic Research Centre, Trombay, Mumbai...</p><hr></hr>
                                    <Link aria-current="page" to="/mandalSandeep-talk" ><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/aakash-talk" ><h4>Correlating the properties and structure of semicrystalline polymers: Case of regenerated cellulose fibers</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. Aakash Sharma</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> June 30, 2022</p>
                                    <p style={{textAlign:'justify'}}>Abstract: Semicrystalline polymers have complex microstructures ordered across length scales. Spinning these polymers into fibres from melt or solution adds molecular orientation. Microstructure controls polymer properties...</p><hr></hr>
                                    <Link aria-current="page" to="/aakash-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/manisha-talk"><h4>Energy from Blast Furnace Gas: Role of Chemical Kinetics for the Development of a Fuel-Flexible Burner</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. Manisha Padwal</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> June 1, 2022</p>
                                    <p style={{textAlign:'justify'}}>Abstract: Blast furnace gas (BFG) is an important residual gas formed in the blast furnace in steel making processes. They are industrially important gases because of their calorific value and the large volumes produced...</p><hr></hr>
                                    <Link aria-current="page" to="/manisha-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/rajdip-talk"><h4>On the Detection and Removal of pollutants from water: Nanoparticles and Hybrids to the Rescue</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. Rajdip Bandyopadhyaya</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> May 20, 2022</p>
                                    <p style={{textAlign:'justify'}}>Abstract: Taking recourse to nanoparticles and their hybrids in making more functionally efficient materials for sustainable solutions is a modern theme across several disciplines of science and engineering... </p><hr></hr>
                                    <Link aria-current="page" to="/rajdip-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/masaru-talk"><h4>Rapidly-growing Seawater Desalination and the Challenges to New Technical Issues</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. Masaru Kurihara</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> May 17, 2022</p>
                                    <p style={{textAlign:'justify'}}>Abstract: In this seminar, Dr. Masaru Kurihara will provide an overview of brine mining to obtain precious materials from the brine of SWRO. This plan will be connected to water and green hydrogen for a sustainable future...</p><hr></hr>
                                    <Link aria-current="page" to="/masaru-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/sarvesh-talk"><h4>Engineered Living Materials and Smart Microdevices</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. Sarvesh Srivastava</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Mar 11, 2022</p>
                                    <p style={{textAlign:'justify'}}>Abstract: Over the past two decades, rapid advances in science and engineering have enabled us to manipulate matter down to the atomic level. Today, there is a diverse range of nano/microfabrication techniques capable of producing small-scale functional materials and devices...</p><hr></hr>
                                    <Link aria-current="page" to="/sarvesh-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/jessica-talk"><h4>Patent Training</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. Jessica Zimberlin Eastman</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Oct 10, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: In this seminar, Dr. Jessica Eastman will provide an overview of patent system from a global perspective with some focus on the US patent system. Topics that will be addressed include ... </p><hr></hr>
                                    <Link aria-current="page" to="/jessica-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/rajaram-talk"><h4>Thermal Encapsulation of the Functional Materials and their Device Applications</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. Rajaram K Nagarale</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Sept 29, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: Functionalisation of the electrode material without compromising their electrochemical properties is a challenging task. Covalent functionalisation increases the ohmic resistance of the system and hence poor performance...</p><hr></hr>
                                    <Link aria-current="page" to="/rajaram-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/ravindra-talk"><h4>Whither AI: Artificial or Augmented Intelligence? Can we do more?</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Prof. Ravindra Gudi</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Augt 28, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: AI & ML based approaches to reconstruction & prediction, with a view to assist decision making, have re-emerged with a stronger potential and application spectrum. These approaches have relied quite heavily on the power of modelling tools, both statistical as well as other advanced AI based tools...</p><hr></hr>
                                    <Link aria-current="page" to="/ravindra-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/nachiket-talk"><h4>Materials pathfinding for electronics applications</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. Nachiket Raravikar</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> July 17, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: This talk aims at describing the nature of industrial research from the perspective of a Materials Scientist. Industrial or “applied” research is often called as ‘Pathfinding’, which falls approximately between academic or early-stage research, and product development or high-volume manufacturing (HVM)...</p><hr></hr>
                                    <Link aria-current="page" to="/nachiket-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/jhumpa-talk"><h4>Phase Equilibria Using Monte Carlo Simulation Techniques</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Prof. Jhumpa Adhikari</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Apr 4, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: Understanding phase behaviour is crucial for the design and modelling of separation processes. The present seminar includes a cost-effective and powerful tool to study this phase behaviour study for pure substances and for mixtures. Molecular Simulation using efficient algorithms provides an accurate way to explore real system phase behaviour...</p><hr></hr>
                                    <Link aria-current="page" to="/jhumpa-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/naveen-talk"><h4>Spatio-temporal Stability Analysis of the Flow on a Vertical Cylinder</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Prof. Naveen Tiwari</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Mar 20, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: The isothermal flow of a thin film over a vertical cylinder is inherently unstable, and the film breaks down into beads in the flow direction. This Rayleigh-Plateau instability is significantly affected by thermal effects. In this talk, the gravity-driven flow of a thermoviscous liquid on the exterior surface of a uniformly heated or cooled vertical cylinder will be discussed...</p><hr></hr>
                                    <Link aria-current="page" to="/naveen-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/spc-talk"><h4>Sustainability Assessment of Technologies</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Prof. (Emeritus) Surya Prakash Chandak</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Feb 20, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: All technical persons focus primarily on the technical aspects while assessing and selecting a technology for any application. However, in today's time, it is quite important to assess all the sustainability aspects. While working with UNEP we developed this simple methodology through which we can assess different technology options with respect to sustainability...</p><hr></hr>
                                    <Link aria-current="page" to="/spc-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/pradip-talk"><h4>Air Pollution and Wastewater Management of Jodhpur</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Prof. Pradip Tewari </h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Jan 30, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: A Seminar on 'Air Pollution and Wastewater Management of Jodhpur' jointly organised by the Jodhpur Industries Association (JIA) and Jodhpur City Knowledge and Innovation Cluster (JCKIC) in collaboration with IIT Jodhpur on 30 January 2021 at Hotel Zone in Jodhpur...</p><hr></hr>
                                    <Link aria-current="page" to="/pradip-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/guruswamy-talk"><h4>3D Printing of Waste-Derived High Density Polyethylene</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Prof. Guruswamy</h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Jan 20, 2021</p>
                                    <p style={{textAlign:'justify'}}>Abstract: Speaker will provide a broad overview of sustainability in the context of polymeric materials, and how plastic waste is managed. Prof. Guruswamy will then discuss how a waste-to-wealth route that converts waste plastic into 3D printing filament and about the challenges associated with 3D printing of semicrystalline polymers. In 3D printing, objects are built up by sequential layer-by-layer deposition of material...</p><hr></hr>
                                    <Link aria-current="page" to="/guruswamy-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-info">
                                    <Link aria-current="page" to="/yamuna-talk"><h4>Artificial Intelligence Applications in Process Control</h4></Link>
                                    <h6 style={{fontWeight:'bold',color:'black'}}>Speaker: Dr. K Yamuna Rani </h6>
                                    <p><i className="fa-solid fa-calendar-days"></i> Jan 1, 2021</p>
                                    <p style={{textAlign:'justify'}}>About Speaker: Dr. K Yamuna Rani received Ph.D. in chemical engineering from the IIT, Madras, and has been with IICT since 1990. She is currently the chief scientist and group leader of Process Dynamics and Control Group & Artificial Intelligence Group at IICT, Hyderabad. She is also a Professor in Engineering Sciences at AcSIR...</p><hr></hr>
                                    <Link aria-current="page" to="/yamuna-talk"><span>Read More <i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

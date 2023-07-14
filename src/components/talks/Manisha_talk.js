import React from 'react'
import Navbar from '../Navbar'
export default function Manisha_talk() {
    return (
        <>
            <Navbar/>
            {/* <!-- ======= Details Section ======= --> */}
            <section id="blog" className="blog">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row g-5">
                        <div className="col-lg-11">
                            <article className="blog-details">
                                <div className="entry-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/iitj.jpeg'} className="img-fluid" alt=""/>
                                </div>
                                <h2 className="title">Chemical Engineering Department Seminar Series - Expert talk by Dr. Manisha Padwal</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Manisha Padwal</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>June 1, 2022</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 10:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i>Lecture Hall Building Room No. 205</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Dr. Manisha Padwal
                                    </p>
                                    <p>
                                    Title: Energy from Blast Furnace Gas: Role of Chemical Kinetics for the Development of a Fuel-Flexible Burner
                                    </p>
                                    <p>Date & Time: June 1, 2022, 10:00 AM</p>
                                    <p>Venue: Lecture Hall Building Room No. 205</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Dr. Manisha B. Padwal joined IIT Jammu as a full-time visiting faculty in the Department of Chemical Engineering in March 2020. She served there until April 2022. Dr. Padwal obtained her PhD in Aerospace Engineering with specialization in gelled propellant combustion from IIT Kanpur in 2015, followed by two postdoctoral research fellowships in IIT Kanpur and Technion-Israel. At Technion, she worked under Prof. Benny Natan's mentorship on green fuels. Dr. Padwal completed her graduate studies from BIT Mesra with specialization in rocket propulsion and undergraduate studies in chemical engineering from Shivaji University Kolhapur. Dr. Padwal's research interests are in formulation of novel fuels from energy-dense substances, atomization and combustion, waste valorization technologies, hydrogen utilization and mitigation technologies. Her research addresses the challenges and specific problems at the interface of chemical engineering and energy technologies. She uses complementary experimental and  numerical tools to further her research. Dr. Padwal has published eleven research papers in international peer-reviewed journals, four in international conferences, and has jointly filed one Indian patent. She has also contributed an invited chapter. She has developed multiple prototypes and test rings as part of her research. Dr. Padwal's contributions to innovation have been recognized by the Students' Innovation Award 2015 of IIT Kanpur, Gandhian Young Technological Innovation (GYTI) Award 2016, and the INAE Young Engineer Award 2016. She is a Young Associate of the INAE. Dr. Padwal is a Notable Alumni of IIT Kanpur.</p>
                                    <blockquote>
                                    <p>
                                    Energy from Blast Furnace Gas: Role of Chemical Kinetics for the Development of a Fuel-Flexible Burner - Expert talk by Dr. Manisha Padwal
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>Blast furnace gas (BFG) is an important residual gas formed in the blast furnace in steel making processes. They are industrially important gases because of their calorific value and the large volumes produced. As such, they cannot be simply purged. Instead, they are routed as fuel for boilers and heating furnaces. Compositional variation of BFG limits the stable operation of combustors operating with BFG fuel. Extract on of energy from such waste blast furnace gas by combustion requires comprehensive knowledge of operating condition for the efficient operation of a fuel-flexible burner. The complexity of compositional variation of BFG and its adverse effects on flame stability and flame burning characteristic demands detailed investigations on the chemical kinetics of BFG combustion. In this talk, we would discuss these effects with the help of chemical kinetics and uncertainty in flame temperature and combustion intensity. The quantification of uncertainties in the flame properties due to fluctuations in the composition of BFG could be a useful practical tool to discover the additional degrees of freedom for selecting favourable mixture ratios, inlet temperature and the proportion of hydrogen as a blend gas in a well-mixed fuel-flexible combustor designed for utilizing the blast furnace gas.</p>
                                    <p>We look forward to your enthusiastic participation.</p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

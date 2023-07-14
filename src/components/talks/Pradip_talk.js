import React from 'react'
import Navbar from '../Navbar'
export default function Pradip_talk() {
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
                                <h2 className="title">Seminar on 'Air Pollution and Wastewater Management of Jodhpur' - Talk by Prof. Pradip Tewari</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Prof. Pradip Tewari</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Jan 30, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 04:00 PM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m8b8e02b6ba046bb3bfece09ea72f4857'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>Speaker: Prof. Pradip Tewari</p>
                                    <p>Title: Air Pollution and Wastewater Management of Jodhpur</p>
                                    <p>Date & Time: Jan 30, 2021, 04:00 PM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Professor Pradip K. Tewari, currently working as Head of the Department of Chemical Engineering in Indian Institute of Technology (IIT) Jodhpur, is a renowned expert in membrane technology and total water solution.</p>
                                    <p>Professor Tewari joined the Bhabha Atomic Research Centre (BARC) in 1977 and became Distinguished Scientist in 2012 and Associate Director of Chemical Engineering Group in 2014. He was consultant to the Office of Principal Scientific Adviser to the Government of India on ‘Water Issues’. He was Professor in Homi Bhabha National Institute (HBNI) for more than a decade.</p>
                                    <p>Dr Tewari is Fellow of Indian National Academy of Engineering (INAE). He is Vice President of Asia Pacific Desalination Association (APDA). Professor Tewari has more than 170 research publications in peer reviewed journals, proceedings, books and encyclopaedia. He has two patents to his credit. He has authored two books (i) ‘Nano-composite Membrane Technology' published by CRC Press Taylor & Francis Group (USA); and (ii) ‘Advanced Water Technologies’ by CRC Press Taylor and Francis Group (USA). He is a member of the editorial board of several peer reviewed journals such as ‘Desalination and Water Treatment’ journal. He is recipient of several awards and felicitations as well as Group Achievement Awards.</p>
                                    <blockquote>
                                    <p>Air Pollution and Wastewater Management of Jodhpur- Expert talk by Prof. Jhumpa Adhikari</p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>A Seminar on 'Air Pollution and Wastewater Management of Jodhpur' jointly organised by the Jodhpur Industries Association (JIA) and Jodhpur City Knowledge and Innovation Cluster (JCKIC) in collaboration with IIT Jodhpur on 30 January 2021 at Hotel Zone in Jodhpur.</p>
                                    <p>The head of the chemical engineering department Prof. Pradip Tewari gave a very insightful talk on wastewater management at the recently organised seminar by Jodhpur Industries Association and JCKIC in collaboration with IIT Jodhpur.</p>
                                    <br></br>
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

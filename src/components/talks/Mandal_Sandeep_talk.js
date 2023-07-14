import React from 'react'
import Navbar from '../Navbar'

export default function Mandal_Sandeep_talk() {
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
                                <h2 className="title">Chemical Engineering Department Seminar Series - Expert talk by Prof. D. Mandal and Dr. Sandeep K.C.</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Prof. D. Mandal and Dr. Sandeep K.C.</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i><time datetime="2020-09-01">Sept 1, 2022</time></li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 06:30 PM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i>Seminar Room, ME Building, Room No. 112</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speakers: Prof. D. Mandal and Dr. Sandeep K.C.
                                    </p>
                                    <p>
                                    Title: Role of Chemical Engineering in the Department of Atomic Energy
                                    </p>
                                    <p>Date & Time: September 1, 2022, 06:30 PM</p>
                                    <p>Venue: Seminar Room, Mechanical Engineering Building, Room No. 112</p>
                                    <h3>About Prof. D. Mandal</h3>
                                    <p>Prof. Mandal obtained his B. Tech in Chemical Engineering from Calcutta University in 1988. He joined the Chemical Engineering Division of Bhabha Atomic Research Centre in 1990. At the Chemical Engineering Division, he engaged in several R&D and project execution activities in the first phase of his career. He has developed techniques such as packed-fluidization to enhance the thermal properties of ceramic pebbles and many more. Prof. Mandal received his PhD in 2012 and ‘Excellence in Thesis Work’ from IIT Bombay in 2013. He was appointed as a Professor at Homi Bhabha National Institute in 2015. Prof. Mandal has received numerous awards, such as Homi Bhabha Science & Technology Award in 2016, Team Leader and Group Achievement Award in 2016, Distinguished Chemical Engineering Speaker Award in 2018. He was selected as the Fellow of the Indian Institute of Chemical Engineers in 2018.</p>
                                    <h3>About Dr. Sandeep K.C.</h3>
                                    <p>Dr. Sandeep obtained his graduate degree in Chemical Engineering from the University of Calicut, Kerala. He joined the Heavy Water Division, BARC, Mumbai in 2005. He completed his MSc (Engg) and PhD in Chemical Engineering at Homi Bhabha National Institute, Mumbai. Dr. Sandeep has received many awards, such as DAE Young Engineer Award in 2016, Nina Saxena Excellence in Technology Award in 2022. He has also received two group achievement awards in 2015 & 2021 from the Department of Atomic Energy. He is currently a senior scientist in the Heavy Water Division, Chemical Engineering Group, BARC.</p>
                                    <blockquote>
                                    <p>
                                    Role of Chemical Engineering in the Department of Atomic Energy - Expert talk by Prof. D. Mandal and Dr. Sandeep K.C.
                                    </p>
                                    </blockquote>
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

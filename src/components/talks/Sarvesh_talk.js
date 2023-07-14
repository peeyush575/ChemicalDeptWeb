import React from 'react'
import Navbar from '../Navbar'
export default function Sarvesh_talk() {
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
                                <h2 className="title">Chemical Engineering Department Seminar Series - Talk by Dr. Sarvesh Srivastava</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Sarvesh Srivastava</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>March 11, 2022</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 01:00 PM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=mb6f07974ed735ceed772b86b6761b83e'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Dr. Sarvesh Srivastava
                                    </p>
                                    <p>
                                    Title: Engineered Living Materials and Smart Microdevices
                                    </p>
                                    <p>Date & Time: March 11, 2022, 01:00 PM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Dr. Srivastava is a Senior Researcher (equivalent to associate professor in Danish system) and PI at the DTU Health Technology, Denmark. He received his B.Tech from Jaypee University, Solan, and MS from the State University of Catalonia (URV), Spain, where he held an EU masters fellowship. Dr. Srivastava completed his doctorate (2014) in Chemical Engineering from Kobe University, Japan, and received the Japanese Government Scholarship (Monbukagakusho). His doctoral thesis laid a foundation for genetically-engineered materials for catalysis and cleaner production. He was advised by Prof. Akihiko Kondo and Prof. Chiaki Ogino.</p>
                                    <p>His notable awards include Lundbeck Experiment award, DAAD-Leibniz Postdoc Fellowship, Alexander Von Humboldt Postdoc Fellowship, MIT-DBT VSP Fellow, DTU Proof-of-Concept award, and the 69th Lindau Nobel Laureate Meeting alumni. </p>
                                    <blockquote>
                                    <p>Engineered Living Materials and Smart Microdevices - Expert talk by Dr. Sarvesh Srivastava</p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>This talk will be an overview of Dr. Srivastava’s research programme – The 3Ms (triyam) – which combine the fundamentals of microfabrication, molecular biology, and medicinal chemistry for advanced chemical engineering applications. In particular, he will discuss his research on genetic-reprogramming of bacterial cells for imparting advanced material properties (photovoltaic materials), and autonomous microrobotics for biomedical applications.</p>
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

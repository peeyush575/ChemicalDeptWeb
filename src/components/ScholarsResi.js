import React from 'react'
import Navbar from './Navbar'


export default function ScholarsResi() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Scholars-in-Residence</h2>
                </div>
            </div>
            <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/Devang_Khakkar.jpeg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: khakhar@iitb.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="tel:+91-222-5767212 "><i className="bi bi-phone"></i></a>
                                        {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Devang V Khakhar</h4>
                                    <span>Former Director, Indian Institute of Technology Bombay</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>B.Tech. (Chemical Engineering):Indian Institute of Technology Delhi</span></p>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Ph.D. (Chemical Engineering):University of Massachusetts, Amherst</span></p>
                                    <p>Reactor Modelling; Drug Delivery; Nano-composites; Polymer Processing; Granular Flow; Rheology; Surfactants</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

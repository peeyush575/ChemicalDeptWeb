import React from 'react'
import Navbar from './Navbar'

export default function TechStaff() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Technical Staff Members</h2>
                </div>
            </div>
            <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/tech_staff.jpeg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: ashukla@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="tel:+91-222-5767212 "><i className="bi bi-phone"></i></a>
                                        {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Abhinav Shukla</h4>
                                    <span>Junior Technical Assistant</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>B.Tech. (Chemical Engineering):Chaudhary Charan Singh University ,Meerut ,Uttar Pradesh</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

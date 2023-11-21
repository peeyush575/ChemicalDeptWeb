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
                                    <img src={process.env.PUBLIC_URL + '/Images/TechStaff/lakshmananaik.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: lakshmananaik@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="tel:0291 280 "><i className="bi bi-phone"></i></a>
                                        {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Lakshmananaik Ramavathu</h4>
                                    <span>Technical Superintendent</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>B.Tech.(Chemical Engineering): Andhra University, Visakhapatnam<br/>M.Tech. (Chemical Engineering): IIT Madras<br/>Ph.D. (Chemical Engineering): JNTU Ananthapuram, Andhra Pradesh</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/TechStaff/sachinmishra.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: sachinmishra@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        {/* <a href="tel:+91-222-5767212 "><i className="bi bi-phone"></i></a> */}
                                        {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Sachin Mishra</h4>
                                    <span>Junior Technical Assistant</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>B.Tech. (Chemical Engineering): S D college of Engineering and Technology Muzaffarnagar</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/TechStaff/shriram.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: shriram@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="tel:0291 280 "><i className="bi bi-phone"></i></a>
                                        {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Shri Ram</h4>
                                    <span>Senior Technical Assistant</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>Diploma(Chemical Engineering) : Govt Polytechnic College, Barmer</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/TechStaff/ijazshaik.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: ijazshaik@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="tel:0291 2801702 "><i className="bi bi-phone"></i></a>
                                        {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Shaik Ijaz</h4>
                                    <span>Junior Technical Assistant</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>B.Tech. (Chemical Engineering): R.V.R & J.C College of Engineering, Guntur</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/TechStaff/ashukla.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: ashukla@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        {/* <a href="tel:0291 2801702 "><i className="bi bi-phone"></i></a> */}
                                        {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Abhinav Shukla</h4>
                                    <span>Junior Technical Assistant</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>B.Tech (Chemical Engineering): Chaudhary Charan Singh University ,Meerut ,Uttar Pradesh</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/TechStaff/ranjanpati.jpg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: ranjanpati@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="tel:91291 280"><i className="bi bi-phone"></i></a>
                                        {/* <a href="#"><i className="bi bi-linkedin"></i></a> */}
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Ranjan Pati</h4>
                                    <span>Junior Technical Assistant</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>B.Tech (Chemical Engineering): VSSUT, Burla, Sambalpur</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

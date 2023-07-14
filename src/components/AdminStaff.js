import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function AdminStaff() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Administrative Staff Members</h2>
                </div>
            </div>
            <section className="team" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                            <div className="member">
                                <div className="member-img">
                                    <img src={process.env.PUBLIC_URL + '/Images/Faculty/dheeraj_admin.jpeg'} className="img-fluid" alt=""/>
                                    <div className="social">
                                        <a href="mailto: dheerajsingh@iitj.ac.in"><i className="bi bi-envelope-at-fill"></i></a>
                                        <a href="tel:+91-291-2801702 "><i className="bi bi-phone"></i></a>
                                        <Link aria-current="page" to="https://www.linkedin.com/in/dheeraj-singh-khangarot-1aa6401a8/" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></Link>
                                    </div>
                                </div>
                                <div className="member-info">
                                    <h4>Dheeraj Singh Khangarot</h4>
                                    <span>Junior Assistant</span>
                                    <p><span style={{fontWeight:'bold',color:'black'}}>B.Tech.:Rajasthan Technical University Kota</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import React from 'react'
import Navbar from '../Navbar'

export default function Chaitanya_talk() {
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
                                <h2 className="title">Chemical Engineering Department Seminar Series - Expert talk by Mr. Gottimukkala Chaitanya</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Mr. Gottimukkala Chaitanya</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Oct 19, 2022</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 12:00 PM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i> <a href="https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m3412cb1de85b44f8c131ef73b6576ade">Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Mr. Gottimukkala Chaitanya
                                    </p>
                                    <p>
                                    Title: Process Safety in Hydrogen Projects
                                    </p>
                                    <p>Date & Time: October 19, 2022, 12:00 PM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Mr. Chaitanya finished his MS (Chemical Engineering) from Lamar University, Texas, USA in 2008 and joined CB&I (Chicago Bridge and Iron Company) as a Process Safety Engineer. Later he worked for McDermott International Inc., RISKBytes and worked on multiple offshore and onshore projects primarily on Process Safety, Risk Management, and Functional Safety. After over a decade of industrial experience on process safety and risk assessment in USA, now he has a startup named SREVeda in India where he is currently the Director and Principal Consultant. Mr. Chaitanya is a DNV certified HAZOP Leader, NCEES certified Professional Engineer (P.E) to name a few of his licensures, which showcases his immense skillsets on Process Safety and Chemical Engineering.</p>
                                    <blockquote>
                                    <p>
                                    Process Safety in Hydrogen Projects - Expert talk by Mr. Gottimukkala Chaitanya
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>
                                    This talk will cover the fundamentals of process safety and hazard analysis throughput a facility lifecycle, and design categories that must be considered. A case study on a past incident involving hydrogen will be discussed.
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

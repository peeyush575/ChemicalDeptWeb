import React from 'react'
import Navbar from '../Navbar'
export default function Yamuna_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Dr. K Yamuna Rani </h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. K Yamuna Rani </li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Dec 18, 2020</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 10:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m8b8e02b6ba046bb3bfece09ea72f4857'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>Speaker: Dr. K Yamuna Rani</p>
                                    <p>Title: Artificial Intelligence Applications in Process Control</p>
                                    <p>Date & Time: Dec 18, 2020, 10:00 AM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Dr. K Yamuna Rani received Ph.D. in chemical engineering from the IIT, Madras, and has been with IICT since 1990. She is currently the chief scientist and group leader of Process Dynamics and Control Group & Artificial Intelligence Group at IICT, Hyderabad. She is also a Professor in Engineering Sciences at AcSIR.</p>
                                    <p>Her area of expertise include Process Dynamics and Control, Process Intensification & Integration, AI applications in Chemical Engineering</p>
                                    <blockquote>
                                    <p>Artificial Intelligence Applications in Process Control- Expert talk by Dr. K Yamuna Rani</p>
                                    </blockquote>
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

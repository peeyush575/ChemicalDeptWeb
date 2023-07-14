import React from 'react'
import Navbar from '../Navbar'
export default function Nachiket_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Dr. Nachiket Raravikar</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Nachiket Raravikar</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Jul 17, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 10:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m8b8e02b6ba046bb3bfece09ea72f4857'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>Speaker: Dr. Nachiket Raravikar</p>
                                    <p>Title: Materials Pathfinding for Electronics Applications</p>
                                    <p>Date & Time: Jul 17, 2021, 10:00 AM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Dr. Nachiket Raravikar has over 17 years’ experience in the field of nanoscale materials science and electronic devices, which include semiconductors, displays, energy storage technologies and AR/VR technologies. He currently works as Principal Engineer at an AR/VR contact lens start up, Mojo Vision, Inc. located in the San Francisco Bay Area of California, USA. At Mojo Vision, his focus has been to make the world’s smallest and densest micro/nano-LED displays for integration into the contact lens. Prior to this job, Nachiket worked at Apple, Inc. as a hardware reliability engineer, and prior to Apple, he worked at Intel Corporation for 12 years in semiconductor research and development. During 2014 to 2016, Nachiket was also an adjunct faculty at the Arizona State University, where he demonstrated energy storage in biocompatible hydrogels.</p>
                                    <p>Dr. Nachiket earned bachelor’s degree in Metallurgical engineering from Government College of Engineering, Pune (COEP), India, in 1997, and Ph.D. in Materials Science and Engineering from Rensselaer Polytechnic Institute, Troy, New York, in 2004, after which he started working in industrial research. He has authored over 15 publications, 20 patents and a book chapter on semiconductor packaging materials.</p>
                                    <blockquote>
                                    <p>Materials Pathfinding for Electronics Applications - Expert talk by Dr. Nachiket Raravikar</p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>This talk aims at describing the nature of industrial research from the perspective of a Materials Scientist. Industrial or “applied” research is often called as ‘Pathfinding’, which falls approximately between academic or early-stage research, and product development or high-volume manufacturing (HVM). While the boundaries between pathfinding and product development are often hazy, each have their own distinct role. Pathfinding helps mature an idea into defining the product. Product development begins at product definition, and must result into a HVM capable product. Success of pathfinding depends upon maturing not only the science behind the technology idea, but also the engineering, where scalability, resources, and time to market are important factors. Often, Pathfinding also borrows from new scientific paradigms in order to solve a pressing technological problem. Several anecdotes from author’s own experience in electronics industry will be presented in order to elaborate the above points. In the final example, results of pathfinding at author’s current employer, Mojo Vision, Inc. are discussed. Pathfinding at Mojo Vision resulted into the world’s densest and smallest micro-LED display, with 14,000 pixels per inch-monochrome at half millimeter size, integrated into an augmented/virtual reality (AR/VR) contact lens.</p>
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

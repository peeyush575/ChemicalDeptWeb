import React from 'react'
import Navbar from '../Navbar'
export default function Jhumpa_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Prof. Jhumpa Adhikari</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Prof. Jhumpa Adhikari</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Apr 4, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 04:00 PM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m8b8e02b6ba046bb3bfece09ea72f4857'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>Speaker: Prof. Jhumpa Adhikari</p>
                                    <p>Title: Phase Equilibria Using Monte Carlo Simulation Techniques</p>
                                    <p>Date & Time: Apr 4, 2021, 04:00 PM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Prof. Jhumpa Adhikari is currently a Professor in the Department of Chemical Engineering at IIT Bombay. Her research interests include the study of phase equilibria for simple model systems as well as for real systems using Monte Carlo simulations and computer-aided molecular design frameworks for the design of task-specific molecules.  She received her Ph.D. degree in 2004 from the University at Buffalo, The State University of New York at Buffalo, New York, USA, and B.E. (Hons) in Chemical Engineering from Regional Engineering College (now called N.I.T.) Durgapur, West Bengal, India.</p>
                                    <blockquote>
                                    <p>Phase Equilibria Using Monte Carlo Simulation Techniques- Expert talk by Prof. Jhumpa Adhikari</p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>Understanding phase behaviour is crucial for the design and modelling of separation processes. The present seminar includes a cost-effective and powerful tool to study this phase behaviour study for pure substances and for mixtures. Molecular Simulation using efficient algorithms provides an accurate way to explore real system phase behaviour. The talk discusses methods like Single box Metropolis Monte Carlo, Gibbs Ensemble Monte Carlo, Gibbs Duhem Integration and Transition Matrix Monte Carlo techniques to predict the first-order phase transitions in generic and real systems. Case studies on VLE of R-PAC and VLE of TW fluids are shown to further illustrate these techniques.</p>
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

import React from 'react'
import Navbar from '../Navbar'
export default function Naveen_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Prof. Naveen Tiwari</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Prof. Naveen Tiwari</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Mar 20, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 10:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m8b8e02b6ba046bb3bfece09ea72f4857'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>Speaker: Prof. Naveen Tiwari</p>
                                    <p>Title: Spatio-temporal Stability Analysis of the Flow on a Vertical Cylinder</p>
                                    <p>Date & Time: Mar 20, 2021, 10:00 AM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Dr. Naveen Tiwari is currently working as a Professor in the Department of Chemical Engineering at IIT Kanpur. He obtained a B. Tech. Degree in Chemical Engineering from IIT Delhi in 2003 and a Ph.D. degree in Chemical Engineering from the University of Massachusetts at Amherst in 2008. Subsequently, Dr. Tiwari joined Saint-Gobain R&D center located in Northborough, Massachusetts, and worked there till Nov. 2012 as a Senior Research Engineer. In that role, he led the efforts of numerical modeling of SOFC, sapphire crystal growth process, and other high-temperature processes related to ceramics. He joined the department at IIT Kanpur in December 2012 as an Assistant Professor and got promoted to the position of Associate Professor in June 2015. He became a full professor in December 2019. Research in his group involves modeling of the fluid flow and transport processes at various length scales using the analytical and numerical tools, with a strong focus on the hydrodynamic instabilities in thin liquid films. His group has published several articles in reputed peer-reviewed journals. Dr. Tiwari has received a few awards. He was awarded the Young Scientist Research Award in 2014 by BRNS, DAE (Board of Research in Nuclear Sciences, Department of Atomic Energy), Young Faculty Research Award in 2017 and 2020, and the Excellence in Teaching Award in 2019 by IIT Kanpur.</p>
                                    <blockquote>
                                    <p>Spatio-temporal Stability Analysis of the Flow on a Vertical Cylinder- Expert talk by Prof. Naveen Tiwari</p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>The isothermal flow of a thin film over a vertical cylinder is inherently unstable, and the film breaks down into beads in the flow direction. This Rayleigh-Plateau instability is significantly affected by thermal effects. In this talk, the gravity-driven flow of a thermoviscous liquid on the exterior surface of a uniformly heated or cooled vertical cylinder will be discussed. The film evolution model will be presented that is derived using lubrication approximation, and its limitation will be discussed. The thermocapillary and thermoviscous effects are explored using dimensionless groups, namely: Marangoni number, Biot number, Bond number, and thermoviscosity number. The viscosity of the liquid is modeled as an exponentially varying function of temperature. For a temporally unstable system, spatiotemporal stability analysis will be presented. Using Brigg’s criterion, the critical value of a composite parameter β is evaluated to mark the transition from convective to absolute instability. It is found that with proper rescaling of the variables, the condition on the composite parameter is consistent with an earlier work on isothermal flows. Results from the nonlinear simulations will be presented. The limitation of the usual periodic boundary condition in the non-linear spatiotemporal analyses will be discussed. Higher order corrections to take into account the curvature effects will be presented briefly.The isothermal flow of a thin film over a vertical cylinder is inherently unstable, and the film breaks down into beads in the flow direction. This Rayleigh-Plateau instability is significantly affected by thermal effects. In this talk, the gravity-driven flow of a thermoviscous liquid on the exterior surface of a uniformly heated or cooled vertical cylinder will be discussed. The film evolution model will be presented that is derived using lubrication approximation, and its limitation will be discussed. The thermocapillary and thermoviscous effects are explored using dimensionless groups, namely: Marangoni number, Biot number, Bond number, and thermoviscosity number. The viscosity of the liquid is modeled as an exponentially varying function of temperature. For a temporally unstable system, spatiotemporal stability analysis will be presented. Using Brigg’s criterion, the critical value of a composite parameter β is evaluated to mark the transition from convective to absolute instability. It is found that with proper rescaling of the variables, the condition on the composite parameter is consistent with an earlier work on isothermal flows. Results from the nonlinear simulations will be presented. The limitation of the usual periodic boundary condition in the non-linear spatiotemporal analyses will be discussed. Higher order corrections to take into account the curvature effects will be presented briefly.</p>
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

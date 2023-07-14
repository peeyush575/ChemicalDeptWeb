import React from 'react'
import Navbar from '../Navbar'

export default function Aakash_talk() {
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
                                <h2 className="title">Chemical Engineering Department Seminar Series - Expert talk by Dr. Aakash Sharma</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Aakash Sharma</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>June 30, 2022</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 10:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i>Lecture Hall Building Room No. 205</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Dr. Aakash Sharma
                                    </p>
                                    <p>
                                    Title: Correlating the properties and structure of semicrystalline polymers: Case of regenerated cellulose fibers
                                    </p>
                                    <p>Date & Time: June 30, 2022, 10:00 AM</p>
                                    <p>Venue: Lecture Hall Building Room No. 205</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Dr. Sharma obtained his PhD in Polymer Science and Engineering from CSIR-NCL, Pune in 2019, followed by his postdoctoral research at Jülich Centre for Neutron Science, Germany. Dr. Sharma's research interests are in Polymer Physics, Nanocomposites, Structure-Property Relations, Scattering for Soft Materials. Dr. Sharma's received fellowship from Aditya Birla Science and Technology Company for his PhD and received Tasso Springer fellowship during postdoc at Forschungszentrum Jülich.</p>
                                    <blockquote>
                                    <p>
                                    Correlating the properties and structure of semicrystalline polymers: Case of regenerated cellulose fibers - Expert talk by Dr. Aakash Sharma
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>Semicrystalline polymers are characterized by complex microstructural features ordered over a wide range of length scales. Further complexities like molecular orientation are added when these polymers are spun in form of fibers from melt or solution state. It is well known that the properties of polymers are governed by their microstructure. However, current literature lacks appropriate tools to characterize these microstructural details. This makes it difficult to relate the properties of polymers to the relevant structural details. I will talk about the case of regenerated cellulose fibers, which are bloderived polymers manufactured in Industry using two processes-Viscose and Lyocell. I examine fiber microstructure at different length scales ranging from a few A to hundreds of nanometers: Dynamics of the fiber microstructure is captured during mechanical deformation by employing in-situ experiments, A simple model relates the viscoelastic response of fibers to the microstructural features. The model and in-situ measurements establish that the mechanical response of fibers is governed by the interplay between crystalline and amorphous domains in the semicrystalline microstructure. This whole framework allows us to eliminate the complexities of hierarchical microstructure and pins down only the features that are relevant to the mechanical properties of fibers. This approach is independent of material chemistry and is applicable to a variety of semicrystalline fibers and other similar systems.</p>
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

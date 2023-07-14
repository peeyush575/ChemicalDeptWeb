import React from 'react'
import Navbar from '../Navbar'
export default function Rajdip_talk() {
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
                                <h2 className="title">Chemical Engineering Department Seminar Series - Expert talk by Dr. Rajdip Bandyopadhyaya</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Rajdip Bandyopadhyaya</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>May 20, 2022</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 10:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=mf252714258abe35c61557c27d65f28ae'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Dr. Rajdip Bandyopadhyaya
                                    </p>
                                    <p>
                                    Title: On the Detection and Removal of Pollutants from Water: Nanoparticles and Hybrids to the Rescue
                                    </p>
                                    <p>Date & Time: May 20, 2022, 10:00 AM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Prof. Bandyopadhyaya is a Professor in the Chemical Engineering Department of IIT Bombay. He started his career as an Assistant Professor at IIT Kanpur, before joining IIT Bombay. He obtained his PhD from IISc, Bangalore, followed by three postdoctoral research fellowships in Israel (Ben-Gurion University) and USA (University of Utah and University of California at Los Angeles). His current research uses both experiments and mathematical modeling, focusing on using the principles of colloidal and interfacial science to link the synthesis, structure, dynamics and properties of nanomaterials. In the process, his research uncovers the interplay of multiple length and time scales. Further emphasis of his research group is on various applications (like sensors, water treatment, drug delivery, catalysis etc.), harnessing the advantages of nanoparticles and hybrids. He is an elected member of the National Academy of Sciences, India, and was on the editorial board of Advanced Powder Technology, Elsevier. Presently, he is an Associate Editor of Indian Chemical Engineer.</p>
                                    <blockquote>
                                    <p>
                                    On the Detection and Removal of Pollutants from Water: Nanoparticles and Hybrids to the Rescue - Expert talk by Dr. Rajdip Bandyopadhyaya
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>Taking recourse to nanoparticles and their hybrids in making more functionally efficient materials for sustainable solutions is a modern theme across several disciplines of science and engineering. This has helped galvanize our own ideas from several traditional fields, namely chemistry, biology, materials science and engineering, to deliver target-driven solutions for various applications. We have applied this theme for detection and removal of various pollutants (e. g. arsenic, fluoride, chromium and microorganisms, like E. coli), which is a core requirement for having access to safe, drinking water. Prof. Bandyopadhyaya will discuss his in-house manufactured portable devices, for rapid, on-spot detection of some of the above pollutants, based on optical sensing techniques, utilizing functionalized nanoparticles and other sensor-reagents.</p>
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

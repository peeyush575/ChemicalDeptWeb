import React from 'react'
import Navbar from '../Navbar'
export default function Jessica_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Dr. Jessica Zimberlin Eastman</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Jessica Zimberlin Eastman</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Oct 12, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 08:30 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=md6273b660c180ad219c8b04c9e4030bf'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Dr. Jessica Zimberlin Eastman
                                    </p>
                                    <p>
                                    Title: Patent Training
                                    </p>
                                    <p>Date & Time: Oct 12, 2021, 08:30 AM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>About the Speaker: Dr. Jessica Zimberlin Eastman, Ph.D. currently assists clients in a wide range of technical fields including chemistry, nanotechnology, chemical engineering, and mechanical engineering, with a primary focus on polymer and material science ranging from monomer synthesis through product development. Her practice involves multiple applications in polymerization, glazings, additive manufacturing, personal care products, packaging, optics, wireless communication, fuel cells, and thermal management. Jessica has extensive experience in patent preparation and both foreign and domestic prosecution. She works closely with a variety of start-up companies, several of the leading companies in the plastics industry, major research universities, and for other clients with complex technology and intellectual property portfolios. Prior to joining Cantor Colburn, Jessica worked as an engineer in several companies including Rogers Corporation, Unilever, Fraunhofer IPA, Tokyo Women’s Medical University, and the National Institute of Standards and Technology.</p>
                                    <blockquote>
                                    <p>
                                    Patent Training - Expert talk by Dr. Jessica Zimberlin Eastman
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>In this seminar, Dr. Jessica Eastman will provide an overview of patent system from a global perspective with some focus on the US patent system. Topics that will be addressed include:</p>
                                    <ul><span class='bi bi-caret-right-fill'> The types of patents and the various rights they provide</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> The conditions for patentability</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> The process for obtaining a patent</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> The effect of public disclosure on patentability</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> Tips for preparing an invention disclosure to help you obtain the broadest protection</span></ul>
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

import React from 'react'
import Navbar from './Navbar'
export default function Donation() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Donations</h2>
                </div>
            </div>
            <section id="blog" className="blog" style={{marginTop:'-100px'}}>
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-5">
                        <div className="col-xl-11 col-md-6">
                            <article className="blog-details">
                                <div className="content">
                                    <blockquote>
                                    <img src={process.env.PUBLIC_URL + '/Images/Donate.png'} className="img-fluid" alt="Donations" style={{height:'450px',marginBottom:'30px'}}/>
                                    <p>The Chemical Engineering Department may rely on financial support from both individual and corporate partners to conduct its work in education, research, and community engagement.</p>
                                    <p>We are requesting your generosity in funding research and education. The department depends on the support of former students, businesses, and anybody else who wants to support the department's initiatives.</p>
                                    <br></br>
                                    <p>Please reach out to <a href="mailto: head_che@iitj.ac.in">head_che@iitj.ac.in</a></p>
                                    </blockquote>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

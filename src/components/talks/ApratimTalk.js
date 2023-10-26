import React from 'react'
import Navbar from '../Navbar'

export default function ApratimTalk() {
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
                                <h2 className="title">Chemical Engineering Department Seminar Series - Expert talk by Dr. Apratim Chatterji</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Apratim Chatterji</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Oct 14, 2023</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 11:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i> Seminar Hall, Department of Physics</li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Dr. Apratim Chatterji, IISER-Pune
                                    </p>
                                    <p>
                                    Title: Entropy induced organization
                                    </p>
                                    <p>Date & Time: 14 October 2023 from 11 am onward, IST</p>
                                    <p>Venue: Seminar Hall, Department of Physics</p>
                                    <blockquote>
                                    <p>
                                    Entropy induced organization - Polymer topology drives bacterial chromosome organization within the living cell
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>
                                    In recent times, researchers are using statistical physics to understand the emergent dynamics and organization in living systems, such as organization of the DNA within the living cell. Cells use molecular engineering for the proper organization and house-keeping of their chromosomes. We modify the ring polymer (internal) topology in a bead spring model of polymers to obtain localization of polymer segments in cylindrical confinement. We work  a variety of simple topologies to establish the entropic principles which lead to localization of polymer segments. Two polymers, initially  in a mixed overlapping state under cylindrical confinement, undergo segregation to two halves of the cylinder due to entropic forces. Polymer topology plays an important part in determining the magnitude of forces which lead to segregation and subsequent localization. We have used this understanding to predict the localization of loci (polymer segments) of bacterial DNA-polymers (chromosomes), as the chromosome is in the process of replication and  simultaneous  segregation. It is known that some simple bacterial cells do not have the required machinery to separate their chromosomes within the cell, and we posit that entropic forces are used to organize the chromosomes along the long axis. We have matched our simulation predictions of DNA-organization  with the DNA-organization as seen in-vivo for   two different bacterial chromosomes.  Moreover, our model simulation matches DNA-organization data  from two independent experimental techniques (HiC and FISH) which are complementary in spirit. We are currently extending our understanding of the topology driven organization  in a variety of scenarios, some of which will be useful to understand more complex organization of chromosomes within more complex cells.
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

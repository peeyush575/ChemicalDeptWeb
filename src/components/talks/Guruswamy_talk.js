import React from 'react'
import Navbar from '../Navbar'
export default function Guruswamy_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Prof. Guruswamy</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Prof. Guruswamy</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Jan 20, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 05:30 PM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m8b8e02b6ba046bb3bfece09ea72f4857'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>Speaker: Prof. Guruswamy</p>
                                    <p>Title: 3D Printing of Waste-Derived High Density Polyethylene</p>
                                    <p>Date & Time: Jan 20, 2021, 05:30 PM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Prof. Guruswamy Kumaraswamy received his B.Tech. from IIT Bombay and his MS and PhD in chemical engineering from California Institute of Technology. He worked as a postdoctoral fellow in Max Planck Institute of Colloids and Interfaces and subsequently joined CSIR-NCL (Pune) as a scientist, where he worked for 20 years. Currently, he is a Professor at IIT Bombay.</p>
                                    <blockquote>
                                    <p>3D Printing of Waste-Derived High Density Polyethylene- Expert talk by Prof. Guruswamy</p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>Speaker will provide a broad overview of sustainability in the context of polymeric materials, and how plastic waste is managed. Prof. Guruswamy will then discuss how a waste-to-wealth route that converts waste plastic into 3D printing filament and about the challenges associated with 3D printing of semicrystalline polymers. In 3D printing, objects are built up by sequential layer-by-layer deposition of material. Therefore, it is important that the objects remain attached to the print substrate and maintain registry as subsequent layers are deposited. Fused Filament Fabrication (FFF) is used to 3D print polymers by extruding a molten filament through a printer head and allowing it to cool and solidify on the print substrate. 3D printing of semicrystalline polymers such as high-density polyethylene (HDPE) is challenging since crystallization-induced shrinkage of the filament as it solidifies, results in stresses that warp the printed part and debond it from the print substrate. I will describe recent work that uses waste-derived HDPE and renders it 3D-printable.  We achieve this by (i) blending with a nanofiber forming additive, dimethyl dibenzylidene sorbitol (DMDBS) and low density polyethylene (LLDPE) and (ii) printing the object with a thin “brim” around it that is adhered to the print substrate using common polyvinyl acetate based glue. We match our experimental results with FEM simulations that provide insights into the origin of the stresses developed during printing. Since HDPE forms a significant fraction of the plastic waste stream, conversion of waste-derived HDPE to 3D printing filament has important technological implications as well as implications for sustainability.</p>
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

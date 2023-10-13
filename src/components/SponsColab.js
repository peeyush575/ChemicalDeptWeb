import React from 'react'
import Navbar from './Navbar'

export default function SponsColab() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Sponsors and Collaborators</h2>
                </div>
            </div>
            <section id="supporters" className="section-with-bg">
                <div className="container" data-aos="fade-up">
                    <div className="row no-gutters supporters-wrap clearfix" data-aos="zoom-in" data-aos-delay="100">
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/DST.jpeg'} className="img-fluid" alt="DST"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo" style={{border:'1px solid #e0e5fa'}}>
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/iocl.jpeg'} className="img-fluid" alt="IOCL"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/rspcb.jpeg'} className="img-fluid" alt="RSPCB"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/serb.png'} className="img-fluid" alt="SERB"/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/alogoAi.png'} className="img-fluid" alt="ALOGOAI"/>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/bakerHughes.png'} className="img-fluid" alt="BH"/>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/eeki.jpeg'} className="img-fluid" alt="EEKI"/>
                            </div>
                        </div>
                        {/* <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/nrl.jpeg'} className="img-fluid" alt="NRL"/>
                            </div>
                        </div> */}
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/DRDO.png'} className="img-fluid" alt="NRL" style={{height:'180px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/CPCB.jpeg'} className="img-fluid" alt="NRL" style={{height:'180px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/Jal_Shakti.svg.png'} className="img-fluid" alt="NRL" style={{height:'170px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/JCKIC.jpeg'} className="img-fluid" alt="NRL" style={{height:'200px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/PrincipalSci.jpeg'} className="img-fluid" alt="NRL" style={{height:'200px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/CanaraBanK.png'} className="img-fluid" alt="NRL" style={{height:'260px'}}/>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-6">
                            <div className="supporter-logo">
                            <img src={process.env.PUBLIC_URL + '/Images/Sponsors&Recruiters/NITI_AIM.png'} className="img-fluid" alt="NRL" style={{height:'160px'}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

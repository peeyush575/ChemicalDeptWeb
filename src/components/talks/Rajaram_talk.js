import React from 'react'
import Navbar from '../Navbar'

export default function Rajaram_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Dr. Rajaram K Nagarale</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Rajaram K Nagarale</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Sept 29, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 06:00 PM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m8b8e02b6ba046bb3bfece09ea72f4857'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Dr. Rajaram K Nagarale
                                    </p>
                                    <p>
                                    Title: Thermal Encapsulation of the Functional Materials and their Device Applications
                                    </p>
                                    <p>Date & Time: Sept 29, 2021, 06:00 PM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Dr Rajaram K Nagarale is a senior scientist at Central Salt and Marine Chemicals Research Institute (CSMCRI). His previous work includes ion exchange membranes for energy & biomedical applications, Non-gassing electro-osmotic pumps & infusion devices. He is currently working on thermal encapsulation of functional materials & their device applications. He was awarded Ramanujan fellowship by DST, India & Prof G.K. Narayan Reddy Gold Medal by Karnataka University Dharwad (1999). He has also published more than 70 peer-reviewed journals.</p>
                                    <blockquote>
                                    <p>
                                    Thermal Encapsulation of the Functional Materials and their Device Applications - Expert talk by Dr. Rajaram K Nagarale
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>Functionalisation of the electrode material without compromising their electrochemical properties is a challenging task. Covalent functionalisation increases the ohmic resistance of the system and hence poor performance. We have developed the low-temperature thermal encapsulation, a robust method of electrode functionalisation without compromising their electrochemical properties. The functional materials like ferrocene, phenothiazene, phosphomolybdic acid, phosphotungstic acid and nickel nanoparticles were encapsulated inside the multi-walled carbon nanotubes (MWCNTs) and demonstrated their device applications in energy storage and infusion device applications. Low voltage non-gassing electroosmotic pump assembled from sandwiching a silica frit between two carbon paper electrodes that were dip-coated with a paste consisting of phosphomolybdic acid/phosphotungstic acid (PMA/PTA) encapsulated multi-walled carbon nanotubes (MWCNTs) and Nafion® showed very stable performance. The encapsulation was a combined effect of thermomigration of functional materials and the nanocapillary action of MWCNTs. The encapsulated MWCNTs retained desirable redox and charge transfer characteristics of PMA/PTA. The stable voltammogram in 1 M H2SO4 solution exhibited 77% charge retention.  A total of three different possible pump configurations namely PUMP-I = PMA//SiO2//PMA, PUMP-II = PTA//SiO2//PTA, and PUMP-III = PMA//SiO2//PTA pulled together. They are the sequence of anode, silica frit and cathode. All pumps showed the linear dependence on flow rate with a minimum operating voltage of 1 V, which is well below the thermodynamic potential of water splitting. The PUMP-I provided an electroosmotic flux of 43.57 μLmin-1V-1cm-2 that matched the requirement of an infusion device like insulin pump. The device was fabricated and its applicability has been demonstrated by delivering ~1.8 mL of water at 10±2 μLmin-1 flow rate at 2 V constant applied voltage over a period of 3 h. Such a wearable device can be programmed to deliver model insulin or pain medication drugs for chronic diseases.          Without encapsulation, ferrocene derivative exhibited an initial capacity of 64.7 mAhg-1 which drastically faded with time due to dissolution of active material. However, by low-temperature thermal encapsulation, the capacity was remarkably improved to 71.3 mAhg-1 with 94% columbic efficiency and 91% capacity retention at a current density of 75mAg-1. The specific capacities were found to be 148.7, 131.2, 116, 110 and 89.4 mAhg-1 at respective current densities of 10, 20, 30, 40, and 50 Ag-1. The stability of the electrode has been explained on the basis of a friendly host-guest interaction between CNTs and the organic molecules by π-π stacking, dipole-dipole and dipole induced dipole interactions with detailed electrochemical and spectroscopic characterization. From this study we conclude that the thermal intercalation in MWCNTs has been found to be an excellent method to stabilize the electrode materials in battery application.</p>
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

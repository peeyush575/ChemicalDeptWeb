import React from 'react'
import Navbar from '../Navbar'

export default function Masaru_talk() {
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
                                <h2 className="title">Chemical Engineering Department Seminar Series - Talk by Dr. Masaru Kurihara</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Dr. Masaru Kurihara</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>May 17, 2022</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 10:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=mb6f07974ed735ceed772b86b6761b83e'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Dr. Masaru Kurihara
                                    </p>
                                    <p>
                                    Title: Rapidly-growing Seawater Desalination and the Challenges to New Technical Issues
                                    </p>
                                    <p>Date & Time: May 17, 2022, 10:00 AM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Dr. Kurihara received his PhD from the University of Tokyo, Japan. Dr. Kurihara joined Toray, Inc in 1963. Over 49 years, his research activities have primarily focused on membrane-based desalination and water reuse by RO/NF/UF/MF and MBR membranes. He has published more than 100 articles and 300 patents on membranes and membrane processes. He has received numerous awards from national and international academic societies and foundations; “Production Award” from Okouchi Memorial Foundation, “Lifetime Achievement Award” and “Outstanding Professional in Water Reuse and Conservation Award” from International Desalination Association (IDA), and others. He is a Board Member of IDA, a member of IDA Honorary Council, President of Asia Pacific Desalination Association (APDA), Fellow of The Chemical Society of Japan and The Society of Polymer Science, Japan with a “Lifetime Achievement Award”.</p>
                                    <blockquote>
                                    <p>
                                    Rapidly-growing Seawater Desalination and the Challenges to New Technical Issues - Expert talk by Dr. Masaru Kurihara
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>In this seminar, Dr. Masaru Kurihara will provide an overview of brine mining to obtain precious materials from the brine of SWRO. This plan will be connected to water and green hydrogen for a sustainable future. Topics that will be addressed include:</p>
                                    <ul><span class='bi bi-caret-right-fill'> Rapid growth of SWRO market</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> Mega-SWRO plants in excess of half mega-ton/day or mega-ton/day size</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> Low pressure two-stage high recovery SWRO system</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> Biofouling monitoring technology</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> Sustainable system for future SWRO system as Green Desalination</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> SWRO-PRO hybrid system allows 30% of energy reduction</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> FO-SWRO hybrid system</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> Brine concentration</span></ul>
                                    <ul><span class='bi bi-caret-right-fill'> Green hydrogen</span></ul>
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

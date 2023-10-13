import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';export default function Faq() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Frequently Asked <strong>Questions</strong></h2>
                </div>
            </div>
            {/* <!-- ======= Frequently Asked Questions Section ======= --> */}
            <section id="faq" className="faq">
                <div className="container">
                    <ul className="faq-list">
                        <li data-aos="fade-up">
                            <Link data-bs-toggle="collapse" className="collapsed" data-bs-target="#faq1">
                            <strong>What is the eligibility criteria for admission to the Chemical Engineering program at IIT Jodhpur?</strong><i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-x icon-close"></i>
                            </Link>
                            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            The eligibility criteria for admission to the Chemical Engineering program at IIT Jodhpur is a minimum of 75% marks in the 10+2 examination or equivalent with Physics, Chemistry, and Mathematics as core subjects. Additionally, candidates need to clear the Joint Entrance Examination (JEE) Main and Advanced with a good rank.
                            </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="100">
                            <Link data-bs-toggle="collapse" data-bs-target="#faq2" className="collapsed">
                            <strong>What is the selection process for the Chemical Engineering program at IIT Jodhpur?</strong> <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-x icon-close"></i>
                            </Link>
                            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            The selection process for the Chemical Engineering program at IIT Jodhpur is based on the candidate's performance in the JEE Main and Advanced exams. Shortlisted candidates are then called for counseling and final admission is granted based on the candidate's rank, availability of seats, and other factors.
                            </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200">
                            <Link data-bs-toggle="collapse" data-bs-target="#faq3" className="collapsed">
                            <strong>What are the research areas in the Chemical Engineering department at IIT Jodhpur?</strong> <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-x icon-close"></i>
                            </Link>
                            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            The research areas in the Chemical Engineering department at IIT Jodhpur include Nanotechnology, Catalysis, Renewable Energy, Process Intensification, and Polymer Science.
                            </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="300">
                            <Link data-bs-toggle="collapse" data-bs-target="#faq4" className="collapsed">
                            <strong>Can I pursue a master's degree in Chemical Engineering after completing my undergraduate program at IIT Jodhpur?</strong> <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-x icon-close"></i>
                            </Link>
                            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            Yes, after completing the undergraduate program in Chemical Engineering at IIT Jodhpur, students can pursue a master's degree in Chemical Engineering or related fields from the same institute or other top institutions in India or abroad.
                            </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="200">
                            <Link data-bs-toggle="collapse" data-bs-target="#faq7" className="collapsed">
                            <strong>What are the programs offered by the Department of Chemical Engineering at IIT Jodhpur?</strong> <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-x icon-close"></i>
                            </Link>
                            <div id="faq7" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            The Department of Chemical Engineering offers five degree programs as part of the undergraduate and postgraduate curriculum, namely: B.Tech in Chemical Engineering, B.Tech in Chemical Engineering with Specialization, M.Tech in Chemical Engineering, Dual Degree M.Tech-Ph.D in Chemical Engineering and Ph.D in Chemical Engineering.
                            </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="400">
                            <Link data-bs-toggle="collapse" data-bs-target="#faq5" className="collapsed">
                            <strong>Are there any internships or industrial training opportunities available for Chemical Engineering students at IIT Jodhpur?</strong> <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-x icon-close"></i>
                            </Link>
                            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            Yes, there are many internships and industrial training opportunities available for Chemical Engineering students at IIT Jodhpur. The department has tie-ups with many top companies, and students are encouraged to take up internships and training programs to gain practical experience.
                            </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="500">
                            <Link data-bs-toggle="collapse" data-bs-target="#faq6" className="collapsed">
                            <strong>Is there any provision for financial assistance or scholarships for Chemical Engineering students at IIT Jodhpur?</strong> <i className="bx bx-chevron-down icon-show"></i>
                                <i className="bx bx-x icon-close"></i>
                            </Link>
                            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
                            <p>
                            Yes, there are many provisions for financial assistance and scholarships for Chemical Engineering students at IIT Jodhpur. The institute offers various scholarships like the Institute Merit-cum-Means Scholarship, SC/ST Scholarship, and Inspire Scholarship to deserving students.
                            </p>
                            </div>
                        </li>
                        <li data-aos="fade-up" data-aos-delay="500">
                            <a href="http://academics.iitj.ac.in/?page_id=749" target="_blank">More FAQ's</a>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}


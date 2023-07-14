import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Newsletter() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>News And Newsletter</h2>
                </div>
            </div>
            <section id="newsletter" className="newsletter">
                <div className="container-fluid p-0" data-aos="fade-up">
                    <div className="content d-flex flex-column justify-content-center h-100">
                        <ul>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/Rolling%20Advt.%20Ph.D.%202023_13032023.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Rolling advertisement for Admission to Ph.D. Programmes</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/Advertisment_Mtech_Mtech%20phd_revised_12032023.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Admission to M.Tech. and M.Tech.-Ph.D Dual Degree Programmes, AY 2023-24</Link></li>
                            <li><Link aria-current="page" to="https://online.fliphtml5.com/tkrsq/hptp/" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Departmental Newsletter - Vol. 2, No. 2, 2022</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_Jan23_Meritlist_document-2022-11-25-17-54-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>PhD Admissions AY 22-23 Sem II (Jan 2023): Results</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_Jan23_ShortList_document-2022-11-04-16-52-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>PhD Admissions AY 22-23 Sem II (Jan 2023): Shortlisted Candidates for Interview</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/CEP_Final_Brochure_document-2022-09-02-8-20-am.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>A Short-term Continuing Education Program (CEP) Course on Data Analytics and Fundamentals of Machine Learning (ML) for Process Modelling</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/Newsletter_H12022_document-2022-07-06-0-35-am.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Departmental Newsletter - Vol. 2, No. 1, 2022</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/MTechPhD_July22_results_document-2022-06-14-12-19-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>MTech-PhD Admissions AY 22-23 Sem I (July 2022): Results</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_July22_MeritList_document-2022-06-11-0-00-am.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>PhD Admissions AY 22-23 Sem I (July 2022): Results</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/MTech_July22_SelfSpons_document-2022-06-11-0-23-am.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>MTech Self Sponsored Admissions: Results</Link></li>
                            <li><i className="bi bi-check-circle-fill"></i>Admission to MTech-PhD Program in Chemical Engineering (AY2022-23 Sem I): THE LIST OF CANDIDATES PROVISIONALLY SHORTLISTED FOR INTERVIEW</li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_admissions_2022_23_(sem%201)_document-2022-05-12-9-06-am.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Admission to Ph.D. Program in Chemical Engineering (AY2022-23 Sem I): THE LIST OF CANDIDATES PROVISIONALLY SHORTLISTED FOR INTERVIEW</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/academics/misc.php?id=advertisements" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Admission to Ph.D. Program</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/academics/misc.php?id=advertisements" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>MTech and MTech-PhD Admission</Link></li>
                            <li><i className="bi bi-check-circle-fill"></i>Welcome to the new faculty members: Dr. sumit Kamal & Dr. Tara Chand Kumawat</li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/Newsletter_Q42021_corr_document-2022-03-21-15-13-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Departmental Newsletter - Vol. 1, No. 4, 2021 (Q4)</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/AY2021-22%20S2_PhD_Shortlist_document-2021-10-29-19-51-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Admission to Ph.D. Program in Chemical Engineering (AY2021-22 Sem II): THE LIST OF CANDIDATES PROVISIONALLY SHORTLISTED FOR INTERVIEW</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/Newsletter_Q321_document-2021-10-08-17-13-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Departmental Newsletter - Vol. 1, No. 3, 2021 (Q3)</Link></li>
                            <li><Link aria-current="page" to="https://oa.iitj.ac.in/Rnd_Advertisement/IITJ_RD_2021-22_28.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>JRF Position Available with Dr. Deepak Arora</Link></li>
                            <li><i className="bi bi-check-circle-fill"></i>Welcome to the new faculty member Dr. Abhilasha Maheshwari</li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/Q2_21_document-2021-07-12-16-46-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Departmental Newsletter - Vol. 1, No. 2, 2021 (Q2)</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_July2021_document-2021-06-28-21-44-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>List of selcted candidates for admission into Ph.D. Program in Chemical Engineering for July 2021 session (AY 2021-22 Semester I)</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/MTechPhD_MeritJuly2021_document-2021-06-28-21-20-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>List of selected candidates for admission into M.Tech.-Ph.D. Program in Chemical Engineering for July 2021 session (AY 2021-22 Semester I)</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/MTechPhD_WLJuly2021_document-2021-06-28-21-35-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>List of wait listed candidates for admission into M.Tech.-Ph.D. Program in Chemical Engineering for July 2021 session (AY 2021-22 Semester I)</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/MTech_SelfSpon_Corr_document-2021-06-24-16-30-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>List of selcted candidates for admission into M.Tech Program (Self-Sponsored Category) in Chemical Engineering for session July 2021</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/research/index.php?id=temporary_appointments" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Project Staff Recruitment: Junior Research Fellow</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/Newsletter_Q12021_document-2021-03-31-11-39-am.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Departmental Newsletter - Vol. 1, No. 1, 2021</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_Dec2020_selected_mainlist_document-2021-01-25-13-42-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Admission to Ph.D. Program (Dec 2020) in Chemical Engineering - UPDATE: List of the candidates provisionally selected for admission</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_Dec2020_selected_waitlist_document-2021-01-25-13-52-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Admission to Ph.D. Program (Dec 2020) in Chemical Engineering - UPDATE: List of the candidates waitlisted for admission</Link></li>
                            <li><Link aria-current="page" to="https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD%20Shortlist%20Dec2020_updated_document-2020-12-24-23-55-pm.pdf" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>UPDATE - Admission to Ph.D. Program in Chemical Engineering: THE LIST OF CANDIDATES PROVISIONALLY SHORTLISTED FOR INTERVIEW</Link></li>
                            <li><i className="bi bi-check-circle-fill"></i>Dr. Angan Sengupta's DST-SERB project "Designing of Potential Adsorbents via Molecular Modelling and Simulations for the High-Temperature Carbon Dioxide Capture"  has been successfully transferred to the Chemical Engineering Department at IIT Jodhpur.</li>
                            <li><i className="bi bi-check-circle-fill"></i>Congrats to Dr. Angan Sengupta for his seed grant approval</li>
                            <li><Link aria-current="page" to="https://www.taylorfrancis.com/books/mono/10.1201/9781315101514/advanced-water-technologies-tewari" target="_blank" rel="noopener noreferrer"><i className="bi bi-check-circle-fill"></i>Prof. Pradip K Tewari recently published a textbook titled "Advanced Water Technologies Concepts and Applications" which provides great insights into water technologies.</Link></li>
                            <li><i className="bi bi-check-circle-fill"></i>Welcome to new faculty members: Dr. Prashant Kumar Gupta, Dr. Vikky Anand, Dr. Nirmalya Bachhar, and Dr. Praveen Kumar Sappidi</li>

                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

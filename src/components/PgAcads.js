import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function PgAcads() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>PostGraduate Program</h2>
                </div>
            </div>
            <br></br><br></br>
            <div className='container'>
                <p style={{textAlign:"justify"}}>The Department of Chemical Engineering offers the following Postgraduate Programs:</p>
                <div className='container'>
                    <p><span style={{fontWeight:'bold'}}>Master of Technology Program:  M.Tech. in Chemical Engineering</span></p>
                    <p><span style={{fontWeight:'bold'}}>Master of Technology-Doctor of Philosophy Dual Degree Program: M.Tech.-Ph.D. Dual Degree in Chemical Engineering</span></p>
                </div>
                <p style={{textAlign:"justify"}}>Through the M.Tech. and M.Tech-Ph.D. programs in Chemical Engineering, IIT Jodhpur is making a conscious effort to divulge from the traditional path and planning to establish itself to become a leading institute in this new genre of Chemical Engineering education. The program involves a mix of traditional courses followed by electives to specialize in the three chosen areas; i) Industry 4.0+Data Analytics; ii) Reaction Engineering; iii) Petroleum and Petrochemicals. Further, the project component ensures hands-on problem-solving skills to enable solving industrial problems as well as undertake research in the different areas of chosen field.</p>
            </div>
            <br></br>
            <div className='container'>
                <h4><span style={{fontWeight:'bold'}}>Program Objective & Attributes:</span></h4>
                <div className='container'>
                    <p>The key objectives of the program are:</p>
                    <ul><span class='bi bi-caret-right-fill'> In-depth knowledge of chemical engineering and critical awareness of emerging areas such as artificial intelligence (AI), machine learning (ML), internet of things (IoT) and data analytics in Chemical Engineering including intelligent process optimization and production simulation.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Analytical and experimental skills required for new processes and new products with 3D printing, chemometrics and Industry 4.0 in chemical companies.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Strong fundamentals in traditional chemical engineering.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Ability to do critical and creative thinking, and to conduct independent and original research and scholarship.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Ability to apply existing skills and knowledge to identify and formulate new problems, produce new ideas, approaches or actions.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Ability to teach and express ideas in both written and oral formats.</span></ul>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <h4><span style={{fontWeight:'bold'}}>Learning Outcomes:</span></h4>
                <div className='container'>
                    <p>At the end of the program, a student is expected to have:</p>
                    <ul><span class='bi bi-caret-right-fill'> Skills for translation of in-depth knowledge of artificial intelligence (AI), machine learning (ML), internet of things (IoT), Internet of Cleanliness and data analytics for chemical engineering systems.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Ability to design and develop new products and new processes with the knowledge of 3D printing, chemometrics and Industry 4.0 in chemical companies including intelligent process optimization and production simulation.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Ability to statistically characterize and evaluate the performance of process systems.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Ability to apply the different methods for chemical engineering challenges and advanced research.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Carry out research work demonstrating scientific problem solving and generate IPR.</span></ul>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/PG_Curriculum_document-2020-10-29-12-29-pm.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'>  Detailed Curriculum for M.Tech. Chemical Engineering</span></Link></ul>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/PG_Curriculum_document-2020-10-29-12-29-pm.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'>  Detailed Curriculum for M.Tech.-Ph.D. Dual Degree Chemical Engineering</span></Link></ul>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/Regulation/Academic_Regulations_Final_03_09_2019.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'> Academic Regulations for Postgraduate Programs</span></Link></ul>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_Comprehensive_document-2021-08-25-1-03-am.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'> Course Content for PhD Comprehensive Examination</span></Link></ul>
            </div>
            <br></br><br></br>
        </>
    )
}

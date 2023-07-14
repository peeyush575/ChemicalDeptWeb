import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function DocAcads() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Doctoral Program</h2>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <p>The Department of Chemical Engineering offers the following Doctoral Programs:</p>
                <div className='container'>
                    <p><span style={{fontWeight:'bold'}}>Master of Technology-Doctor of Philosophy Dual Degree Program: M.Tech.-Ph.D. Dual Degree in Chemical Engineering</span></p>
                    <p><span style={{fontWeight:'bold'}}>Doctor of Philosophy Programs: Ph.D. Chemical Engineering</span></p>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <div className='container'>
                <p style={{textAlign:"justify"}}>Doctor of Philosophy in Chemical Engineering is focussed in a manner so that research scholar masters the different skills required for the research work, creatively shape and solve the complex problems, translate molecular information into new products and processes, generate new research ideas and IPR. The focus of the doctoral research  would be:</p>
                    <ul><span class='bi bi-caret-right-fill'> Translate molecular information to new products and processes with 3D printing and Industry 4.0+.</span></ul>
                    <ul><span class='bi bi-caret-right-fill'> Generate new research ideas and IPR.</span></ul>
                </div>
            </div>
            <br></br>
            <div className='container'>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/PG_Curriculum_document-2020-10-29-12-29-pm.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'>  Detailed Curriculum for M.Tech.-Ph.D. Dual Degree Chemical Engineering</span></Link></ul>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/PhD_Comprehensive_document-2021-08-25-1-03-am.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'> Course Content for PhD Comprehensive Examination</span></Link></ul>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/Regulation/Academic_Regulations_Final_03_09_2019.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'> Academic Regulations for Doctoral Programs</span></Link></ul>
            </div>
            <br></br><br></br>
        </>
    )
}

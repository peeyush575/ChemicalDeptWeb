import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function UgAcads() {
    return (
        <>
        <Navbar/>
        <div className="breadcrumbs" data-aos="fade-in">
            <div className="container">
                <h2>UnderGraduate Program</h2>
            </div>
        </div>
        <div className='container'>
            <br></br><br></br>
            <h3><span style={{fontWeight:'bold'}}>Bachelor of Technology Programs:</span></h3>
            <div className='container'>
                <p><span style={{fontWeight:'bold'}}>B. Tech. in Chemical Engineering</span></p>
                <p><span style={{fontWeight:'bold'}}>Double B.Tech. in Chemical Engineering and Engineering Science</span></p>
                <p style={{textAlign:"justify"}}>Engineering disciplines have become increasingly interdisciplinary in nature and Chemical Engineering is not an exception to that. The flexibility of opting for different specialization is ingrained in formulating the structure and curriculum of the Chemical Engineering program. Traditionally, Chemical Engineering teaching is focused on transport phenomena, chemical engineering thermodynamics, mass transfer, fluid mechanics, heat transfer, chemical kinetics, computational systems, and process control. With the advent of the era of Artificial Intelligence (AI), Machine Learning (ML), Molecular Engineering, Industry 4.0 in Chemical Plants; the discipline is being transformed by the incorporation of new emerging technologies. Through this Under-Graduate (UG) program in Chemical Engineering, IIT Jodhpur is making a conscious effort to divulge from the traditional path and planning to establish itself to become a leading institute in this new genre of Chemical Engineering education, which includes foundational courses, fundamental courses in chemical engineering, emerging areas in chemical engineering, and sustainability aspects for chemical engineers.</p>
                <p style={{textAlign:"justify"}}>The undergraduate program begins with students pursuing a common foundation in mathematics, physics, chemistry, engineering sciences, engineering design, and programming. Students are expected to build on these foundations with a concentration on core chemical engineering subjects ranging from material and energy balance, process control, chemical engineering thermodynamics to chemical reaction engineering. Core courses are followed by a set of departmental electives that enable students to target their degree program towards in-depth knowledge of areas matching their specific interests. The program ensures that the design experience, which includes both analytical studies and experiments, is integrated throughout the curriculum in a structured manner leading to advanced work. Students can tailor their focus areas in consultation with a faculty advisor. Students can choose their departmental electives (streams) from the following areas:</p>
                <ul><span class='bi bi-caret-right-fill'> Chemical Engineering Design</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Process Engineering Intelligence</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Molecular Engineering</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Sustainability</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Complex Fluids & Interfacial Engineering</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Biochemical Engineering</span></ul>
            </div>
        </div>
        <br></br>
        <div className='container'>
            <h4><span style={{fontWeight:'bold'}}>Program Objective & Attributes:</span></h4>
            <div className='container'>
                <p>The key objectives of the program are:</p>
                <ul><span class='bi bi-caret-right-fill'> Enable students to have fundamental understanding of the core concepts of Chemical Engineering.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Offer opportunities for specialization in emerging and multidisciplinary areas including Molecular Engineering, Data Science and AI applications, Polymer Engineering, Sustainability, Biochemical Engineering and Complex Fluids & Interfacial Engineering.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Empower students with emerging concepts for plant design in context of chemical engineering via courses designed with AI, ML, and Industry 4.0 applications.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Integrate analytical and computational ability with experimental skills to create individuals competent in professional engineering practices in the domain of Chemical.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Inculcate an attitude towards commitment to engineering ethics, leadership qualities, entrepreneurship and professional development.</span></ul>
            </div>
        </div>
        <br></br>
        <div className='container'>
            <h4><span style={{fontWeight:'bold'}}>Learning Outcomes:</span></h4>
            <div className='container'>
                <p>Graduates of the B.Tech. program in Chemical Engineering will:</p>
                <ul><span class='bi bi-caret-right-fill'> Gain a strong understanding of mathematics, science and engineering fundamentals of Chemical engineering including the concepts of material and energy balance; computational methods; transport phenomena; reaction engineering; mass transfer; thermodynamics; heat transfer; fluid mechanics and process control.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Have the ability to design a process equipment or plant to meet desired requirements under socio-economic and environmental constraints.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Be equipped with knowledge of emerging domains: (i) Data Science & AI applications; (ii) Molecular Engineering.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Have technical capability for addressing sustainability issues related to water, energy and environment.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Receive effective hands-on laboratory training as a part of laboratory courses and short-term research projects, and be able to design and conduct experiments as well as to analyse and interpret data.</span></ul>
                <ul><span class='bi bi-caret-right-fill'> Develop their communication skills by participating in classroom presentations, entrepreneurial events, seminars and workshops.</span></ul>
            </div>
        </div>
        <br></br>
        <div className='container'>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/dept_upload/cml/UG_Curriculum_document-2020-11-11-17-01-pm.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'>  Detailed Curriculum for B.Tech. Chemical Engineering</span></Link></ul>
                <ul><Link aria-current="page" to='http://academics.iitj.ac.in/?page_id=415' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'> Program Structure of B.Tech. Chemical Engineering</span></Link></ul>
                <ul><Link aria-current="page" to='https://iitj.ac.in/uploaded_docs/Regulation/Academic_Regulations_Final_03_09_2019.pdf' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'> Academic Regulations for Undergraduate Programs</span></Link></ul>
                <ul><Link aria-current="page" to='http://academics.iitj.ac.in/?page_id=379#1_Specializations_MinorsSpecialization/Minor%20Options%20for%20B.Tech.%20(CH)' target="_blank" rel="noopener noreferrer"><span class='bi bi-file-pdf-fill'> Specialization / Minor / Dual Degree</span></Link></ul>
        </div>
        <br></br><br></br>
        </>
    )
}

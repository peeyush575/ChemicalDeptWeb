import React, { useRef, useState } from 'react';
import {message } from 'antd';
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';

export default function FooterComp() {
    const [isValid, setIsValid] = useState(false);
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        const formFields = form.current.elements;
        const isEmpty = Array.from(formFields).some((field) => !field.value.trim());
        if (isEmpty) {
            setIsValid(false);
            warning();
            return;
        }
        emailjs.sendForm('service_tshpbrb', 'template_u5iam6l', form.current, '_emESdC9xiudXx0RY')
            .then((result) => {
                success();
                e.target.reset();
            }, (warning) => {
                warning();
                e.target.reset();
            });
    };
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
        messageApi
            .open({
            type: 'loading',
            content: 'Action in progress..',
            duration: 2.0,
            })
            .then(() => message.success('Thank you for Subscribing!', 2.5))
    };
    const warning = () => {
        messageApi
            .open({
            type: 'warning',
            content: 'Action in progress..',
            duration: 2.0,
            })
            .then(() => message.warning('Please fill the required field', 2.5))
    };
    const handleClick = () => {
        if (isValid) {
            success();
        } else {
            warning();
        }
    };
    return (
        <>
            {contextHolder}
            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3><strong>Contact Us</strong></h3>
                                <p>Department of Chemical Engineering </p>
                                <p>Anantharman Building</p>
                                <p>Indian Institute of Technology Jodhpur</p>
                                <p>NH-62, Nagaur Road, Karwar, Jodhpur District</p>
                                <br/>
                                <strong>Phone:</strong> <Link aria-current="page" to="tel:+91-291-2801702">+91-291-2801702</Link><br />
                                <strong>Email:</strong> <Link aria-current="page" to="mailto: office_che@iitj.ac.inn">office_che@iitj.ac.in</Link><br />
                            </div>
                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="https://www.iitj.ac.in/" target="_blank" rel="noopener noreferrer">IIT Jodhpur</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="http://172.16.100.160:8080/ERP_IITJ/" target="_blank" rel="noopener noreferrer">Academic ERP</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="http://172.16.100.147:8081/servicedesk/customer/portal/2/user/login?destination=portal%2F2" target="_blank" rel="noopener noreferrer">CC HelpDesk</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="https://sites.google.com/iitj.ac.in/publicationsiitjodhpur/" target="_blank" rel="noopener noreferrer">Publications @ IITJ</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="https://library.iitj.ac.in/" target="_blank" rel="noopener noreferrer">Library: The Learning Hub</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="http://172.16.100.168:8080/jspui/handle/123456789/29" target="_blank" rel="noopener noreferrer">Bus Schedule</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Quick Picks</h4>
                                <ul>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="https://iitj.ac.in/footer/index.php?id=contact" target="_blank" rel="noopener noreferrer">Contact</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="http://172.16.100.168:8080/jspui/" target="_blank" rel="noopener noreferrer">Repository</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="https://iitjodhpur.kvs.ac.in/" target="_blank" rel="noopener noreferrer">KV IIT Jodhpur</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="https://iitj.ac.in/footer/index.php?id=how_to_reach_iit_jodhpur" target="_blank" rel="noopener noreferrer">How to reach IIT Jodhpur</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="https://sites.google.com/iitj.ac.in/cccd" target="_blank" rel="noopener noreferrer">Commemorative Days @ IIT Jodhpur</Link></li>
                                <li><i className="bx bx-chevron-right"></i> <Link aria-current="page" to="https://iitj.ac.in/infocus/index.php?id=Recruitments" target="_blank" rel="noopener noreferrer">Recruitments</Link></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Our Department publishes a quarterly newsletter.</p>
                                <form ref={form} onSubmit={sendEmail}>
                                    <input type="email" name="email" required/>
                                    <input type="submit" value="Subscribe" onClick={handleClick}/>
                                </form>
                                <div className="row">
                                    <img src={process.env.PUBLIC_URL + '/Images/150_years.jpeg'} className="img-fluid" alt="" style={{width:'34%',padding:'10px',margin:'5px 0px 0px 25px'}}/>
                                    <img src={process.env.PUBLIC_URL + '/Images/75_Years.jpeg'} className="img-fluid" alt="" style={{width:'40%',padding:'10px',margin:'5px 0px 0px 25px'}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container d-md-flex py-4">
                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy;2023 All Rights Reserved, <strong><span>IIT Jodhpur</span></strong>.
                        </div>
                        <div className="credits">
                            For any comments/enquiries/feedback, please eMail to the <a href="mailto: webmaster@iitj.ac.in">Webmaster</a>
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <Link aria-current="page" to="https://twitter.com/ChemEngg_IITJ" className="twitter" target="_blank" rel="noopener noreferrer"><i className="bx bxl-twitter"></i></Link>
                        <Link aria-current="page" to="https://www.facebook.com/ChemEngg.IITJ/" className="facebook" target="_blank" rel="noopener noreferrer"><i className="bx bxl-facebook"></i></Link>
                        <Link aria-current="page" to="https://www.instagram.com/chemengg_iitjodhpur/" className="instagram" target="_blank" rel="noopener noreferrer"><i className="bx bxl-instagram"></i></Link>
                        <Link aria-current="page" to="https://www.youtube.com/channel/UCFfCylvEDIB1IH4GaRVRyLA" className="youtube" target="_blank" rel="noopener noreferrer"><i className="bx bxl-youtube"></i></Link>
                        <Link aria-current="page" to="https://in.linkedin.com/company/dept-chem-engg-iit-jodhpur?original_referer=https%3A%2F%2Fwww.google.com%2F" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bx bxl-linkedin"></i></Link>
                    </div>
                </div>
            </footer>
        </>
    )
}
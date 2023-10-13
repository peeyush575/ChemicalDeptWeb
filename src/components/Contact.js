import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { message } from 'antd';
import emailjs from '@emailjs/browser';
import Navbar from './Navbar'

export const Contact = () => {
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
        emailjs.sendForm('service_tshpbrb', 'template_i17483c', form.current, '_emESdC9xiudXx0RY')
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
            type: 'success',
            content: 'Sending your message..',
            duration: 2.0,
            })
            .then(() => message.success('Your message has been sent. Thank you!', 2.7))
    };
    const warning = () => {
        messageApi
            .open({
            type: 'warning',
            content: 'Action in progress..',
            duration: 2.0,
            })
            .then(() => message.warning('Please fill all the required fields', 2.5))
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
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <section id="contact" className="contact">
                <div data-aos="fade-up">
                    <iframe title="Map" style={{border: "0", width: "100%", height: "350px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5536.928630493792!2d73.11298996038845!3d26.479769779417044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3941eb6948155ff7%3A0xa9e0e0bb6d7a1c5d!2sDepartment%20of%20Chemical%20Engineering%2C%20IIT%20JODHPUR!5e0!3m2!1sen!2sin!4v1677237121392!5m2!1sen!2sin" allowFullScreen></iframe>
                </div>
                <div className="container" data-aos="fade-up">
                    <div className="row mt-5">
                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                <Link aria-current="page" to="https://www.google.com/maps/dir//Department+of+Chemical+Engineering,+IIT+JODHPUR+F4H8%2BQPJ+Jheepasani,+Rajasthan+342027/@26.479463,73.1167625,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3941eb6948155ff7:0xa9e0e0bb6d7a1c5d!2m2!1d73.1167625!2d26.479463" target="_blank" rel="noopener noreferrer"><i className="bi bi-geo-alt"></i></Link>
                                    <h4>Location:</h4>
                                    <p>Department of Chemical Engineering </p>
                                    <p>Anantharman Building</p>
                                    <p>Indian Institute of Technology Jodhpur</p>
                                    <p>NH-62, Nagaur Road, Karwar, Jodhpur District</p>
                                </div>
                                <div className="email">
                                    <Link aria-current="page" to="mailto: office_che@iitj.ac.in" target="_blank" rel="noopener noreferrer"><i className="bi bi-envelope"></i></Link>
                                    <h4>Email:</h4>
                                    <p>office_che@iitj.ac.in</p>
                                    <p>head_che@iitj.ac.in</p>
                                </div>
                                <div className="phone">
                                    <Link aria-current="page" to="tel:+91-291-2801702"><i className="bi bi-phone"></i></Link>
                                    <h4>Call:</h4>
                                    <p>+91-291-2801702</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0 ">
                            <form ref={form} onSubmit={sendEmail} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" name="user_name" className="form-control" id="name" placeholder="Your Name" required/>
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" className="form-control" name="user_email" id="email" placeholder="Your Email" required/>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="text-center"><button type="submit" value="Send" onClick={handleClick}>Send Message</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};
export default Contact;

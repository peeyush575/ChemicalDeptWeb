import React from 'react'
import Navbar from '../Navbar'
export default function Surya_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Prof. (Emeritus) Surya Prakash Chandak</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Prof. (Emeritus) Surya Prakash Chandak</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Feb 20, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 04:00 PM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=m8b8e02b6ba046bb3bfece09ea72f4857'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>Speaker: Prof. (Emeritus) Surya Prakash Chandak</p>
                                    <p>Title: Sustainability Assessment of Technologies</p>
                                    <p>Date & Time: Feb 20, 2021, 04:00 PM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Prof. Surya Prakash Chandak is currently engaged as Professor Emeritus at Birla Institute of Management Technology and Mentor Environment. He has held positions as a Deputy Director International Environmental Technology Centre United Nations Environment Programme, also as a Director National Cleaner Production Centre India and Director (Environment) National Productivity Council India. Prof. Surya Prakash Chandak's major fields of specialization are Energy and Environment with a focus on energy efficiency and management, cleaner production, waste management, and environmental technologies. Prof. Chankdak has over 35 years of experience in the areas of consultancy, training, and advisory services in the field of energy and the environment. He has also contributed to the work of several international organizations such as the World Bank, Asian Productivity Organization, United Nations Industrial Development Organization, etc. as a senior expert. He has worked in over 50 countries and led the implementation of energy and environment-related measures in over 500 industrial organizations. Prof. Chandak educated as a Chemical Engineer with Post-graduation in energy efficiency with several publications in the concerned fields.</p>
                                    <blockquote>
                                    <p>Sustainability Assessment of Technologies- Expert talk by Prof. (Emeritus) Surya Prakash Chandak</p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>All technical persons focus primarily on the technical aspects while assessing and selecting a technology for any application. However, in today's time, it is quite important to assess all the sustainability aspects. While working with UNEP we developed this simple methodology through which we can assess different technology options with respect to sustainability aspects and accordingly facilitate decision making.</p>
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

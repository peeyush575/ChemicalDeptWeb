import React from 'react'
import Navbar from '../Navbar'
export default function Ravindra_talk() {
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
                                <h2 className="title">Chemical Engineering Department Webinar Series - Talk by Prof. Ravindra Gudi</h2>
                                <div className="meta-top">
                                    <ul>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-user"></i> Prof. Ravindra Gudi</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-calendar-days"></i>Aug 28, 2021</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-clock"></i> 11:00 AM</li>
                                    <li className="d-flex align-items-center"><i className="fa-solid fa-location-dot"></i><a href='https://iitjodhpur.webex.com/iitjodhpur/j.php?MTID=med9ce32d229dea787db3ccfe90212242'>Event Link</a></li>
                                    </ul>
                                </div>
                                <div className="content">
                                    <p>
                                    Speaker: Prof. Ravindra Gudi
                                    </p>
                                    <p>
                                    Title: Whither AI: Artificial or Augmented Intelligence? Can we do more?
                                    </p>
                                    <p>Date & Time: Aug 28, 2021, 11:00 AM</p>
                                    <h3>Speaker's Bio</h3>
                                    <p>Prof. Gudi is a professor at the Department of Chemical Engineering at IIT Bombay, and Professor-in-charge of the IIT Bombay Research Park Foundation. He is also the president of Automatic Control and Dynamic Optimization Society of India, an AI and ML Chair Professor, and former Head of the Department of Chemical Engineering at IIT Bombay. Prof. Gudi received his B.Tech from IIT Bombay and his PhD from University of Alberta, Canada. He has published more than 100 research articles. His research areas include Process Optimization, Process Control, Process Safety Analysis, Decomposition-based approaches for Optimization and Control, and Integration issues in Renewable Energy Generation. He has been awarded the Herdillia award for Excellence in Basic Research in Chemical Engineering, Distinguished Instrumental Professional Award by International Society of Automation, Manudhane Applied Research Award, Lovraj Kumar Memorial Award for promotion of Industry Academia Interaction, among others.</p>
                                    <blockquote>
                                    <p>
                                    Whither AI: Artificial or Augmented Intelligence? Can we do more? - Expert talk by Prof. Ravindra Gudi
                                    </p>
                                    </blockquote>
                                    <h3>Abstract</h3>
                                    <p>AI & ML based approaches to reconstruction & prediction, with a view to assist decision making, have re-emerged with a stronger potential and application spectrum. These approaches have relied quite heavily on the power of modelling tools, both statistical as well as other advanced AI based tools. However, in any decision making, there are considerations related to credibility and completeness of the information sources, which can additionally be brought in, to help in the AI and ML based modelling approaches. This talk will explore such possibilities and pose (perhaps awkward) questions on the adequacy of AI and ML approaches as they exist today. The talk will motivate alternate complementing modelling paradigms that may help to generate a relatively accurate reconstruction and prediction with a view to improved decision making. Illustrative examples in chemical engineering from industrial as well as academic literature will seek to reinforce some of the proposed ideas.</p>
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

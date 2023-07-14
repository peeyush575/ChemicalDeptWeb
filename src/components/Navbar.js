import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(){
    useEffect(() => {
        /**
         * Mobile nav toggle
         */
        const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        if (mobileNavToggle) {
            mobileNavToggle.addEventListener('click', function(event) {
                event.preventDefault();
                document.querySelector('body').classList.toggle('mobile-nav-active');
                this.classList.toggle('bi-list');
                this.classList.toggle('bi-x');
            });
        }

        /**
         * Toggle mobile nav dropdowns
         */
        const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');
        navDropdowns.forEach(el => {
            el.addEventListener('click', function(event) {
                if (document.querySelector('.mobile-nav-toggle').classList.contains('bi-x')) {
                    event.preventDefault();
                    this.classList.toggle('active');
                    this.nextElementSibling.classList.toggle('dropdown-active');
                    let dropDownIndicator = this.querySelector('.dropdown-indicator');
                    dropDownIndicator.classList.toggle('bi-chevron-up');
                    dropDownIndicator.classList.toggle('bi-chevron-down');
                }
            })
        });
    }, []);
    useEffect(() => {
        const navbar = document.getElementById('navbar');
        const header = document.getElementById('header');
        const headerHeight = header.clientHeight;
        const onScroll = () => {
            if (window.scrollY > headerHeight) {
                navbar.classList.add('navbar-fixed');
            } else {
                navbar.classList.remove('navbar-fixed');
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return(
        <>
            {/* <!-- ======= Header ======= --> */}
            <div className="body-wrapper">
                <div className="body-innerwrapper">
                    <header id="header" className="header fixed-top" data-scrollto-offset="0" style={{ background: '#ffffff' }}>
                        <div className="container-fluid " style={{backgroundColor:"#bcd0e3",marginTop:'-15px'}}>
                            <div className="container-inner">
                                <div className="row">
                                    <div id="sp-logo" className='col-4 col-lg-4'>
                                        <div className="sp-column">
                                            <div className="logo">
                                                <Link aria-current="page" to="/">
                                                    <div className='container'>
                                                        <img src={process.env.PUBLIC_URL + '/Images/IITDept.png'} alt="Dept_Image" style={{ margin:'-2px 0px 0px 45px', width: '90%', animation: 'pulse 2s infinite'}}/>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="sp-logo" className='col-8 col-lg-8'>
                                        <div className="sp-column">
                                            <div className="logo">
                                                <Link aria-current="page" to="https://iitj.ac.in/" target="_blank" rel="noopener noreferrer">
                                                <img src={process.env.PUBLIC_URL + '/Images/IITJ.png'} alt="Dept_Image" style={{ margin:'0px 0px 0px 250px', width: '90%', animation: 'pulse 2s infinite'}}  />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid d-flex align-items-center justify-content-between">
                            <nav id="navbar" className="navbar">
                                <ul>
                                    <li><Link aria-current="page" to="/"><span style={{ fontWeight: 'bold' }}>Home</span></Link></li>
                                    <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Faculty & Staff<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                        <ul>
                                            <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Faculty & Advisors</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                                <ul>
                                                <li><Link aria-current="page" to="/regularFaculty">Regular Faculty</Link></li>
                                                <li><Link aria-current="page" to="/scholarsResidence">Scholars-in-Residence</Link></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Staff</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                                <ul>
                                                <li><Link aria-current="page" to="/technicalStaff">Technical Staff</Link></li>
                                                <li><Link aria-current="page" to="/adminStaff">Administrative Staff</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Academics<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                        <ul>
                                            <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>UnderGraduate</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                                <ul>
                                                <li><Link aria-current="page" to="/ugAcads">UnderGraduate Program</Link></li>
                                                <li><Link aria-current="page" to="/ugPlacement">Placements for UG Students</Link></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>PostGraduate</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                                <ul>
                                                <li><Link aria-current="page" to="/pgAcads">PostGraduate Programs</Link></li>
                                                <li><Link aria-current="page" to="/pgPlacement">Placements for PG Students</Link></li>
                                                </ul>
                                            </li>
                                            <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Doctoral</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                                <ul>
                                                <li><Link aria-current="page" to="/doctoralAcads">Doctoral Programs</Link></li>
                                                <li><Link aria-current="page" to="/phDPlacement">Placements for PhD Students</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Research<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                        <ul>
                                            <li><Link aria-current="page" to="/researchArea">Research Areas & Labs</Link></li>
                                            <li class="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Projects</span> <i class="bi bi-chevron-down dropdown-indicator"></i></Link>
                                                <ul>
                                                <li><Link aria-current="page" to="/currProjects">Ongoing Projects</Link></li>
                                                <li><Link aria-current="page" to="/completedProjects">Completed Projects</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link aria-current="page" to="https://iitj.irins.org/faculty/index/Department+of+Chemical+Engineering" target="_blank" rel="noopener noreferrer">Publications</Link></li>
                                            <li><Link aria-current="page" to="/sponsorsColabs">Sponsors & Collaborators</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>News & Events<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                        <ul>
                                            <li><Link aria-current="page" to="/webinars">Webinars</Link></li>
                                            <li><Link aria-current="page" to="/newsLetter">News & Newsletter</Link></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><Link aria-current="page" to="#"><span style={{ fontWeight: 'bold' }}>Resources<i className="bi bi-chevron-down dropdown-indicator"></i></span></Link>
                                        <ul>
                                            <li><Link aria-current="page" to="/infoComp">Info for Companies</Link></li>
                                            <li><Link aria-current="page" to="/corpBrochure">Corporate Relations</Link></li>
                                            <li><Link aria-current="page" to="/donate">Donate</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link aria-current="page" to="/contact"><span style={{ fontWeight: 'bold' }}>Contact</span></Link></li>
                                    <li><Link aria-current="page" to="/faq"><span style={{ fontWeight: 'bold' }}>FAQ</span></Link></li>
                                </ul>
                                <i className="bi bi-list mobile-nav-toggle d-none"></i>
                            </nav>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}
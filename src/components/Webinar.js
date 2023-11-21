import React, { useState } from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Webinar() {
    const [visibleWebinars, setVisibleWebinars] = useState(3);

    const handleViewMore = () => {
        setVisibleWebinars((prevVisibleWebinars) =>
            Math.min(prevVisibleWebinars + 3, webinars.length)
        );
    };

    return (
        <>
            <Navbar />
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Webinars & Talks</h2>
                </div>
            </div>
            <section
                className="team"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-duration="500"
            >
                <div className="container">
                    <div className="row">
                        {webinars.slice(0, visibleWebinars).map((webinar, index) => (
                            <div
                                key={index}
                                className="col-lg-4 col-md-6 d-flex align-items-stretch"
                            >
                                <div className="member">
                                    <div className="member-info">
                                        <Link
                                            aria-current="page"
                                            to={`/webinar-${index + 1}`}
                                        >
                                            <h4>{webinar.title}</h4>
                                        </Link>
                                        <h6
                                            style={{
                                                fontWeight: 'bold',
                                                color: 'black',
                                            }}
                                        >
                                            {webinar.speaker}
                                        </h6>
                                        <p>
                                            <i className="fa-solid fa-calendar-days"></i>{' '}
                                            {webinar.date}
                                        </p>
                                        <p
                                            style={{
                                                textAlign: 'justify',
                                            }}
                                        >
                                            {webinar.abstract}
                                        </p>
                                        <hr></hr>
                                        <Link
                                            aria-current="page"
                                            to={`/webinar-${index + 1}`}
                                        >
                                            <span>
                                                Read More{' '}
                                                <i className="bi bi-arrow-right"></i>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {visibleWebinars < webinars.length && (
                        <div className="text-center mt-4">
                            <button className="btn btn-primary" onClick={handleViewMore}>
                                View More
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
// Sample data for webinars
const webinars = [
    {
        title: 'Process Safety in Hydrogen Projects',
        speaker: 'Mr. Gottimukkala Chaitanya',
        date: 'Oct 19, 2022',
        abstract:
            'This talk will cover the fundamentals of process safety and hazard analysis throughout a facility lifecycle, and design categories that must be considered. A case study on a past incident involving hydrogen will be discussed...',
    },
    {
        title: 'Role of Chemical Engineering in the Department of Atomic Energy',
        speaker: 'Speakers: Prof. D. Mandal & Dr. Sandeep K.C.',
        date: 'Sept 1, 2022',
        abstract:
            'Speakers: Prof. D. Mandal, Head, Alkali Material & Metal Division, Bhabha Atomic Research Centre, Trombay, Mumbai, and Dr. Sandeep K.C., Senior Scientist, Heavy Water Division, Bhabha Atomic Research Centre, Trombay, Mumbai...',
    },
    {
        title: 'Correlating the properties and structure of semicrystalline polymers: Case of regenerated cellulose fibers',
        speaker: 'Speaker: Dr. Aakash Sharma',
        date: 'June 30, 2022',
        abstract:
            'Abstract: Semicrystalline polymers have complex microstructures ordered across length scales. Spinning these polymers into fibers from melt or solution adds molecular orientation. Microstructure controls polymer properties...',
    },
    {
        title: 'Energy from Blast Furnace Gas: Role of Chemical Kinetics for the Development of a Fuel-Flexible Burner',
        speaker: 'Speaker: Dr. Manisha Padwal',
        date: 'June 1, 2022',
        abstract:
            'Abstract: Blast furnace gas (BFG) is an important residual gas formed in the blast furnace in steel making processes. They are industrially important gases because of their calorific value and the large volumes produced...',
    },
    {
        title: 'On the Detection and Removal of pollutants from water: Nanoparticles and Hybrids to the Rescue',
        speaker: 'Speaker: Dr. Rajdip Bandyopadhyaya',
        date: 'May 20, 2022',
        abstract:
            'Abstract: Taking recourse to nanoparticles and their hybrids in making more functionally efficient materials for sustainable solutions is a modern theme across several disciplines of science and engineering...',
    },
    {
        title: 'Rapidly-growing Seawater Desalination and the Challenges to New Technical Issues',
        speaker: 'Speaker: Dr. Masaru Kurihara',
        date: 'May 17, 2022',
        abstract:
            'Abstract: In this seminar, Dr. Masaru Kurihara will provide an overview of brine mining to obtain precious materials from the brine of SWRO. This plan will be connected to water and green hydrogen for a sustainable future...',
    },
    {
        title: 'Engineered Living Materials and Smart Microdevices',
        speaker: 'Speaker: Dr. Sarvesh Srivastava',
        date: 'Mar 11, 2022',
        abstract:
            'Abstract: Over the past two decades, rapid advances in science and engineering have enabled us to manipulate matter down to the atomic level. Today, there is a diverse range of nano/microfabrication techniques capable of producing small-scale functional materials and devices...',
    },
    {
        title: 'Patent Training',
        speaker: 'Speaker: Dr. Jessica Zimberlin Eastman',
        date: 'Oct 10, 2021',
        abstract:
            'Abstract: In this seminar, Dr. Jessica Eastman will provide an overview of the patent system from a global perspective with some focus on the US patent system. Topics that will be addressed include ...',
    },
    {
        title: 'Thermal Encapsulation of the Functional Materials and their Device Applications',
        speaker: 'Speaker: Dr. Rajaram K Nagarale',
        date: 'Sept 29, 2021',
        abstract:
            'Abstract: Functionalisation of the electrode material without compromising their electrochemical properties is a challenging task. Covalent functionalisation increases the ohmic resistance of the system and hence poor performance...',
    },
    {
        title: 'Whither AI: Artificial or Augmented Intelligence? Can we do more?',
        speaker: 'Speaker: Prof. Ravindra Gudi',
        date: 'Aug 28, 2021',
        abstract:
            'Abstract: AI & ML based approaches to reconstruction & prediction, with a view to assist decision making, have re-emerged with a stronger potential and application spectrum. These approaches have relied quite heavily on the power of modelling tools, both statistical as well as other advanced AI based tools...',
    },
    {
        title: 'Materials pathfinding for electronics applications',
        speaker: 'Speaker: Dr. Nachiket Raravikar',
        date: 'July 17, 2021',
        abstract:
            'Abstract: This talk aims at describing the nature of industrial research from the perspective of a Materials Scientist. Industrial or “applied” research is often called as ‘Pathfinding’, which falls approximately between academic or early-stage research, and product development or high-volume manufacturing (HVM)...',
    },
    {
        title: 'Phase Equilibria Using Monte Carlo Simulation Techniques',
        speaker: 'Speaker: Prof. Jhumpa Adhikari',
        date: 'Apr 4, 2021',
        abstract:
            'Abstract: Understanding phase behaviour is crucial for the design and modelling of separation processes. The present seminar includes a cost-effective and powerful tool to study this phase behaviour study for pure substances and for mixtures. Molecular Simulation using efficient algorithms provides an accurate way to explore real system phase behaviour...',
    },
    {
        title: 'Spatio-temporal Stability Analysis of the Flow on a Vertical Cylinder',
        speaker: 'Speaker: Prof. Naveen Tiwari',
        date: 'Mar 20, 2021',
        abstract:
            'Abstract: The isothermal flow of a thin film over a vertical cylinder is inherently unstable, and the film breaks down into beads in the flow direction. This Rayleigh-Plateau instability is significantly affected by thermal effects. In this talk, the gravity-driven flow of a thermoviscous liquid on the exterior surface of a uniformly heated or cooled vertical cylinder will be discussed...',
    },
    {
        title: 'Sustainability Assessment of Technologies',
        speaker: 'Speaker: Prof. (Emeritus) Surya Prakash Chandak',
        date: 'Feb 20, 2021',
        abstract:
            'Abstract: All technical persons focus primarily on the technical aspects while assessing and selecting a technology for any application. However, in today\'s time, it is quite important to assess all the sustainability aspects. While working with UNEP we developed this simple methodology through which we can assess different technology options with respect to sustainability...',
    },
    {
        title: 'Air Pollution and Wastewater Management of Jodhpur',
        speaker: 'Speaker: Prof. Pradip Tewari',
        date: 'Jan 30, 2021',
        abstract:
            'Abstract: A Seminar on \'Air Pollution and Wastewater Management of Jodhpur\' jointly organised by the Jodhpur Industries Association (JIA) and Jodhpur City Knowledge and Innovation Cluster (JCKIC) in collaboration with IIT Jodhpur on 30 January 2021 at Hotel Zone in Jodhpur...',
    },
    {
        title: '3D Printing of Waste-Derived High Density Polyethylene',
        speaker: 'Speaker: Prof. Guruswamy',
        date: 'Jan 20, 2021',
        abstract:
            'Abstract: Speaker will provide a broad overview of sustainability in the context of polymeric materials, and how plastic waste is managed. Prof. Guruswamy will then discuss how a waste-to-wealth route that converts waste plastic into 3D printing filament and about the challenges associated with 3D printing of semicrystalline polymers. In 3D printing, objects are built up by sequential layer-by-layer deposition of material...',
    },
    {
        title: 'Artificial Intelligence Applications in Process Control',
        speaker: 'Speaker: Dr. K Yamuna Rani',
        date: 'Jan 1, 2021',
        abstract:
            'About Speaker: Dr. K Yamuna Rani received Ph.D. in chemical engineering from the IIT, Madras, and has been with IICT since 1990. She is currently the chief scientist and group leader of Process Dynamics and Control Group & Artificial Intelligence Group at IICT, Hyderabad. She is also a Professor in Engineering Sciences at AcSIR...',
    },
];

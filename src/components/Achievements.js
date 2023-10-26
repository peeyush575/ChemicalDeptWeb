import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function Achievements() {
    return (
        <>
            <Navbar/>
            <div className="breadcrumbs" data-aos="fade-in">
                <div className="container">
                    <h2>Achievements</h2>
                </div>
            </div>
            <section id="features" className="features">
                <div className="container" data-aos="fade-up">
                    <div className="col-lg-3 col-md-4">
                        <div className="icon-box">
                            <h3>To be Updated</h3>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

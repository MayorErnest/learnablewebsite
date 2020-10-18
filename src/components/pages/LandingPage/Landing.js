import React from 'react';
import './Landing.css';
import {FaPlayCircle } from 'react-icons/fa';

function Landing() {
    return (
        <div className="landing-container">
            <section className="section-one">
                <div className="one-a">
                    <h1>Genesys provides opportunities for<br /> 
                        young Nigerian techies and<br />
                        opportunities to grow and innovate.</h1>
                    <p>We understand that opportunities are 
                        scarce in these parts.<br />
                        We are either creating or exposing our people 
                        to these opportunities.</p>
                </div>
                <div className="one-b">
                    <div>
                        <img src='./landing1a.png' alt="landing1a"/>
                    </div>
                    <div>
                        <FaPlayCircle />
                    </div>
                </div>
            </section>
            <section className="landing-section section-two">
                <div className="section-image">
                    <img src='./landing2.png' alt="landing2"/>
                </div>
                <div className="section-text">
                    <h1 className="section-text-header">Learnable</h1>
                    <p className="section-text-para">
                    Every year, young Nigerians are launching new careers
                    in the technology industry.
                    Find out how Genesys is helping them do it.
                    </p>
                    <p><a href="/">LEARN MORE</a></p>
                </div>
            </section>

            <section className="landing-section section-three">
                <div className="section-text">
                    <h1 className="section-text-header">Agora</h1>
                    <p className="section-text-para">
                    We are reimagining the workplace and how people work. 
                    Find out how our co working spaces can help you enjoy
                     the work that you do.
                    </p>
                    <p><a href="/">LEARN MORE</a></p>
                </div>
                <div className="section-image">
                    <img src='./landing3.png' alt="landing3"/>
                </div>
            </section>

            <section className="landing-section section-four">
                <div className="section-image">
                    <img src='./landing4.png' alt="landing4"/>
                </div>
                <div className="section-text">
                    <h1 className="section-text-header">StartZone</h1>
                    <p className="section-text-para">
                    The business environment is harsh for 
                    early stage businesses. 
                    We can help you rise above it all.
                    </p>
                    <p><a href="/">LEARN MORE</a></p>
                </div>
            </section>

            <section className="landing-section section-five">
                <div className="section-grid">
                    <div className="grid-item">
                        <img src="./landinggrid1.png" alt="landinggrid" />
                    </div>
                    <div className="grid-item">
                        <h3><a href="/">Genesys <br />Ignite</a></h3>
                    </div>
                    <div className="grid-item">
                        <img src="./landinggrid2.png" alt="landinggrid" />
                    </div>
                    <div className="grid-item">
                        <img src="./landinggrid3.png" alt="landinggrid" />
                    </div>
                </div>
                <div className="section-text">
                    <h1 className="section-text-header">Other things we do</h1>
                </div>
            </section>

            <section className="landing-section section-six">
                <div className="section-image">
                    <img src='./landing6.png' alt="landing6"/>
                </div>
                <div className="section-text">
                    <h1 className="section-text-header">The Best Team In The World</h1>
                    <p className="section-text-para">
                    We work with the most amazing people 
                    our industry has to offer. 
                    They are really passionate about making a difference.
                    </p>
                    <p><a href="/">SEE TEAM</a></p>
                </div>
            </section>
        </div>
    )
}

export default Landing

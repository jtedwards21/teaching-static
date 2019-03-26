import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerAbout from '../components/BannerAbout'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>SPEAKUP - English Teaching</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerAbout />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>About Me</h2>
                    </header>
                    <p>Language learning and education has been a long-term pursuit that has engaged me for several years.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={pic08} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Education</h3>
                            </header>
                            <p>I graduated from the University of North Carolina at Greensboro in 2011 and received an IGS degree with a focus in Global Affairs and Development. Thise is a varied degree with course content covering politics, economic development and social policy.
                            <br/>
                            During this time I had the opportunity to study Applied Languages in Lyon, France, where I took the DELF exam for French.
                            <br/>
                            After graduation, I completed a TEFL certification and the TKT certificate for young learners offered by Cambridge University.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic09} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Professional Life</h3>
                            </header>
                            <p>I've taught in a number of settings, both online and offline, in multi-cultural centers for refugee resettlement, as well as in schools geared towards business professionals.
                            <br/>I've taught to a number of age groups, and often give preparatory classes for students interested in attending international high-schools and universities.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing

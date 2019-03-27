import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTraining from '../components/BannerTraining'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>SPEAKUP - Teacher Training</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerTraining />

        <div id="main">
            <section id="one">
                <div className="breaker">
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={pic01} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Teaching Experience</h3>
                            </header>
                            <p>I've taught in a number of settings, both online and offline, in multi-cultural centers for development of refugees, as well as in schools geared towards business professionals.
                            <br/>I've taught to a number of age groups, and often give preparatory classes for students interested in attending international high-schools and universities.</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic02} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Online Classes</h3>
                            </header>
                            <p>For certain learners, I am available to give online classes. I'm interested in goal-orientated students that have a long-term commitment to learning and have clear goals which they'd like to acheive.
                            <br/>I'd be excited about helping you acheive these goals.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing

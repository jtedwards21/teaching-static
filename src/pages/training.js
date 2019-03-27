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
                                <h3>Training Goals</h3>
                            </header>
                            <p>The intention of teacher training is to bring operations for language education centers to the next level.</p>
                            <p>This training focuses on preparing local or non-native teachers to teach using communicative methods - teaching methods that are approved of and used internationally.</p>
                            <p>In addition to offering support for methodology, we also help to prepare language centers to improve their course offerings with times that facilitate high retention rates.</p>
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
                                <h3>Time and Location</h3>
                            </header>
                            <p>Training is done on-site using </p>
                            <p>Communicative Teaching Methods</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing

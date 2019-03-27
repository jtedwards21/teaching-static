import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerDemoClass from '../components/BannerDemoClass'

import pic27 from '../assets/images/pic27.jpg'
import pic28 from '../assets/images/pic28.jpg'
import pic29 from '../assets/images/pic29.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>SPEAKUP - Demo Classes</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerDemoClass />

        <div id="main">
            <section id="one">
                <div className="breaker">
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={pic27} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Times</h3>
                            </header>
                            <p>It's most convenient for me to schedule demo classes during my day-time hours between Monday and Friday. Of course this may not be the best time for many students who have prior work or school obligations.</p>
                            <p>However as demo classes are rather short it's often possible for me to schedule around previous obligations.
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic28} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Costs for Demo Classes</h3>
                            </header>
                            <p>For a half-hour demo class I charge a fee of ten U.S. dollars. I'm interested in accepting students who are reasonably serious about learning and this helps me acheive this goal.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing

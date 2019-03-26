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
            <title>SPEAKUP - English Teaching</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerDemoClass />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>Contact</p>
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

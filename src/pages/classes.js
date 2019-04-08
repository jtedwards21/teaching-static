import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerClasses from '../components/BannerClasses'

import pic27 from '../assets/images/pic27.jpg'
import pic28 from '../assets/images/pic28.jpg'
import pic29 from '../assets/images/pic29.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>SPEAKUP - Classes</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerClasses />

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
                            <p>It's most convenient for me to schedule an oral test during my day-time hours between Monday and Friday. Of course this may not be the best time for many students who have prior work or school obligations.</p>
                            <p>However as most oral tests are short it's usually possible for me to schedule around previous obligations. Just send me a message and we can find a time that works for everyone involved.
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
                                <h3>Oral English Test Content</h3>
                            </header>
                            <p>The goal of the oral test is to determine the level of the interested student. After the oral test I'm able to suggest a study plan and communicate about learning goals.</p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing

import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTeaching from '../components/BannerTeaching'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <Layout>
        <Helmet>
            <title>SPEAKUP - English Teaching</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerTeaching />

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>I offer a variety of different classes suitable to many different learners.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic08} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Class Types</h3>
                            </header>

                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
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

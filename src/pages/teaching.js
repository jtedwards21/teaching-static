import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTeaching from '../components/BannerTeaching'

import pic25 from '../assets/images/pic25.jpg'
import pic26 from '../assets/images/pic26.jpg'
import pic27 from '../assets/images/pic27.jpg'

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
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <div className="image">
                        <img src={pic25} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Class Types</h3>
                            </header>
                            <p>In general learners are split into primary, secondary and adult learners. Each student is provided with a course-map and learning materials that are appropriate to their age-group and English level.</p>

                        </div>
                    </div>
                </section>
                <section>
                    <div className="image">
                        <img src={pic26} alt="" />
                    </div>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Course Maps</h3>
                            </header>
                            <p>Courses often move at a brisk pace and it's my earnest hope that learners are dedicated and work hard to keep up with the pace of the course.</p>
                            <p>Below I've provided an example course map so to give an idea of general pace and course content.</p>
                            <p></p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default Landing

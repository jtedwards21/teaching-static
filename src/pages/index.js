import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic21.jpg'
import pic02 from '../assets/images/pic22.jpg'
import pic03 from '../assets/images/pic23.jpg'
import pic04 from '../assets/images/pic24.jpg'
import pic05 from '../assets/images/pic25.jpg'
import pic06 from '../assets/images/pic26.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>About Me</h3>
                                <p>US-Educated Linguist and Teacher</p>
                            </header>
                            <Link to="/about" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Teaching</h3>
                                <p>In-Classroom and Remote Courses</p>
                            </header>
                            <Link to="/teaching" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Topic Materials</h3>
                                <p>Topical Materials for Independent Study</p>
                            </header>
                            <Link to="/materials" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Magazines</h3>
                                <p>Magazine Download Links</p>
                            </header>
                            <Link to="/magazines" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex

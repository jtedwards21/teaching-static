import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>Materials - SPEAKUP</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Magazines</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>These magazines and other materials can be used to help you learn better English.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    <p>Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis. Praesent rutrum sem diam, vitae egestas enim auctor sit amet. Pellentesque leo mauris, consectetur id ipsum sit amet, fersapien risus, commodo eget turpis at, elementum convallis elit. Pellentesque enim turpis, hendrerit tristique lorem ipsum dolor.</p>
                    <h3>Textbooks</h3>
                      <ul className="alt">
                        <li><a href="https://pan.baidu.com/s/1sNeR8FiCXFdv-IQJwBOsZA"> [Instant Discussions] 密码:vgfp</a></li>
                        <li><a href="https://pan.baidu.com/s/1QfzTWCw19fccvEhqKqJ9mg"> Oxford Basics - Simple Writing Activities 密码:g3ik</a></li>
                      </ul>

                    <h3>English in Use</h3>
                      <ul className="alt">
                        <li><a href="https://pan.baidu.com/s/1vFJAYeCVxiEvAlt_dOCzeA">[Business Vocabulary in Use  密码:ilg9 </a></li>
                        <li><a href="https://pan.baidu.com/s/1TLn1SKwO8onXxrmSkegHcA">English Collocations in Use  密码:g33x</a></li>
                        <li><a href="https://pan.baidu.com/s/1dlPswkAiGLhOBAwwIdQ7eQ">English Phrasal Verbs in Use  密码:qvw2</a></li>
                        <li><a href="https://pan.baidu.com/s/1p0S-kqkEvSdc9dnUavXiOw">English Idioms in Use 密码:at1a</a></li>
                        <li><a href="https://pan.baidu.com/s/1C5BWCMo_KwYbSXTecxdBsw">Vocabulary in Use: Elementary  密码:j3pw</a></li>
                        <li><a href="https://pan.baidu.com/s/1szuYbHsgXRH5b73W8Hgqyg">Vocabulary in Use: Pre-Intermediate  密码:sht3</a></li>
                        <li><a href="https://pan.baidu.com/s/1kv32ln5UCodCqd8Wxja6iQ">Vocabulary in Use: Upp-Adv  密码:pzpb</a></li>
                      </ul>
                    <h3></h3>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic

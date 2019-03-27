import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="split">
              <section>
                <div className="contact-method">
                    <span className="icon alt fa-envelope"></span>
                    <h3>Email</h3>
                    <span>joshua@speakupchat.com</span>
                </div>

              </section>
            </section>
            <section className="split">
                <section>
                <div className="contact-method">
                    <span className="icon alt fa-envelope"></span>
                    <h3>WeChat</h3>
                    <a href="https://www.wechat.com/en/">jtedwards21</a>
                </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

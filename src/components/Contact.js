import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section className="split">
              <section>
                <div className="contact-method">
                    <span className="icon alt fa-envelope"></span>
                    <h3>Email</h3>
                    <a href="#">joshua@speakupchat.com</a>
                </div>
                </section>
            </section>
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Address</h3>
                        <span>Kangqiao Gardens<br />
                        Jiaxing, ZJ 314000<br />
                        China</span>
                    </div>
                </section>
            </section>
        </div>
    </section>
)

export default Contact

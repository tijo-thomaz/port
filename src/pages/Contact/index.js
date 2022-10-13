import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
function Contact({ navActive }) {
    return (
        <section className={`contact-section ${navActive ? 'fade-out' : ""}`} >
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>Contact me</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="contact-form">
                        <form>
                            <div className="row">
                                <div className="input-group">
                                    <input type="text" className="input-control" placeholder="Name" name="name" />
                                </div>
                                <div className="input-group">
                                    <input type="text" className="input-control" placeholder="Email" name="email" />
                                </div>
                                <div className="input-group">
                                    <input type="text" className="input-control" placeholder="Subject" name="subject" />
                                </div>
                                <div className="input-group">
                                    <textarea className="input-control" placeholder="Message" name="subject" />
                                </div>
                                <div className="submit-btn">
                                    <button type="submit" className="btn">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <h3>Email</h3>
                            <p>tjo.thomaz@gmail.com</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Phone</h3>
                            <p>+91 9605645591</p>
                        </div>
                        <div className="contact-info-item">
                            <h3>Follow me </h3>
                            <div className="social">
                                <a href="#" target="_blank">
                                    <FaFacebookF />
                                </a>
                                <a href="#" target="_blank">
                                    <FaInstagram />
                                </a>
                                <a href="#" target="_blank">
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
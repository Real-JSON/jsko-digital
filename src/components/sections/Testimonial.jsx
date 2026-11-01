import React from 'react';
import Marquee from 'react-fast-marquee';

const Testimonial = () => {
    return (
        <section id="testimonial" className="testimonial">
            <div>
                <h2 className="text-heading">Testimonials</h2>
                <p className="heading-description">
                    Satisfaction isn’t one-sided. It’s about building solutions
                    that truly work for all.
                </p>
            </div>

            <Marquee
                gradientWidth={200}
                gradient={true}
                gradientColor="black"
                speed={60}
            >
                <div className="testimonial-grid">
                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p className="testimonial-review">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. <br /> <br />
                                Culpa eius numquam doloremque quos magnam quas?
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <hr />
                        <div className="user">
                            <div className="user-img"></div>
                            <div className="user-details">
                                <h3>Nipun Amith</h3>
                                <p>Owner of Proxima</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p className="testimonial-review">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. <br /> <br />
                                Culpa eius numquam doloremque quos magnam quas?
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <hr />
                        <div className="user">
                            <div className="user-img"></div>
                            <div className="user-details">
                                <h3>Nipun Amith</h3>
                                <p>Owner of Proxima</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p className="testimonial-review">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. <br /> <br />
                                Culpa eius numquam doloremque quos magnam quas?
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <hr />
                        <div className="user">
                            <div className="user-img"></div>
                            <div className="user-details">
                                <h3>Nipun Amith</h3>
                                <p>Owner of Proxima</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p className="testimonial-review">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. <br /> <br />
                                Culpa eius numquam doloremque quos magnam quas?
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <hr />
                        <div className="user">
                            <div className="user-img"></div>
                            <div className="user-details">
                                <h3>Nipun Amith</h3>
                                <p>Owner of Proxima</p>
                            </div>
                        </div>
                    </div>

                    <div className="testimonial-card">
                        <div className="testimonial-content">
                            <p className="testimonial-review">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. <br /> <br />
                                Culpa eius numquam doloremque quos magnam quas?
                                Lorem ipsum dolor sit amet.
                            </p>
                        </div>
                        <hr />
                        <div className="user">
                            <div className="user-img"></div>
                            <div className="user-details">
                                <h3>Nipun Amith</h3>
                                <p>Owner of Proxima</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Marquee>
        </section>
    );
};

export default Testimonial;

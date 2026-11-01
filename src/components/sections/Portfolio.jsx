import React from 'react';
import Marquee from 'react-fast-marquee';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <Marquee
                autoFill={true}
                gradient={true}
                gradientColor="black"
                style={{ overflow: 'hidden' }}
                speed={90}
            >
                <div className="mq-slider-text">
                    <span>* Use Case&nbsp;</span>
                    <span>* Works&nbsp;</span>
                    <span>* Projects&nbsp;</span>
                    <span>* Showcase&nbsp;</span>
                </div>
            </Marquee>
            <Marquee
                autoFill={true}
                gradient={true}
                gradientColor="black"
                direction="right"
                speed={90}
                style={{
                    color: '#1b1b17',
                    overflow: 'hidden',
                    paddingTop: '12px',
                }}
            >
                <div className="mq-slider-text">
                    <span>* Use Case&nbsp;</span>
                    <span>* Works&nbsp;</span>
                    <span>* Projects&nbsp;</span>
                    <span>* Showcase&nbsp;</span>
                </div>
            </Marquee>
            <div className="gallery">
                <div className="gallery-item h-100 md:h-130 md:col-span-12">
                    <img src="/images/portfolio/mockup.png" alt="" />
                    <div className="portfolio-description">
                        <h3>Project One</h3>
                        <span>Proxi xiop sandle</span>
                    </div>
                </div>

                <div className="gallery-item md:col-span-6 h-100 ">
                    <img src="/images/portfolio/laptop2.jpg" alt="" />
                    <div className="portfolio-description">
                        <h3>Project Two</h3>
                        <span>Proxi xiop sandle</span>
                    </div>
                </div>

                <div className="gallery-item md:col-span-6 h-100">
                    <img src="/images/portfolio/laptop3.jpg" alt="" />
                    <div className="portfolio-description">
                        <h3>Project Three</h3>
                        <span>Proxi xiop sandle</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;

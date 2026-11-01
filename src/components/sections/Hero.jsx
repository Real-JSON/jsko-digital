import Aurora from "../effects/Aurora";
export default function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero-aurora">
                <Aurora
                    colorStops={["#00d69a", "#087e68", "#7000cc"]}
                    amplitude={0.72}
                    blend={0.62}
                    speed={0.8}
                />
            </div>
            <div className="hero-grid" />
            <div className="hero-inner">
                <div className="hero-copy">
                    <div className="availability">
                        <i /> Independent digital studio <span>·</span> Sri
                        Lanka & beyond
                    </div>
                    <h1>
                        Make your brand
                        <br />
                        impossible to{" "}
                        <span className="gradient-text">ignore.</span>
                    </h1>
                    <p>
                        We design and build thoughtful digital experiences that
                        help ambitious businesses show up, stand out and move
                        forward.
                    </p>
                    <div className="hero-actions">
                        <a className="button-primary" href="#contact">
                            Start a project <span>↗</span>
                        </a>
                        <a className="text-link" href="#work">
                            Explore selected work <span>↓</span>
                        </a>
                    </div>
                    <div className="hero-proof">
                        <span>DESIGN WITH INTENTION</span>
                        <b /> <span>DEVELOPMENT THAT DELIVERS</span>
                    </div>
                </div>
                <div className="hero-art">
                    <div className="art-glow" />
                    <div className="browser-card">
                        <div className="browser-top">
                            <div>
                                <i />
                                <i />
                                <i />
                            </div>
                            <span>your-next-move.com</span>
                            <span>↗</span>
                        </div>
                        <div className="browser-content">
                            <span className="art-kicker">
                                A DIGITAL FIRST IMPRESSION
                            </span>
                            <div className="art-title">
                                Build a brand
                                <br />
                                people <em>remember.</em>
                            </div>
                            <div className="art-line" />
                            <div className="art-bottom">
                                <span>
                                    Strategy
                                    <br />
                                    Design
                                    <br />
                                    Development
                                </span>
                                <div className="art-circle">
                                    JS
                                    <br />
                                    KO
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="floating-note">
                        <span className="note-icon">✳</span>
                        <div>
                            <b>Made with purpose</b>
                            <small>From idea to experience</small>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#focus" className="scroll-cue">
                <span /> Scroll to explore
            </a>
        </section>
    );
}

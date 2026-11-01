import React from "react";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div>
        <h2 className="text-heading">Our Impact</h2>
        <p className="heading-description">
          We don’t just build products. We create scalable digital experiences
          that drive real market growth.
        </p>
      </div>
      <div className="stats">
        <div className="stat-card">
          <span>Fortune 500</span>
          <p>Proven product design standards trusted by enterprise leaders</p>
        </div>
        <div className="stat-card md:top-20 lg:top-15">
          <span>20+</span>
          <p>
            High-impact brand identities delivered from early-stage to scale
          </p>
        </div>
        <div className="stat-card">
          <span>Local</span>
          <p>Creative reach across global markets</p>
        </div>

        <div className="stat-card md:top-20 lg:top-15">
          <span>End-to-End</span>
          <p>Full-cycle product, UI/UX, and branding strategy</p>
        </div>
      </div>
    </section>
  );
};

export default Experience;

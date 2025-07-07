import React from "react"; 

function CoreFeatures() {
  return (
    <div id="core-features" className="container">
      <div className="row align-items-center g-5">
        <div className="col-lg-6">
          <div className="row g-5">
            <div className="col-6">
              <div className="feature-card border text-center p-3">
                <h1 className="org-clr">80k+</h1>
                <p className="text-secondary">
                  We have more than students
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="feature-card border text-center p-3">
                <h1 style={{ color: "#FA578E" }}>90+</h1>
                <p className="text-secondary">
                  Daily updated blog posts
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="feature-card border text-center p-3">
                <h1 style={{ color: "#FF753A" }}>150+</h1>
                <p className="text-secondary">
                  Free online tutorial videos available
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="feature-card border text-center p-3">
                <h1 style={{ color: "#E682FF" }}>3M+</h1>
                <p className="text-secondary">
                  Jobs posted daily with qualifications
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <span className="org-clr fw-bold">CORE FEATURES</span>
          <h1 className="my-3">
            Smart Jackpots that you may love this anytime & anywhere
          </h1>
          <p className="text-secondary" style={{lineHeight:'35px'}}>
            Get your tests delivered at home, collect samples easily, and enjoy the best design system guidelines. Experience convenient learning and hiring with our platform.
          </p>
          <button className="org-clr org-bg px-4 py-2 rounded-1 border-0 fw-bold mt-3">
            Explore Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default CoreFeatures;

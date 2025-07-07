import React from "react";
import { FaEye, FaPlay, FaStar } from "react-icons/fa";

function QualityFeature() {
  return (
    <div id="quality-feature" className="d-flex flex-column justify-content-center align-items-center">
      <div className="py-3 d-flex flex-column align-items-center my-5">
        <span className="org-clr fw-bold">QUALITY FEATURES</span>
        <span className="fw-bold fs-2">Tutorials that people love most</span>
      </div>

      <div className="d-flex gap-5 pb-5">
        <div
          id=""
          className="card position-relative quality-card"
          style={{ width: "27rem" }}
        >
          <img
            className="card-img-top"
            src="./Images/Cards/image1.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="text-dark d-flex align-items-center gap-1">
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span className="ms-2">5.0 (392 reviews)</span>
            </div>
            <p className="card-text fw-bold my-2">
              How to work with prototype design with adobe xd featuring tools
            </p>
            <p className="text-secondary d-flex align-items-center">
              <span className="me-2">
                <FaEye />
              </span>
              2,538 students watched
            </p>
          </div>
        </div>
        <div
          id=""
          className="card position-relative quality-card"
          style={{ width: "27rem" }}
        >
          <img
            className="card-img-top"
            src="./Images/Cards/image2.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="text-dark d-flex align-items-center gap-1">
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span className="ms-2">4.5 (524 reviews)</span>
            </div>
            <p className="card-text fw-bold my-2">
              Create multiple artboard by using figma prototyping tools
              development
            </p>
            <p className="text-secondary d-flex align-items-center">
              <span className="me-2">
                <FaEye />
              </span>
              3,532 students watched
            </p>
          </div>
        </div>
        <div
          id=""
          className="card position-relative quality-card"
          style={{ width: "27rem" }}
        >
          <img
            className="card-img-top"
            src="./Images/Cards/image3.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <div className="text-dark d-flex align-items-center gap-1">
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span>
                <FaStar size={18} color="gold" />
              </span>
              <span className="ms-2">5.0 (392 reviews)</span>
            </div>
            <p className="card-text fw-bold my-2">
              Convert your web layout theming easily with sketch zeplin
              extension
            </p>
            <p className="text-secondary d-flex align-items-center">
              <span className="me-2">
                <FaEye />
              </span>
              1,037 students watched
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityFeature;

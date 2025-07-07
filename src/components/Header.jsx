import React from "react";
import { FaPaypal, FaPlay, FaSearch, FaStar } from "react-icons/fa";

function Header() {
  return (
    <div id="header-section" className="d-flex">
      <div id="header-1st-div" className="px-3">
        <div className="d-flex align-items-center gap-2">
          <div className="d-flex align-items-center gap-1">
            <span>
              <FaStar size={18}/>
            </span>
            <span>
              <FaStar size={18} />
            </span>
            <span>
              <FaStar size={18} />
            </span>
            <span>
              <FaStar size={18} />
            </span>
            <span>
              <FaStar size={18} color="light" />
            </span>
          </div>
          <div>
            <span style={{ fontSize: "12px" }} className="">
              Trusted by over 4,332 students
            </span>
          </div>
        </div>
        <div>
          <h1 style={{ fontSize: "80px" }}>Learn Design</h1>
          <h1 style={{ fontSize: "80px" }}>
            with <span id="niaMatos">Nia Matos</span>
          </h1>
        </div>
        <div className="my-3 lh-lg pe-5">
          <p className="w-50">
            Get your blood tests delivered at let home collect sample from the
            victory of the managments that supplies best design system
            guidelines ever.
          </p>
        </div>
        <div className="bg-white p-3 my-4 rounded-2 d-flex align-align-items-center justify-content-between w-50">
          <input
            className="border-0 fs-6 w-75"
            type="text"
            placeholder="Search Course Name"
          />
          <span>
            <FaSearch />
          </span>
        </div>
        <div className="d-flex gap-3 align-items-center text-secondary">
          <span style={{ fontSize: "15px" }}>Sponsored by:</span>
          <span>
            <img src="./Images/paypal.png" width={90} />
          </span>
          <span>
            <img src="./Images/google.png" width={80} />
          </span>
          <span>
            <img src="./Images/Dropbox_logo.png" width={90} />
          </span>
        </div>
      </div>
      <div id="header-2nd-div" className="px-3">
        <span id="play-btn">
          <FaPlay color="white" size={45}/>
        </span>
        <img
          id="first-img"
          src="./Images/719749ca56c889e147080f0cad5b03d2f5a353d2.jpg"
        />
        <img id="sec-img" src="./Images/pattern.png" />
      </div>
    </div>
  );
}

export default Header;

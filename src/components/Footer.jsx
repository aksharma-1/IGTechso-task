import React from "react";

function Footer() {
  return (
    <div className="text-clr" id="footer">
      <div className="divider"></div>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column mt-5">
          <span className="fw-bold fs-5 mb-4">About Us</span>
          <div className="d-flex flex-column gap-2 text-secondary align-items-start">
            <button>Support Center</button>
            <button>Customer Support</button>
            <button>About Us</button>
            <button>Copyright</button>
            <button>Popular Campaign</button>
          </div>
        </div>
        <div className="d-flex flex-column mt-5">
          <span className="fw-bold fs-5 mb-4">Our Information</span>
          <div className="d-flex flex-column gap-2 text-secondary align-items-start">
            <button>Return Policy</button>
            <button>Privacy Policy</button>
            <button>Terms & Conditions</button>
            <button>Site Map</button>
            <button>Store Hours</button>
          </div>
        </div>
        <div className="d-flex flex-column mt-5">
          <span className="fw-bold fs-5 mb-4">My Account</span>
          <div className="d-flex flex-column gap-2 text-secondary align-items-start">
            <button>Press inquiries</button>
            <button>Social media </button>
            <button>directories</button>
            <button>Images & B-roll</button>
            <button>Permissions</button>
          </div>
        </div>
        <div className="d-flex flex-column mt-5">
          <span className="fw-bold fs-5 mb-4">Policy</span>
          <div className="d-flex flex-column gap-2 text-secondary align-items-start">
            <button>Application security</button>
            <button>Software principles</button>
            <button>Unwanted software policy</button>
            <button>Responsible supply chain</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

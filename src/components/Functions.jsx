import React from "react";

function Functions() {
  return (
    <div id="functions">
      <div className="py-3 d-flex flex-column align-items-center my-3 mb-5">
        <span className="org-clr fw-bold">WHATS THE FUNCTION</span>
        <span className="fw-bold fs-2">Let’s see how it works</span>
      </div>

      <div className="d-flex justify-content-center">
        <div className="d-flex gap-3">
          <div>
            <div className="d-flex gap-3">
              <span className="numbers">01</span>
              <span className="arrow">
                <img src="./Images/Cards/arrow.png" />
              </span>
            </div>
            <div className="w-75">
              <h5 className="my-4">Set disbursement Instructions</h5>
              <p className="para">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex gap-3">
              <span className="numbers">02</span>
              <span className="arrow mt-4">
                <img src="./Images/Cards/arrow.png" style={{transform: 'scaleY(-1)'}}/>
              </span>
            </div>
            <div className="">
              <h5 className=" pe-5 my-4">
                Assembly retrieves funds from your account
              </h5>
              <p className="para">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex gap-3">
              <span className="numbers">03</span>
              <span className="arrow">
                <img src="./Images/Cards/arrow.png" />
              </span>
            </div>
            <div className="w-75">
              <h5 className="my-4">Assembly initiates disbursement</h5>
              <p className="para">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex gap-3">
              <span className="numbers">04</span>
            </div>
            <div className="w-75">
              <h5 className="my-4">Customer receives funds payment</h5>
              <p className="para">
                Get your blood tests delivered at home collect a sample from the
                your blood tests.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Functions;

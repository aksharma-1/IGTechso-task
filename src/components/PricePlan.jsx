import React, { useState } from "react";
import { FaCheck, FaCross } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

function PricePlan() {
  const [currentPlan, setCurrentPlan] = useState("monthly");

  return (
    <div id="pricing-plan" className="">
      <div className="py-3 d-flex flex-column align-items-center my-3">
        <span className="org-clr fw-bold">PRICING PLAN</span>
        <span className="fw-bold fs-2">Choose your pricing policy</span>
      </div>

      <div className="d-flex justify-content-center">
        <div
          className="bg-light py-2 rounded-1 d-flex gap-1 justify-content-evenly"
          style={{ width: "250px" }}
        >
          <button
            className={`border-0 px-3 py-2 rounded-1 ${
              currentPlan === "monthly" ? "bg-white shadow" : ""
            }shadow`}
            onClick={() => setCurrentPlan("monthly")}
          >
            Monthly Plan
          </button>
          <button
            className={`border-0 px-3 py-2 rounded-1 ${
              currentPlan === "annual" ? "bg-white shadow" : ""
            }`}
            onClick={() => setCurrentPlan("annual")}
          >
            Annual Plan
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-center mt-5">
        <div className="rounded-2 px-4 py-2 pb-4 pt-4">
          <div className="d-flex justify-content-between">
            <span className="fw-bold fs-6">Free Plan</span>
          </div>
          <div className="d-flex justify-content-between">
            <span style={{ fontSize: "14px" }}>For Small teams or office</span>
          </div>

          <div className="w-75 mt-5 d-flex flex-column gap-2">
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn border-0 d-flex align-items-center">
                <FaCheck />
              </button>
              <p className="p-0 m-0">
                Ultimate access to all course, exercises and assessments
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn border-0 d-flex align-items-center">
                <FaCheck />
              </button>
              <p className="p-0 m-0">
                Free acess for all kind of exercise corrections with downloads.
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn border-0 d-flex align-items-center">
                <FaCheck />
              </button>
              <p className="p-0 m-0">
                Total assessment corrections with free download access system
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                <RxCross2 />
              </button>
              <p className="p-0 m-0 text-secondary">
                Unlimited download of courses on the mobile app contents
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                <RxCross2 />
              </button>
              <p className="p-0 m-0 text-secondary">
                Download and print courses and exercises in PDF
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="org-clr org-bg border-0 d-flex align-items-center px-5 py-2 fw-bold"
              style={{
                fontSize: "10px",
              }}
            >
              Start Free Trial
            </button>
          </div>
        </div>
        {/* ===================== */}
        <div
          className="rounded-2 px-4 py-2 pb-4"
          style={{ border: "2px solid #3FDBB1" }}
        >
          <span id="recommanded-btn" className="p-1 rounded-1">
            Recommanded
          </span>
          <div className="d-flex justify-content-between">
            <span className="fw-bold fs-6">Premium</span>
            <span style={{ fontSize: "14px" }}>Starting from</span>
          </div>
          <div className="d-flex justify-content-between">
            <span style={{ fontSize: "14px" }}>For startup enterprise</span>
            <span className="fw-bold fs-5" style={{ color: "#3fdbb1" }}>
              49.99/mo
            </span>
          </div>

          <div className="w-75 mt-4 d-flex flex-column gap-2">
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn border-0 d-flex align-items-center">
                <FaCheck />
              </button>
              <p className="p-0 m-0">
                Ultimate access to all course, exercises and assessments
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn border-0 d-flex align-items-center">
                <FaCheck />
              </button>
              <p className="p-0 m-0">
                Free acess for all kind of exercise corrections with downloads.
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn border-0 d-flex align-items-center">
                <FaCheck />
              </button>
              <p className="p-0 m-0">
                Total assessment corrections with free download access system
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn border-0 d-flex align-items-center">
                <FaCheck />
              </button>
              <p className="p-0 m-0">
                Unlimited download of courses on the mobile app contents
              </p>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <button className="check-btn border-0 d-flex align-items-center">
                <FaCheck />
              </button>
              <p className="p-0 m-0">
                Download and print courses and exercises in PDF
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              className="org-clr org-bg border-0 d-flex align-items-center px-5 py-2 fw-bold"
              style={{
                fontSize: "10px",
              }}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricePlan;

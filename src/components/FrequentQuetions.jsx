import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

function FrequentQuetions() {
  const [arrodianNum, setAccordianNum] = useState(2);

  const handleAccordian = (index) => {
    setAccordianNum(index);
  };

  return (
    <div id="frequent-quetions">
      <div className="py-3 d-flex flex-column align-items-center my-5">
        <span className="org-clr fw-bold">FREQUENT QUETIONS</span>
        <span className="fw-bold fs-2">Do you have any question</span>
      </div>

      <div>
        <div className="d-flex gap-3 align-items-center">
          <button
            className="plus-btn border-0 d-flex align-items-center"
            onClick={() => handleAccordian(0)}
          >
            {" "}
            {arrodianNum === 0 ? <FaMinus /> : <FaPlus />}
          </button>
          <p className="m-0 fs-5">How to contact with riders emergency ?</p>
        </div>
        {arrodianNum === 0 ? (
          <div className="px-4 py-3 lh-base text-secondary">
            An FAQ is a list of frequently asked questions (FAQs) and answers on
            a particular topic (also known as Questions and Answers [Q&A] or
            Frequently Asked Questions). The format is often used in articles,
            websites, email lists, and online forums where common questions tend
            to recur, for example through posts or queries by new users related
            to common knowledge gaps. The purpose of an FAQ is generally provide
            information.
          </div>
        ) : (
          <></>
        )}
        <div className="divider mt-3"></div>
      </div>
      <div className="mt-3">
        <div className="d-flex gap-3 align-items-center">
          <button
            className="plus-btn border-0 d-flex align-items-center"
            onClick={() => handleAccordian(1)}
          >
            {arrodianNum === 1 ? <FaMinus /> : <FaPlus />}
          </button>
          <p className="m-0 fs-5">
            App installation failed, how to update system information?
          </p>
        </div>
        {arrodianNum === 1 ? (
          <div className="px-4 py-3 lh-base text-secondary">
            An FAQ is a list of frequently asked questions (FAQs) and answers on
            a particular topic (also known as Questions and Answers [Q&A] or
            Frequently Asked Questions). The format is often used in articles,
            websites, email lists, and online forums where common questions tend
            to recur, for example through posts or queries by new users related
            to common knowledge gaps. The purpose of an FAQ is generally provide
            information.
          </div>
        ) : (
          <></>
        )}
        <div className="divider mt-3"></div>
      </div>
      <div className="mt-3">
        <div className="d-flex gap-3 align-items-center">
          <button
            className="plus-btn border-0 d-flex align-items-center"
            onClick={() => handleAccordian(2)}
          >
            {arrodianNum === 2 ? <FaMinus /> : <FaPlus />}
          </button>
          <p className="m-0 fs-5">
            Website reponse taking time, how to improve?
          </p>
        </div>

        {arrodianNum === 2 ? (
          <div className="px-4 py-3 lh-base text-secondary">
            An FAQ is a list of frequently asked questions (FAQs) and answers on
            a particular topic (also known as Questions and Answers [Q&A] or
            Frequently Asked Questions). The format is often used in articles,
            websites, email lists, and online forums where common questions tend
            to recur, for example through posts or queries by new users related
            to common knowledge gaps. The purpose of an FAQ is generally provide
            information.
          </div>
        ) : (
          <></>
        )}

        <div className="divider mt-3"></div>
      </div>
      <div className="mt-3">
        <div className="d-flex gap-3 align-items-center">
          <button
            className="plus-btn border-0 d-flex align-items-center"
            onClick={() => handleAccordian(3)}
          >
            {arrodianNum === 3 ? <FaMinus /> : <FaPlus />}
          </button>
          <p className="m-0 fs-5">New update fixed all bug and issues</p>
        </div>
        {arrodianNum === 3 ? (
          <div className="px-4 py-3 lh-base text-secondary">
            An FAQ is a list of frequently asked questions (FAQs) and answers on
            a particular topic (also known as Questions and Answers [Q&A] or
            Frequently Asked Questions). The format is often used in articles,
            websites, email lists, and online forums where common questions tend
            to recur, for example through posts or queries by new users related
            to common knowledge gaps. The purpose of an FAQ is generally provide
            information.
          </div>
        ) : (
          <></>
        )}
        <div className="divider mt-3"></div>
      </div>
    </div>
  );
}

export default FrequentQuetions;

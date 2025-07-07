import React, { useState } from "react";
import {
  FaCheck,
  FaEye,
  FaMinus,
  FaPlay,
  FaPlus,
  FaStar,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

function Courses() {
  const [arrodianNum, setAccordianNum] = useState(0);

  return (
    <div id="courses">
      <div className="py-3 d-flex flex-column align-items-center">
        <span className="org-clr fw-bold">QUALITY FEATURES</span>
        <span className="fw-bold fs-2">Popular Designing Course</span>
      </div>

      <div className="border">
        <div className="d-flex justify-content-evenly align-items-center py-4">
          <div>
            <button
              className="play-btn org-bg org-clr border-0 d-flex align-items-center"
              onClick={() => handleAccordian(0)}
            >
              <FaPlay />
            </button>
          </div>

          <div>
            <div className="text-dark d-flex gap-1">
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
              <span className="mx-2">5.0 (392 reviews)</span>
              <p className="text-secondary d-flex align-items-center p-0">
                <span className="mx-3">
                  <FaEye />
                </span>
                2,538 students watched
              </p>
            </div>
            <div className="my-3">
              <h4 className="fw-bold">
                Professional graphic design tutorial full course with exercise
                file
              </h4>
            </div>
            <div>
              <p className="text-secondary">
                Get your tutorials delivered at let home collect sample from the
                victory of the managments.
              </p>
            </div>
          </div>

          <div>
            <button className="classVideo-btn">7 Video Classes | 4 hrs</button>

            <button
              onClick={() => setAccordianNum(0)}
              className="ms-2 border-0 bg-white"
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
        {arrodianNum === 0 ? (
          <div className="text-secondary p-2">
            <div className="d-flex gap-4 justify-content-center">
              <div className="">
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    How to reduce file pixel dimentions without loosing quality
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    How to make logo pixel perfects with different extension
                  </p>
                </div>
              </div>

              <div className="">
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    Create vector file from restarize layer styles
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    Make color gradient with photoshop build-in tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* -------------- 0 */}
      <div className="border">
        <div className="d-flex justify-content-evenly align-items-center py-4">
          <div>
            <button className="play-btn org-bg org-clr border-0 d-flex align-items-center">
              <FaPlay />
            </button>
          </div>

          <div>
            <div className="text-dark d-flex gap-1">
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
              <span className="mx-2">5.0 (392 reviews)</span>
              <p className="text-secondary d-flex align-items-center p-0">
                <span className="mx-3">
                  <FaEye />
                </span>
                2,538 students watched
              </p>
            </div>
            <div className="my-3">
              <h4 className="fw-bold">
                Become ultimate photoshop expert within 30 days
              </h4>
            </div>
            <div>
              <p className="text-secondary">
                Get your tutorials delivered at let home collect sample from the
                victory of the managments.
              </p>
            </div>
          </div>

          <div>
            <button className="classVideo-btn">7 Video Classes | 4 hrs</button>

            <button
              onClick={() => setAccordianNum(1)}
              className="ms-2 border-0 bg-white"
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
        {arrodianNum === 1 ? (
          <div className="text-secondary p-2">
            <div className="d-flex gap-4 justify-content-center">
              <div className="">
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    How to reduce file pixel dimentions without loosing quality
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    How to make logo pixel perfects with different extension
                  </p>
                </div>
              </div>

              <div className="">
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    Create vector file from restarize layer styles
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    Make color gradient with photoshop build-in tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* ----------- 1*/}
      <div className="border">
        <div className="d-flex justify-content-evenly align-items-center py-4">
          <div>
            <button className="play-btn org-bg org-clr border-0 d-flex align-items-center">
              <FaPlay />
            </button>
          </div>

          <div>
            <div className="text-dark d-flex gap-1">
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
              <span className="mx-2">5.0 (392 reviews)</span>
              <p className="text-secondary d-flex align-items-center p-0">
                <span className="mx-3">
                  <FaEye />
                </span>
                2,538 students watched
              </p>
            </div>
            <div className="my-3">
              <h4 className="fw-bold">
                After effects animation tutorial with photoshop documents
              </h4>
            </div>
            <div>
              <p className="text-secondary">
                Get your tutorials delivered at let home collect sample from the
                victory of the managments.
              </p>
            </div>
          </div>

          <div>
            <button className="classVideo-btn">7 Video Classes | 4 hrs</button>

            <button
              onClick={() => setAccordianNum(2)}
              className="ms-2 border-0 bg-white"
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
        {arrodianNum === 2 ? (
          <div className="text-secondary p-2">
            <div className="d-flex gap-4 justify-content-center">
              <div className="">
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    How to reduce file pixel dimentions without loosing quality
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    How to make logo pixel perfects with different extension
                  </p>
                </div>
              </div>

              <div className="">
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    Create vector file from restarize layer styles
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    Make color gradient with photoshop build-in tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* ----------- 2*/}
      <div className="border">
        <div className="d-flex justify-content-evenly align-items-center py-4">
          <div>
            <button
              className="play-btn org-bg org-clr border-0 d-flex align-items-center"
              onClick={() => handleAccordian(0)}
            >
              <FaPlay />
            </button>
          </div>

          <div>
            <div className="text-dark d-flex gap-1">
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
              <span className="mx-2">5.0 (392 reviews)</span>
              <p className="text-secondary d-flex align-items-center p-0">
                <span className="mx-3">
                  <FaEye />
                </span>
                2,538 students watched
              </p>
            </div>
            <div className="my-3">
              <h4 className="fw-bold">
                Adobe illustrator vector art design mockup
              </h4>
            </div>
            <div>
              <p className="text-secondary">
                Get your tutorials delivered at let home collect sample from the
                victory of the managments.
              </p>
            </div>
          </div>

          <div>
            <button className="classVideo-btn">7 Video Classes | 4 hrs</button>

            <button
              onClick={() => setAccordianNum(3)}
              className="ms-2 border-0 bg-white"
            >
              <IoIosArrowDown />
            </button>
          </div>
        </div>
        {arrodianNum === 3 ? (
          <div className="text-secondary p-2">
            <div className="d-flex gap-4 justify-content-center">
              <div className="">
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    How to reduce file pixel dimentions without loosing quality
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    How to make logo pixel perfects with different extension
                  </p>
                </div>
              </div>

              <div className="">
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    Create vector file from restarize layer styles
                  </p>
                </div>
                <div className="d-flex gap-2 align-items-center my-4">
                  <button className="check-btn bg-secondary border-0 d-flex align-items-center">
                    <FaCheck />
                  </button>
                  <p className="p-0 m-0">
                    Make color gradient with photoshop build-in tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Courses;

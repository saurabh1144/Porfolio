import React from "react";
import "./Experience.css";

const Experience = () => {
  return (
    <section className="exp">
      <div className="expTitle">
        <label className="line">Experience</label>
      </div>
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-md-12 job">
          <div className="boxexp">
            <div className="insidebox">
              <h4 className="desg px-4">Front-End Developer</h4>
              <label className="date">April 2024 - September 2024</label>
            </div>
            <div className="company px-4">Ascent Buisness Solution</div>
            <div className="proj px-4">Project : HRMS</div>
            <div className="desp mx-5 my-2">
              <ul>
                <li>
                  Developed an intuitive and responsive user interface using
                  HTML, CSS, and React.js, ensuring a seamless user experience
                  across devices.
                </li>
                <li>
                  {" "}
                  Implemented dynamic search functionality, allowing users to
                  input custom queries to efficiently find employee records and
                  relevant HR information.
                </li>
                <li>
                  {" "}
                  Integrated APIs (or backend services) using JavaScript to
                  retrieve and manage current employee data, including profiles
                  and associated documentation.
                </li>
              </ul>
            </div>
            <div className="tools">
              <label className="px-4">
                Tools Used:{" "}
                <span className="tool">
                  React Js, Next Js, Redux, Axios, Git
                </span>{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
                    {/* Second Exp */}
      <div className="row">
        <div className="col-sm-12 col-lg-12 col-md-12 job">
          <div className="boxexp">
            <div className="insidebox">
              <h4 className="desg px-4">React Js Intern</h4>
              <label className="date">Oct 2023 - April 2024</label>
            </div>
            <div className="company px-4">TechQuadra Solution, Nagpur</div>
            <div className="proj px-4">Project : HRMS</div>
            <div className="desp mx-5 my-2">
              <ul>
                <li>
                  Developed an intuitive and responsive user interface using
                  HTML, CSS, and React.js, ensuring a seamless user experience
                  across devices.
                </li>
                <li>
                  {" "}
                  Implemented dynamic search functionality, allowing users to
                  input custom queries to efficiently find employee records and
                  relevant HR information.
                </li>
                <li>
                  {" "}
                  Integrated APIs (or backend services) using JavaScript to
                  retrieve and manage current employee data, including profiles
                  and associated documentation.
                </li>
              </ul>
            </div>
            <div className="tools">
              <label className="px-4">
                Tools Used:{" "}
                <span className="tool">
                  React Js, Next Js, Redux, Axios, Git
                </span>{" "}
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

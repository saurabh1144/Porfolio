import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2 className="heading">About Me</h2>
      <span className="headpara">
        Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology
      </span>
      <div className="row">
        <div className="col-6">
          <div className="aboutintro">
            <h2 className="know">Know About Me!</h2>
            <p className="aboutpara">
              Greetings! I'm Saurabh Chouragade, a dedicated software engineer
              located in India. My expertise spans TypeScript, JavaScript,
              Node.js, React.js, and Next.js, encompassing both frontend and
              backend development.
            </p>
            <p className="aboutpara">
              I have a proven track record of crafting high-quality digital
              solutions, from creating seamless user interfaces with React.js to
              architecting robust backend systems using Node.js. My focus is
              always on delivering clean, efficient, and scalable code that
              exceeds expectations.
            </p>
            <p className="aboutpara">
              Throughout my career, I've had the opportunity to work on a
              variety of projects, each presenting unique challenges and
              opportunities for growth. I thrive on the continuous learning and
              problem-solving inherent in the tech industry.
            </p>
          </div>
        </div>
        <div className="col-6">
        <div className="aboutskill">
        <h2>About Skill</h2>

        </div>
        
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import "./Project.css";
import net from '../../assets/netflix.png';
import news from '../../assets/news.png';
import tweet from '../../assets/twit.png'
import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <section className="project"  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
      <label className="projecttext">Projects</label>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card ">
            <img src={net} className="card-img-top" alt="netflix" />
            <div className="card-title">
                <h4>Netflix Landing Page</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
              A Netflix-style landing page intro features a bold heading and subheading, such as "Unlimited movies, TV shows, and more" with "Watch anywhere. 
              </p>
             
            </div>
            <div className="card-footer icon">
                <a className="fa" href="https://github.com/saurabh1144/Netflix-page" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View code in Github"><span><FaGithub/></span></a>
                <a className="fa" href=""><span><FaExternalLinkAlt/></span></a>

              </div>
            
          </div>
        </div>

        {/* Second Project */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card ">
            <img src={news} className="card-img-top" alt="news"/>
            <div className="card-title">
                <h4>Weather App</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
              A news app built with HTML, CSS, and JavaScript uses an API to fetch and display real-time news articles.
              </p>
             
            </div>
            <div className="card-footer icon">
                <a className="fa" href="https://github.com/saurabh1144/WeatherApp.git" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View code in Github"><span><FaGithub/></span></a>
                <a className="fa" href="https://weeatherappp.netlify.app/"><span><FaExternalLinkAlt/></span></a>

              </div>
            
          </div>
        </div>

        {/* Third project */}
        <div className="col-lg-4 col-md-12 col-sm-12">
          <div className="card ">
            <img src={tweet} className="card-img-top" alt="netflix" />
            <div className="card-title">
                <h4>Twitverse Blogging</h4>
            </div>
            <div className="card-body">
              <p className="card-text">
              A Netflix-style landing page intro features a bold heading and subheading, such as "Unlimited movies, TV shows, and more" with "Watch anywhere. 
              </p>
             
            </div>
            <div className="card-footer icon">
                <a className="fa" data-bs-toggle="tooltip" data-bs-placement="bottom" title="View code in Github"><span><FaGithub/></span></a>
                <a className="fa"><span><FaExternalLinkAlt/></span></a>

              </div>
            
          </div>
        </div>
        

        <div className="more">
       <button className="btn text-white view ">View More Projects</button> 
        </div>




      </div>
    </section>
  );
};

export default Project;

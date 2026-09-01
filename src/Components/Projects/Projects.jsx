import React from "react";
import tradeui from"../../assets/tradeui.png";
import wander from "../../assets/wanderlust.png";
import coming from "../../assets/coming.jpg";

const Projects = () => {
  return (

      <div id="project" className="text-white md-flex overflow-hidden items-center md:flex-wrap md:justify-center shadow-2xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 min-h-screen">
        <h2 className="text-3xl font-bold tracking-tight text-center mt-15 mb-15 text-white">
          My Projects
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <a href="https://wanderlust-b1bi.onrender.com/listings">
            <img
              src={wander}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              alt="wanderlust project"
            />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white font-bold">
                  <a href="https://wanderlust-b1bi.onrender.com/listings">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Wanderlust
                  </a>
                </h3>
                <p className="mt-1 text-sm text-white">A holiday place finding full stack app. </p>
              </div>
              
            </div>
          </div>
          <div className="group relative">
            <a href="https://trading-ui-fcn9.vercel.app/">
            <img
              src={tradeui}
              alt="tradeui project"
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            </a>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white font-bold">
                  <a href="https://trading-ui-fcn9.vercel.app/">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    Trade UI
                  </a>
                </h3>
                <p className="mt-1 text-sm text-white">A trading app full stack project.</p>
              </div>
              
            </div>
          </div>
          <div className="group relative">
            <img
              src={coming}
              alt="coming soon"
             
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
            />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-white font-bold">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    New Project
                </h3>
                <p className="mt-1 text-sm text-white">coming soon</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Projects;

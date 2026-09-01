import React from "react";
import edu from "../../assets/edu.png";

const Education = () => {
  return (
    <div id="edu" className="text-white md-flex overflow-hidden items-center md:flex-wrap md:justify-center mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        ACADMIC DETAILS
      </h1>
      <div className="md:flex flex-wrap flex-col md:flex-row items-center mt-10 justify-between">
        <div className="w-full md:w-1/2 lg:w-150 p-4 pr-6">
          <img src={edu} alt="edu" />
        </div>
        <div className="w-full md:w-1/2 lg:1/2 p-3 md:mt-15 lg:mt-5">
          <ol className="relative border-l border-gray-700 ml-2 pl-8">
            <li className="relative mb-12">
              <span
                className="absolute -left-[41px] top-1 w-5 h-5 rounded-full 
                     bg-[#171d32] border-2 border-white"
              ></span>

              <h1 className="text-3xl font-bold">Class 10th - 2022</h1>

              <h4 className="text-2xl mt-3">KENDRIYA VIDYALAYA AVIKANAGAR</h4>

              <h6 className="text-xl">Percentage - 91.2%</h6>
            </li>

            <li className="relative mb-12">
              <span
                className="absolute -left-[41px] top-1 w-5 h-5 rounded-full 
                     bg-[#171d32] border-2 border-white"
              ></span>

              <h1 className="text-3xl font-bold">Class 12th - 2024</h1>

              <h4 className="text-2xl mt-3">KENDRIYA VIDYALAYA AVIKANAGAR</h4>

              <h6 className="text-xl">Percentage - 92.4%</h6>
            </li>

            <li className="relative">
              <span
                className="absolute -left-[41px] top-1 w-5 h-5 rounded-full 
                     bg-[#171d32] border-2 border-white"
              ></span>

              <h1 className="text-3xl font-bold">BCA (2024 - PRESENT)</h1>

              <h4 className="text-2xl mt-3">UNIVERSITY OF MAHARANI COLLEGE</h4>

              <h6 className="text-xl">CGPA - 8</h6>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Education;

import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold bg-gray-400 w-fit mx-auto p-4 mt-10">
        ABOUT ME
      </h1>
      <div className=" grid mt-8 gap-3 max-h-85 grid-cols-1 md:flex md: justify-center pb-8">
        <div>
          <img className="h-96 w-96 rounded-lg" src="sajib.jpg" alt="" />
        </div>

        <div className="my-24 md:w-1/2">
          <h1 className="text-4xl font-mono font-bold text-green-800">
            SAJIB HOSSAIN
          </h1>
          <p className="text-lg font-serif font-semibold">
            Hi this is Sajib Hossain. I am Student of Computer Science &
            Engineering. I love coding and I want to be a Full Stack Developer
            thats why I enroll in this course.Now I am Working as a Web Content
            Developer in RedGreen Technology. In this course i learn many
            thinks. thanks to Programming Hero Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import Image from "next/image";
import React from "react";

function TraineeLecture() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Lecture</h1>
        <h2 className="text-gray-600 text-base mt-2">Lecture Management</h2>
        <p className="mt-4">
          The Lecture page provides an overview of the Lecture management
          system, including the ability to Open Lecture link, Lab link and
          download the files of Lecture.
        </p>
        <div className="content-section__box">
          <div className="mt-4">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Lecture Data Table include the Trainer Name, Lecture Link, Lab
              Link, Date, Password,and File. Below is the image of Lecture page:
            </p>
            <div className="flex items-center justify-center mb-5">
              <Image
                src="/Traineelecture.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraineeLecture;

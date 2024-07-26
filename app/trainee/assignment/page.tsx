import Image from "next/image";
import React from "react";

function TraineeAssignment() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Assignment</h1>
        <h2 className="text-gray-600 text-base mt-2">Assignment Management</h2>
        <p className="mt-4">
          The Assignment page provides an overview of the Assignment management
          system, including the ability to view the marks , download the
          assignment file, and Upload the Solution.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Assignment Data Table include the Course Name, Module name,
              Total Marks, Due Date, Helper Link, Assignment File, Soultion file
              and uploading the solution. Below is the image of Assignment page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/traineeassignment.png"
              alt="IMG NO FOUND"
              className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>

          <div className="mt-10">
            <h1 className="font-semibold mt-4">How to Upload the Assignment</h1>
            <p className="mb-5">
              To Upload the a Solution, click the Upload Solution Icon. This
              will Upload your Solution.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/uploadsolution.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraineeAssignment;

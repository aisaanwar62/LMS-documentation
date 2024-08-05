import Image from "next/image";
import React from "react";

function TraineeSchedule() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Schedule</h1>
        <p className="mt-4">
          The Schedule page provides an overview of the Schedule management
          system, including the ability to view the schedule of the trainee.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Schedule Show the starting date of the Batch. Below is the
              image of Schedule page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/trainee-schedule.png"
              alt="IMG NO FOUND"
              className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
              width={900}
              height={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraineeSchedule;

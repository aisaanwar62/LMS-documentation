import Image from "next/image";
import React from "react";

function TraineeAttendance() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Attedance</h1>
        <p className="mt-4">
          The Attendance page provides an overview of the Attendance management
          system, including the ability to View the daily mark attendance and
          the overall attendance of the batch.
        </p>
        <div className="content-section__box">
          <div className="mt-4">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Attendance Data Table include the Trainee Name, Batch, Name
              and Status. Below is the image of Attendance page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/trainee-attendance.png"
              alt="IMG NO FOUND"
              className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={900}
              width={900}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraineeAttendance;

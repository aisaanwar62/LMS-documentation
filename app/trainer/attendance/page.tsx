import Image from "next/image";
import React from "react";

function TrainerAttendance() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Attedance</h1>
        <h2 className="text-gray-600 text-base mt-2">Attendance Management</h2>
        <p className="mt-4">
          The Attendance page provides an overview of the Attendance management
          system, including the ability to mark Absent, Present or Leave.
        </p>
        <div className="content-section__box">
          <div className="mt-4">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Attendance Data Table include the Trainee Name, Phone Number,
              Email, and Mark Attendance. Below is the image of Attendance page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/mark-attendance.png"
              alt="IMG NO FOUND"
              className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={750}
              width={850}
            />
          </div>
          <div className="mt-10">
            <h1 className="font-bold">How to Mark Attendance daily</h1>
            <p className="mb-5">
              To Mark the attendance of the trianees, click the `Get Attendance`
              button a dialog box appears. Select the Date and Batch for which
              you want to mark attendance.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/get-attendance-by-trainer.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={850}
              />
            </div>{" "}
            <div className="flex items-center justify-center my-8">
              <Image
                src="/get-attendance.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={350}
                width={450}
              />
            </div>
            <p className="mb-5">
              Now you can check mark the Trainee as Present, Absent or Leave.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/mark-attendance-options.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <h1 className="font-bold">Show or Hide Specific columns</h1>
            <p className="mb-5">
              To show or hide specific columns in the attendance table, click
              the `Columns` button and select or deselect the columns you want
              to display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/mark-attendance-column.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={850}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerAttendance;

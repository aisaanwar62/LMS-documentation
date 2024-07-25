import React from "react";

function CoursesDocumentation() {
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
            <img
              src="/markattendance.png"
              alt="IMG NO FOUND"
              className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="mt-10">
            <h1 className="font-bold">Filter the Record</h1>
            <p className="mb-5">
              To search for a Record, use the search box on the Attendance
              management page to filter the list by Trainee name and email.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/markattendance.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDocumentation;

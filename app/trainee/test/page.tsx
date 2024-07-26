import Image from "next/image";
import React from "react";

function TraineeTest() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Test</h1>
        <h2 className="text-gray-600 text-base mt-2">Test Management</h2>
        <p className="mt-4">
          The Tests page provides an overview of the Tests management system,
          including the ability to Attempt Start the Test, Filter the Test, and
          View Result.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Test Data Table include the Course Name, Module name,
              Duration,Questions, Start/End Time, Date, and Actions to Start the
              Test and After completion you can View the Result Below is the
              image of Test page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/traineetest.png"
              alt="IMG NO FOUNDd"
              className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>

          <div className="mt-14">
            <h1 className="font-bold">How to Manage Your Tests</h1>
            <h1 className="font-semibold mt-4">1. Start the Test</h1>
            <p className="mb-5">
              To Start the Test , click the {`Action (...)`} in the last column
              of the table, then select the Start Test option from the dropdown
              menu. A dialog box appear then click the Start Button to continue.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/testdialogbox.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/teststart.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
            <h1 className="font-semibold mt-4">2. Filter the Record</h1>

            <p className="mb-5">
              To search for a Test, use the search box on the Test management
              page to filter the list by Course name.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/traineefiltertest.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={1000}
                width={1000}
              />
            </div>
            <h1 className="font-semibold mt-4">
              3. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the Test table, click the
              Columns button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/traineetestcolumn.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={150}
                width={200}
              />
            </div>

            <h1 className="font-semibold mt-4">4. View Result</h1>

            <p className="mb-5">
              To View the Result, click the {`Action (...)`} in the last column
              of the table, then select the View Result option from the dropdown
              menu. This will redirect to the Result age.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/traineeviewresult.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={250}
                width={250}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/traineeresult.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraineeTest;

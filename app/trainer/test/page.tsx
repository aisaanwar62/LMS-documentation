import React from "react";

function TrainersDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Tests</h1>
        <h2 className="text-gray-600 text-base mt-2">Tests Management</h2>
        <p className="mt-4">
          The Tests page provides an overview of the Tests management system,
          including the ability to Add, View Result and Delete Tests.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Test Data Table include the Course Name, Module name, Batch,
              Duration, Start/End Time, Date, Questions, Total Tests and Actions
              to View Result or Delete the Test. Below is the image of Test
              page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/test.png"
              alt="IMG NO FOUND"
              className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="overflow-x-auto"></div>
          <div className="mt-10">
            <h1 className="font-bold">How to Manage Tests</h1>
            <h1 className="font-semibold mt-4">1. Add New Test</h1>
            <p className="mb-5">
              To add a new Test, click the "Add New" button. This will redirect
              you to a form where you can input the Test details.
            </p>
            <div className="flex items-center justify-center mt-5">
              <img
                src="/addtest.png"
                alt="IMG NO FOUND"
                className="h-96 w-72 shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h1 className="font-semibold mt-4">2. Filter the Record</h1>
            <p className="mb-5">
              To search for a Test, use the search box on the Test management
              page to filter the list by Name and status.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainertestfilter.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-4">3. View Results</h1>
            <p className="mb-5">
              To view Results, click the {`Action (...)`} in the last column of
              the table, then select the "View Result" option from the dropdown
              menu. This will open a page to View Result.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/testresult.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-4">4. Delete the Record</h1>
            <p className="mb-5">
              To delete an Test, click the {`Action (...)`} in the last column
              of the table, then select the "Delete" option from the dropdown
              menu. Confirm the deletion in the dialog box that appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainertestdeletion.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-4">
              5. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the Test table, click the
              "Columns" button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainertestcolumn.png"
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

export default TrainersDocumentation;

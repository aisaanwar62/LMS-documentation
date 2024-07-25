import React from "react";

function TrainersDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Assignment</h1>
        <h2 className="text-gray-600 text-base mt-2">Assignment Management</h2>
        <p className="mt-4">
          The Assignment page provides an overview of the Assignment management
          system, including the ability to Add, Search, View Trainees
          Assignment, Copy Submodule ID and delete Assignment.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Assignment Data Table include the Course Name, Module name,
              Helping Link, File, Due Date, Total Marks and Action to View
              Trainees Assignment, Copy Submodule ID or Delete the Assignment.
              Below is the image of Assignment page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/assignment.png"
              alt="IMG NO FOUND"
              className="h-72 w-auto shadow-lg transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="mt-10">
            <h1 className="font-bold">How to Manage Assignment</h1>
            <h1 className="font-semibold mt-4">1. Add New Assignment</h1>
            <p className="mb-5">
              To add a new Assignment, click the "Add New" button. This will
              redirect you to a form where you can input the Assignment details.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/addassignment.png"
                alt="IMG NO FOUND"
                className="h-96 w-96 shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-4">2. Filter the Record</h1>
            <p className="mb-5">
              To search for a Assignment, use the search box on the Assignment
              management page to filter the list by Assignment name or status.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainerfilterassignment.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-4">3. View Trainees Assignment</h1>
            <p className="mb-5">
              To view trainees assignment, click the {`Action (...)`} in the
              last column of the table, then select the "View Trainees
              Assignment" option from the dropdown menu. This will open a page
              to View Trainees Assignment.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainermarkassignment.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-4">4. Delete the Record</h1>
            <p className="mb-5">
              To delete an assignment, click the {`Action (...)`} in the last
              column of the table, then select the "Delete" option from the
              dropdown menu. Confirm the deletion in the dialog box that
              appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainerassignmentdeletion.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-4">
              5. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the assignment table, click
              the "Columns" button and select or deselect the columns you want
              to display.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainerlecturecolumn.png"
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

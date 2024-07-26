import Image from "next/image";
import React, { useState } from "react";

function FeedbackDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Feedback</h1>
        <h2 className="text-gray-600 text-base mt-2">Feedback Management</h2>
        <p className="mt-4">
          The Feedback page provides an overview of the feedback management
          system, including the ability to view, add, edit, search, and delete
          feedback.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Feedback Data Table show the Name of the Module, Trainer,
              Batch, and the Action to View Trainees Feedback, and delete the
              Specific Record. Below is the image of the Feedback page:
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/feedback.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={1000}
                width={1000}
              />
            </div>
          </div>

          <div className="mt-14">
            <h1 className="font-bold">How to Manage Feedback</h1>
            <h1 className="font-semibold mt-4">1. Add New Feedback</h1>
            <p className="mb-5">
              To add new feedback, click the Add New button. This will redirect
              you to a form where you can input the feedback details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/adminaddfeedback.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={250}
                width={350}
              />
            </div>
            <h1 className="font-semibold mt-4">2. Filter the Record</h1>
            <p className="mb-5">
              To search for feedback, use the search box on the feedback
              management page to filter the list by name or title.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/adminfilterfeedback.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={1000}
                width={1000}
              />
            </div>
            <h1 className="font-semibold mt-4">3. View Trainees Feedback</h1>
            <p className="mb-5">
              To View Trainee Feedback, click the {`Action (...)`} in the last
              column of the table, then select the View Trainee Feedback option
              from the dropdown menu. This will redirect you to a page where you
              can view the Trainee Feedback detail.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/viewtraineefeedback.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={950}
                width={950}
              />
            </div>
            <h1 className="font-semibold mt-4">4. Delete Feedback</h1>
            <p className="mb-5">
              To Delete feedback, click the {`Action (...)`} in the last column
              of the table, then select the Delete option from the dropdown
              menu. Confirm the deletion in the dialog box that appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/feedbackdeletion.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-2">
              5. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the feedback table, click the
              Columns button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/feedbackcolumn.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={250}
                width={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDocumentation;

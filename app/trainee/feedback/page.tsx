import React, { useState } from "react";

function FeedbackDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Feedback</h1>
        <h2 className="text-gray-600 text-base mt-2">Feedback Management</h2>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-5">
              The Feedback page provides an overview of the feedback management
              system, including the ability to view, add, edit, search, and
              delete feedback.
            </p>
            <div className="flex items-center justify-center mb-5">
              <img
                src="/traineefeedback.png"
                alt="admin dashboard"
                className="h-64 w-full shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/traineestartfeedback.png"
                alt="admin dashboard"
                className="h-full w-full shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div className="overflow-x-auto"></div>
          <div className="mt-6">
            <h1 className="font-bold">How to Manage Feedback</h1>
            <p className="mb-5">
              1. To add new feedback, click the "Add New" button. This will
              redirect you to a form where you can input the feedback details.
            </p>
            <p className="mb-5">
              2. To search for feedback, use the search box on the feedback
              management page to filter the list by name or title.
            </p>
            <p className="mb-5">
              3. To edit existing feedback, click the {`option(...)`} in the
              last column of the table and select the edit option from the
              dropdown menu. This will open a form for updating feedback
              details.
            </p>
            <p className="mb-5">
              4. To delete feedback, click the {`option(...)`} in the last
              column of the table and select the delete option from the dropdown
              menu. Confirm the deletion in the prompt that appears.
            </p>
            <p className="mb-5">
              5. To show or hide specific columns in the feedback table, click
              the "Columns" button and select or deselect the columns you want
              to display.
            </p>
            <p className="mb-5">
              6. To copy the CNIC of feedback, click the {`option(...)`} in the
              last column of the table. This will copy the CNIC to your
              clipboard.
            </p>
            <p className="mb-5">
              7. To schedule feedback, click the {`option(...)`} in the last
              column of the table and select the scheduling option from the
              dropdown menu. This will allow you to set or update the feedback
              schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeedbackDocumentation;

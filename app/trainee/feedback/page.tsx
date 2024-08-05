import Image from "next/image";
import React, { useState } from "react";

function TraineeFeedback() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Feedback</h1>
        <h2 className="text-gray-600 text-base mt-2">Feedback Management</h2>
        <p className="mt-4">
          The Feedback page provides an overview of the feedback management
          system, including the ability to view, Start, search, and delete
          feedback.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Feedback Data Table show the Name of the Module, Trainer,
              Batch, and the Action to Start Feedback, and delete the Feedback.
              Below is the image of the Feedback page:
            </p>
            <div className="flex items-center justify-center mb-5">
              <Image
                src="/trainee-feedbackpage.png"
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
              To Start feedback, click the {`Action (...)`} in the last column
              of the table, then select the Start Feedback option from the
              dropdown menu. This will redirect you to a page where you can
              Start Feedback.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainee-start-feedback.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainee-start-feeback-page1.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainee-start-feedback-page2.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>

            <h1 className="font-semibold mt-2">
              2. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the feedback table, click the
              Columns button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainee-feeback-column.png"
                alt="admin dashboard"
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

export default TraineeFeedback;

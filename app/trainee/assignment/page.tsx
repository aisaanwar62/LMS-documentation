import React from "react";

function QuestionDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Questions</h1>
        <h2 className="text-gray-600 text-base mt-2">Question Management</h2>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-5">
              The Question page provides an overview of the Question management
              system, including the ability to view, add, edit, search, and
              delete questions.
            </p>
            <div className="flex items-center justify-center">
              <img
                src="/traineeassignment.png"
                alt="IMG NO FOUND"
                className="h-56 w-full shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div className="overflow-x-auto"></div>
          <div className="mt-6">
            <h1 className="font-bold">How to Manage Questions</h1>
            <p className="mb-5">
              1. To add a new Question, click the "Add New" button. This will
              redirect you to a form where you can input the question details.
            </p>
            <p className="mb-5">
              2. To add a new Question by CSV(Comma-Separated Values), click the
              "Add CSV" button. This will redirect you to a form where you can
              input the details about Course, Module and File.
            </p>
            <p className="mb-5">
              3. To search for a Question, use the search box on the Question
              management page to filter the list by course or question.
            </p>

            <p className="mb-5">
              4. To delete a Question, click the {`option(...)`} in the last
              column of the table and select the delete option from the dropdown
              menu. Confirm the deletion in the prompt that appears.
            </p>
            <p className="mb-5">
              5. To show or hide specific columns in the Question table, click
              the "Columns" button and select or deselect the columns you want
              to display.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDocumentation;

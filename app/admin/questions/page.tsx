import Image from "next/image";
import React from "react";

function QuestionDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Questions</h1>
        <h2 className="text-gray-600 text-base mt-2">Question Management</h2>
        <p className="mt-4">
          The Question page provides an overview of the Question management
          system, including the ability to view, add, edit, search, and delete
          questions.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Question Data Table show the Course, Module, Question, Correct
              Option and the Action to delete the Specific Record. Below is the
              image of the Questions page:
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/question.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={950}
                width={1000}
              />
            </div>
          </div>

          <div className="mt-10">
            <h1 className="font-bold">How to Manage Questions</h1>
            <h1 className="font-semibold mt-4">1. Add New Question</h1>
            <p className="mb-5">
              To add a new Question, click the Add New button. This will
              redirect you to a form where you can input the question details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/addquestion.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={350}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-2">2. Add CSV</h1>
            <p className="mb-5">
              To add a new Question by CSV(Comma-Separated Values), click the
              Add CSV button. This will redirect you to a form where you can
              input the details about Course, Module and File.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/addquestioncsv.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-2">3. Filter the Record</h1>
            <p className="mb-5">
              To search for the Record, use the search box on the Question
              management page to filter the list by course or question.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/adminfilterquestion.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={950}
                width={950}
              />
            </div>
            <h1 className="font-semibold mt-2">4. Delete the Record</h1>
            <p className="mb-5">
              To delete a Question, click the {`Action (...)`} in the last
              column of the table, then select the Delete option from the
              dropdown menu. Confirm the deletion in the prompt that appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/questiondeletion.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-2">
              5. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the Question table, click the
              Columns button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/questioncolumn.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionDocumentation;

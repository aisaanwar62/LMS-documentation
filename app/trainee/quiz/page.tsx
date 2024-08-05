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
              src="/trainee-test.png"
              alt="IMG NO FOUNDd"
              className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={900}
              width={900}
            />
          </div>

          <div className="mt-14">
            <h1 className="font-bold">How to Manage Your Tests</h1>
            <h1 className="font-semibold mt-4">1. Start the Test</h1>
            <p className="mb-5">
              To Start the Test , click the {`Action (...)`} in the last column
              of the table, then select the Start Test option from the dropdown
              menu. A Message appear that give Instructions. Click on the Let
              get Started.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/start-test-option.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>{" "}
            <div className="flex items-center justify-center my-8">
              <Image
                src="/test-dialogbox.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <p className="font-semibold mt-4">Now Quiz Started.</p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/test-start.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
            <p className="font-semibold mt-4">
              Click on Next to go to the next question.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/quiz-next-question.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
            <p className="font-semibold mt-4">
              If you switch tabs it is regarded as cheating case your test ends
              with a message on the top of screen.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/cheating-case.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
            <p className="font-semibold mt-4">
              If you did not switch tabs and successfully attempt the quiz then
              a page with your scores appear in front of you.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/your-scores.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <h1 className="font-semibold mt-4">2. Filter the Record</h1>
            <p className="mb-5">
              To search for a Test, use the search box on the Test management
              page to filter the list by Course name.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/filter-Quiz.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={900}
                width={900}
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
                src="/trainee-test-column.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
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
                src="/trainee-view-result.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainee-result.png"
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

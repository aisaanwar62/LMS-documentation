import React from "react";

function TraineesDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Trainees</h1>
        <h2 className="text-gray-600 text-base mt-2">Trainee Management</h2>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-5">
              The Trainees page provides an overview of the trainee management
              system, including the ability to view, add, edit, search, and
              delete trainees.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/traineetest.png"
              alt="IMG NO FOUNDd"
              className="h-64 w-full shadow-lg transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="flex items-center justify-center mt-5">
            <img
              src="/testdialogbox.png"
              alt="IMG NO FOUNDd"
              className="h-64 w-1/2 shadow-lg transform transition-transform duration-300 hover:scale-110"
            />
          </div>

          <div className="flex items-center justify-center mt-5">
            <img
              src="/teststart.png"
              alt="IMG NO FOUNDd"
              className="h-96 w-3/4 shadow-lg transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="overflow-x-auto"></div>
          <div className="mt-6">
            <h1 className="font-bold">How to Manage Trainees</h1>
            <p className="mb-5">
              1. To add a new trainee, click the "Add New" button. This will
              redirect you to a form where you can input the trainee details.
            </p>
            <p className="mb-5">
              2. To search for a trainee, use the search box on the trainee
              management page to filter the list by trainee name.
            </p>

            <p className="mb-5">
              3. To edit an existing trainee, click the {`option(...)`} in the
              last column of the table select the edit option from the dropdown
              menu. This will open a form for updating trainee details.
            </p>
            <p className="mb-5">
              4. To delete a trainee, click the {`option(...)`} in the last
              column of the table select the delete option from the dropdown
              menu. Confirm the deletion in the prompt that appears.
            </p>
            <p className="mb-5">
              5. To show or hide specific columns in the trainee table, click
              the "Columns" button and select or deselect the columns you want
              to display.
            </p>
            <p className="mb-5">
              6. To copy the CNIC of a traniee , click the {`option(...)`} in
              the last column of the table. This will copy the CNIC to your
              clipboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraineesDocumentation;

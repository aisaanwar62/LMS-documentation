import React from "react";

function TrainersDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Trainers</h1>
        <h2 className="text-gray-600 text-base mt-2">Trainer Management</h2>
        <p className="mt-4">
          The Trainers page provides an overview of the trainer management
          system, including the ability to view the overall trainers, add, edit,
          search, and delete trainers.
        </p>
        <div className="content-section__box">
          <div className="mt-4">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Trainer Data Table show the Name of the Tainer, Email, Phone,
              Gender and the Actions to Copy trainer ID, Edit and delete the
              Specific Record. Below is the image of the Trainer page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/trainer.png"
              alt="IMG NO FOUND"
              className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-10">
            <h1 className="font-bold">How to Manage Trainers</h1>
            <h1 className="font-semibold mt-4">1. Add New Trainer</h1>
            <p className="mb-5">
              To add a new trainer, click the "Add New" button. This will
              redirect you to a form where you can input the trainer details.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/addtrainers.png"
                alt="IMG NO FOUND"
                className="h-96 w-96 shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-2">2. Filter the Record</h1>
            <p className="mb-5">
              To search for a trainer, use the search box on the trainer
              management page to filter the list by trainer email and name.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/adminfiltertrainer.png"
                alt="IMG NO FOUND"
                className="h-52 w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-2">3. Edit the Record</h1>
            <p className="mb-5">
              To edit an existing trainer, click the {`Action (...)`} in the
              last column of the table, then select the "Edit" option from the
              dropdown menu. This will open a page for updating trainer details.
            </p>
            <div className="flex items-center justify-center my-10">
              <img
                src="/edittrainer.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-2">4. Delete the Record</h1>
            <p className="mb-5">
              To delete an existing trainer, click the {`Action (...)`} in the
              last column of the table, then select the "Delete" option from the
              dropdown menu. Confirm the deletion in the dialog box that
              appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainerdeletion.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-2">
              5. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the trainer table, click the
              "Columns" button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/admintrainercolumn.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* <h1 className="font-semibold mt-2">
              6. Copy the CNIC of a Trainer
            </h1>
            <p className="mb-5">
              To copy the CNIC of a trainer, click the {`Action (...)`} in the
              last column of the table, then click the "Copy trainer ID" option
              form the dropdown menu. This will copy the CNIC to your clipboard.
            </p>
            <div className="flex items-center justify-center mb-5">
              <img
                src="/copytainerid.png"
                alt="IMG NO FOUND"
                className="h-56 w-60 shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainersDocumentation;

import Image from "next/image";
import React from "react";

function TraineesDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Trainees</h1>
        <h2 className="text-gray-600 text-base mt-2">Trainee Management</h2>
        <p className="mt-4">
          The Trainees page provides an overview of the trainee management
          system, including the ability to view the overall reocrd, add, edit,
          search, and delete trainees.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Trainee Data Table show the Name of the Tainee, Father Name,
              Email, Phone, Batch and the Actions to Copy trainee ID, Edit and
              delete the Specific Record. Below is the image of the Trainee
              page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/trainees.png"
              alt="IMG NO FOUNDd"
              className="  shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={900}
              width={1000}
            />
          </div>

          <div className="mt-10">
            <h1 className="font-bold">How to Manage Trainees</h1>
            <h1 className="font-semibold mt-4">1. Add New Trainee</h1>
            <p className="mb-5">
              To add a new trainee, click the Add New button. This will redirect
              you to a form where you can input the trainee details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/addtrainees.png"
                alt="IMG NO FOUNDd"
                className="shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={350}
                width={350}
              />
            </div>
            <h1 className="font-semibold mt-2">2. Filter the Record</h1>
            <p className="mb-5">
              To search for a trainee, use the search box on the trainee
              management page to filter the list by trainee email and name.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/adminfiltertrainee.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={1000}
                width={950}
              />
            </div>
            <h1 className="font-semibold mt-2">3. Edit the Record</h1>
            <p className="mb-5">
              To edit an existing trainee, click the {`Action (...)`} in the
              last column of the table, then select the Edit option from the
              dropdown menu. This will open a page for updating trainee details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/edittrainees.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={950}
                width={950}
              />
            </div>
            <h1 className="font-semibold mt-2">4. Delete the Record</h1>
            <p className="mb-5">
              To delete an existing trainee, click the {`Action (...)`} in the
              last column of the table, then select the Delete option from the
              dropdown menu. Confirm the deletion in the dialog box that
              appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/traineedeletion.png"
                alt="IMG NO FOUNDd"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-2">
              5. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the trainee table, click the
              Columns button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/traineecolumn.png"
                alt="IMG NO FOUNDd"
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

export default TraineesDocumentation;

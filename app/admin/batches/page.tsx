import Image from "next/image";
import React from "react";

function BatchesDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Batches</h1>
        <h2 className="text-gray-600 text-base mt-2">Batch Management</h2>
        <p className="mt-4">
          The Batches page provides an overview of the batch management system,
          including the ability to view the overall record, add, edit, search,
          and delete batches.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Branch Data Table show the Name of the Branch, Address,
              Course, Trainers, Start Date, End Date, Status and the Actions to
              Copy Batch ID, Edit, Schedule Batch and delete the Specific
              Record. Below is the image of the Batch page:
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/batches.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                width={1000}
                height={900}
              />
            </div>
          </div>

          <div className="overflow-x-auto"></div>
          <div className="mt-10">
            <h1 className="font-bold">How to Manage Batches</h1>
            <h1 className="font-semibold mt-4">1. Add New Batche</h1>
            <p className="mb-5">
              To add a new batch, click the `Add New`` button. This will
              redirect you to a form where you can input the batch details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/addbatches.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                width={350}
                height={350}
              />
            </div>
            <h1 className="font-semibold mt-2">2. Filter the Record</h1>
            <p className="mb-5">
              To search for a batch, use the search box on the batch management
              page to filter the list by batch name or status.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/adminfilterbatch.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                width={1000}
                height={1000}
              />
            </div>
            <h1 className="font-semibold mt-2">3. Edit the Record</h1>
            <p className="mb-5">
              To edit an existing batch, click the {`Action (...)`} in the last
              column of the table, then select the `Edit` option from the
              dropdown menu. This will open a page for updating batch details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/editbatches.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                width={950}
                height={950}
              />
            </div>
            <h1 className="font-semibold mt-2">4. Delete the Record</h1>
            <p className="mb-5">
              To delete an existing batch, click the {`Action (...)`} in the
              last column of the table, then select the `Delete` option from the
              dropdown menu. Confirm the deletion in the dialog box that
              appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/deletebatch.png"
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
              To show or hide specific columns in the batch table, click the
              `Columns` button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/batchcolumn.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={250}
                width={250}
              />
            </div>

            <h1 className="font-semibold mt-2">
              6. Schedule a Batch/ Creating Attendance
            </h1>
            <p className="mb-5">
              To schedule a batch, click the {`Action (...)`} in the last column
              of the table, then select the `Schedule Batch` option from the
              dropdown menu. This will allow you to set or update the batch
              schedule.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/schedulebatch.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchesDocumentation;

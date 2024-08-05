import Image from "next/image";
import React from "react";

function TrainerSubmodule() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Submodule</h1>
        <h2 className="text-gray-600 text-base mt-2">Submodule Management</h2>
        <p className="mt-4">
          The Submodule page provides an overview of the Submodule management
          system, including the ability to view, search, Copy Submodule ID edit,
          and delete Submodule.
        </p>
        <div className="content-section__box">
          <div className="mt-4">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Submodule Data Table include the Submodule Name, Date, Batch,
              Module, Status and Actions to Copy Submodule ID, Edit, Delete.
              Below is the image of Submodule page:
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/submodule.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={900}
                width={900}
              />
            </div>
          </div>

          <div className="overflow-x-auto"></div>
          <div className="mt-10">
            <h1 className="font-bold">How to Manage Submodule</h1>
            <h1 className="font-semibold mt-4">1. Filter the Record</h1>
            <p className="mb-5">
              To search for a Submodule, use the search box on the Module
              management page to filter the list by status or name.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/submodule-filter.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={800}
                width={800}
              />
            </div>
            <h1 className="font-semibold mt-4">2. Edit the Record</h1>
            <p className="mb-5">
              To edit an existing Submodule, click the {`Action (...)`} in the
              last column of the table, then select the edit option from the
              dropdown menu. This will open a form for updating submodule
              details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/edit-submodule-action.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>{" "}
            <div className="flex items-center justify-center my-8">
              <Image
                src="/edit-submodule.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
            <h1 className="font-semibold mt-4">3. Delete the Record</h1>
            <p className="mb-5">
              To delete a Submodule, click the {`Action (...)`} in the last
              column of the table, then select the delete option from the
              dropdown menu. Confirm the deletion in the dialog box that
              appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/submoduledeletion.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-4">
              4. Show or Hide specific columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the Submodule table, click the
              Columns button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainer-submodule-column.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerSubmodule;

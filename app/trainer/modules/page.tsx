import Image from "next/image";
import React from "react";

function TrainerModule() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Modules</h1>
        <h2 className="text-gray-600 text-base mt-2">Modules Management</h2>
        <p className="mt-4">
          The Module page provides an overview of the Module management system,
          including the ability to view, add, edit, search, and delete batches.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Module Data Table show the Name of the Module, Batch, Trainer,
              Duration, Start Date, End Date, Status and the Actions to Copy
              Module ID, Edit and delete the Specific Record. Below is the image
              of the Modules page:
            </p>
            <div className="flex items-center justify-center">
              <Image
                src="/modules.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
          </div>

          <div className="mt-10">
            <h1 className="font-bold">How to Manage Module</h1>
            <h1 className="font-semibold mt-4">1. Add New Module</h1>
            <p className="mb-5">
              To add a new Module, click the Add New button. This will redirect
              you to a form where you can input the batch details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/admin-before-add-module.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>{" "}
            <div className="flex items-center justify-center my-8">
              <Image
                src="/add-module.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={350}
                width={350}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/admin-after-add-module.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <h1 className="font-semibold mt-2">2. Filter the Record</h1>
            <p className="mb-5">
              To search for a Module, use the search box on the Module
              management page to filter the list by status or name.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/admin-filter-module.png"
                alt="IMG NO FOUND"
                className="shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <h1 className="font-semibold mt-2">3. Edit the Module</h1>
            <p className="mb-5">
              To edit an existing Module, click the {`Action (...)`} in the last
              column of the table, then select the Edit option from the dropdown
              menu. This will open a page for updating Module details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/edit-module-action.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/edit-module.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <h1 className="font-semibold mt-2">4. Add the Submodule</h1>
            <p className="mb-5">
              To a Submodule in a Module, click the Add a submodule button
              inside the Submodules part. This will open a form to Add New
              Submodule details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/admin-before-add-submodule.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/admin-add-submodule.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <h1 className="font-semibold mt-2">
              5. Edit the Submodule/ Chapter Creation
            </h1>
            <p className="mb-5">
              To edit the Submodules within a module, click the edit icon in the
              Submodules part. This will open a page for updating the Submodule.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/admin-edit-submodule.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={650}
                width={750}
              />
            </div>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/edit-submodule.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={650}
                width={750}
              />
            </div>
            <h1 className="font-semibold mt-2">6. Delete the Module</h1>
            <p className="mb-5">
              To delete an existing Module, click the {`Action (...)`} in the
              last column of the table, then select the Delete option from the
              dropdown menu. Confirm the deletion in the dialog box that
              appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/moduledeletion.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-2">
              7. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the Module table, click the
              Columns button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/modules-column.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerModule;

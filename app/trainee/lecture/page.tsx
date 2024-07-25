import React from "react";

function ModuleDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Module</h1>
        <h2 className="text-gray-600 text-base mt-2">Module Management</h2>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-5">
              The Module page provides an overview of the Module management
              system, including the ability to view, add, edit, search, and
              delete batches.
            </p>
            <div className="flex items-center justify-center">
              <img
                src="/traineelecture.png"
                alt="IMG NO FOUND"
                className="h-56 w-auto shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div className="overflow-x-auto"></div>
          <div className="mt-6">
            <h1 className="font-bold">How to Manage Module</h1>
            <p className="mb-5">
              1. To add a new Module, click the "Add New" button. This will
              redirect you to a form where you can input the batch details.
            </p>
            <p className="mb-5">
              2. To search for a Module, use the search box on the Module
              management page to filter the list by status or name.
            </p>

            <p className="mb-5">
              3. To edit an existing Module, click the {`option(...)`} in the
              last column of the table select the edit option from the dropdown
              menu. This will open a form for updating Module details.
            </p>
            <p className="mb-5">
              4. To delete a Module, click the {`option(...)`} in the last
              column of the table select the delete option from the dropdown
              menu. Confirm the deletion in the prompt that appears.
            </p>
            <p className="mb-5">
              5. To show or hide specific columns in the Module table, click the
              "Columns" button and select or deselect the columns you want to
              display.
            </p>
            <p className="mb-5">
              6. To copy the CNIC of a Module, click the {`option(...)`} in the
              last column of the table. This will copy the CNIC to your
              clipboard.
            </p>
            <p className="mb-5">
              7. To schedule a Module, click the {`option(...)`} in the last
              column of the table select the scheduling option from the dropdown
              menu. This will allow you to set or update the Module schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModuleDocumentation;

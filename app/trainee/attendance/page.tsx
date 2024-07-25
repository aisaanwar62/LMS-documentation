import React from "react";

function BatchesDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Batches</h1>
        <h2 className="text-gray-600 text-base mt-2">Batch Management</h2>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-5">
              The Batches page provides an overview of the batch management
              system, including the ability to view, add, edit, search, and
              delete batches.
            </p>
            <div className="flex items-center justify-center">
              <img
                src="/traineeattendance.png"
                alt="IMG NO FOUND"
                className="h-96 w-full shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>

          <div className="overflow-x-auto"></div>
          <div className="mt-6">
            <h1 className="font-bold">How to Manage Batches</h1>
            <p className="mb-5">
              1. To add a new batch, click the "Add New" button. This will
              redirect you to a form where you can input the batch details.
            </p>
            <p className="mb-5">
              2. To search for a batch, use the search box on the batch
              management page to filter the list by batch name or other
              criteria.
            </p>

            <p className="mb-5">
              3. To edit an existing batch, click the {`option(...)`} in the
              last column of the table select the edit option from the dropdown
              menu. This will open a form for updating batch details.
            </p>
            <p className="mb-5">
              4. To delete a batch, click the {`option(...)`} in the last column
              of the table select the delete option from the dropdown menu.
              Confirm the deletion in the prompt that appears.
            </p>
            <p className="mb-5">
              5. To show or hide specific columns in the batch table, click the
              "Columns" button and select or deselect the columns you want to
              display.
            </p>
            <p className="mb-5">
              6. To copy the CNIC of a batch, click the {`option(...)`} in the
              last column of the table. This will copy the CNIC to your
              clipboard.
            </p>
            <p className="mb-5">
              7. To schedule a batch, click the {`option(...)`} in the last
              column of the table select the scheduling option from the dropdown
              menu. This will allow you to set or update the batch schedule.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchesDocumentation;

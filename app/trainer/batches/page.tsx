import React from "react";

function BatchesDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Batches</h1>
        <p className="mt-4">
          The Batches page provides an overview of all the batches given to the
          trainer.
        </p>
        <div className="content-section__box">
          <div className="mt-4">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Batch Data Table show the Name of the Batch, Course, Start
              Date, End Date, Status. Below is the image of the Batch page:
            </p>
            <div className="flex items-center justify-center">
              <img
                src="/trainerbatches.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>

          <div className="mt-10">
            <h1 className="font-bold">Filter the Record</h1>
            <p className="mb-5">
              To search for a batch, use the search box on the batch management
              page to filter the list by batch name and course.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/trainerbatches.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BatchesDocumentation;

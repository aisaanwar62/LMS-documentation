import Image from "next/image";
import React from "react";

function TrainerBatches() {
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
              <Image
                src="/trainer-batches.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={950}
              />
            </div>
          </div>

          <div className="mt-10">
            <h1 className="font-bold">Show or Hide Specific columns</h1>
            <p className="mb-5">
              To show or hide specific columns in the Batches table, click the
              `Columns` button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainer-batches-column.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={950}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerBatches;

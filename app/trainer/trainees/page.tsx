import Image from "next/image";
import React from "react";

function TrainerTrainees() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Trainees</h1>
        <h2 className="text-gray-600 text-base mt-2">Trainee Management</h2>
        <p className="mt-4">
          The Trainees page provides an overview of all the Trainees of the
          batch in the Table Form.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10">
              The Trainees Data Table show the Name, Father Name, Email, Phone
              Batch. Below is the image of the Trainee page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/trainer-trainee.png"
              alt="IMG NO FOUNDd"
              className=" w-full shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={900}
              width={900}
            />
          </div>
          <div className="mt-10">
            <h1 className="font-bold">View the Trainee Detail</h1>
            <p className="mb-5">
              To View the details of a Trainee, click the {`Action (...)`} in
              the last column of the table, then select the View Detail from the
              dropdown menu. It takes you to another page.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainer-view-detail-of-trainee.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>{" "}
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainer-view-trainee-detail.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={750}
                width={750}
              />
            </div>
            <h1 className="font-bold">Filter the Record</h1>
            <p className="mb-5">
              To search for a Trainee, use the search box on the Trainees page
              to filter the list by Trainee name and email.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainer-filter-trainee.png"
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

export default TrainerTrainees;

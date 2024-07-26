import Image from "next/image";
import React from "react";

function TrainerTrainees() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Trainees</h1>
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
              src="/trainertrainees.png"
              alt="IMG NO FOUNDd"
              className=" w-full shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={1000}
              width={1000}
            />
          </div>
          <div className="mt-10">
            <h1 className="font-bold">Filter the Record</h1>
            <p className="mb-5">
              To search for a Trainee, use the search box on the Trainees page
              to filter the list by Trainee name and email.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainerfiltertrainee.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={1000}
                width={1000}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerTrainees;

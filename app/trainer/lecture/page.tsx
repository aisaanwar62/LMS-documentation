import Image from "next/image";
import React from "react";

function TrainerLecture() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Lecture</h1>
        <h2 className="text-gray-600 text-base mt-2">Lecture Management</h2>
        <p className="mt-4">
          The Lecture page provides an overview of the Lecture management
          system, including the ability to view, add, delete Lectures.
        </p>
        <div className="content-section__box">
          <div className="mt-4">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Lecture Data Table include the Module Name, Submodule name,
              Lab Link, Recording Link, Password, Date, File and Action to
              Delete the lecture. Below is the image of Lecture page:
            </p>
            <div className="flex items-center justify-center mb-5">
              <Image
                src="/lecture.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={1000}
                width={1000}
              />
            </div>
          </div>

          <div className="mt-10">
            <h1 className="font-bold">How to Manage Lecture</h1>
            <h1 className="font-semibold mt-4">1. Add New Lecture</h1>
            <p className="mb-5">
              To add a new Lecture, click the `Add New` button. This will
              redirect you to a form where you can input the Lecture details.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/addlecture.png"
                alt="IMG NO FOUND"
                className="shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-4">2. Filter the Record</h1>
            <p className="mb-5">
              To search for a Lecture, use the search box on the Lecture
              management page to filter the list by Module name.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/lecture.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={950}
                width={950}
              />
            </div>
            <h1 className="font-semibold mt-4">3. Delete the Lecture</h1>
            <p className="mb-5">
              To delete a Lecture, click the {`Action (...)`} in the last column
              of the table, then select the `Delete` option from the dropdown
              menu. Confirm the deletion in the dialogue box that appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/lecturedeletion.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={450}
                width={450}
              />
            </div>
            <h1 className="font-semibold mt-4">
              5. Show or Hide Specific columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the Question table, click the
              `Columns` button and select or deselect the columns you want to
              display.
            </p>
            <div className="flex items-center justify-center my-8">
              <Image
                src="/trainerlecturecolumn.png"
                alt="IMG NO FOUND"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={150}
                width={200}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerLecture;

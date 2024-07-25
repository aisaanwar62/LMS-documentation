import React from "react";

function CoursesDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Courses</h1>
        <h2 className="text-gray-600 text-base mt-2">Course Management</h2>
        <p className="mt-4">
          The Courses page provides an overview of the course management system,
          including the ability to view the overall record, add, edit, and
          delete courses.
        </p>
        <div className="content-section__box">
          <div className="mt-4">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Course Data Table show the Name of the Course, Course
              Description, Title of Certificate and the Actions to Edit or
              delete the Specific Record. Below is the image of Course page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/courses.png"
              alt="IMG NO FOUND"
              className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>

          <div className="mt-10">
            <h1 className="font-bold">How to Manage Courses</h1>
            <h1 className="font-semibold mt-4">1. Add New Course</h1>
            <p className="mb-5">
              To add a new course, click the "Add New" button. This will
              redirect you to a form where you can input the course details.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/addcourses.png"
                alt="IMG NO FOUND"
                className="h-72 w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-2">2. Edit the Record</h1>
            <p className="mb-5">
              To edit an existing Course, click the {`Action (...)`} in the last
              column of the table, then select the "Edit" option from the
              dropdown menu. This will open a page for updating Course details.
            </p>

            <div className="flex items-center justify-center my-8 ">
              <img
                src="/editcourses.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h1 className="font-semibold mt-2">3. Delete the Record</h1>
            <p className="mb-5">
              To delete an existing Course, click the {`Action (...)`} in the
              last column of the table, then select the "Delete" option from the
              dropdown menu. Confirm the deletion in the dialog box that
              appears.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/confirmdeletion.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h1 className="font-semibold mt-2">
              4. Show or Hide Specific Columns
            </h1>
            <p className="mb-5">
              To show or hide specific columns in the Course table, click the
              "Columns" button and select or deselect the columns you want to
              display.
            </p>

            <div className="flex items-center justify-center my-8">
              <img
                src="/coursecolumnselection.png"
                alt="IMG NO FOUND"
                className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h1 className="font-semibold mt-2">5. Filter the Record</h1>
            <p className="mb-5">
              To search for a Course, use the search box on the Course
              management page to filter the list by Course name and title.
            </p>
            <div className="flex items-center justify-center my-8">
              <img
                src="/adminfiltercourse.png"
                alt="IMG NO FOUND"
                className="h-48 w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDocumentation;

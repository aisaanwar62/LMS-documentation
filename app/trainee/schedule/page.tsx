import React from "react";

function CoursesDocumentation() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Schedule</h1>
        <p className="mt-4">
          The Schedule page provides an overview of the Schedule management
          system, including the ability to view the schedule of the trainee.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The Schedule Show the number of leactures he has to take. Below is
              the image of Schedule page:
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/trianeeschedule.png"
              alt="IMG NO FOUND"
              className="h-full w-full shadow-lg transform transition-transform duration-300 hover:scale-110"
            />
          </div>
          <div className="overflow-x-auto"></div>
          <div className="mt-6">
            <h1 className="font-bold">How to Manage Courses</h1>
            <p className="mb-5">
              1. To add a new course, click the "Add Course" button. This will
              redirect you to a form where you can input the course details.
            </p>
            <p className="mb-5">
              2. To edit an existing course, click the "Edit" button next to the
              course you want to modify. This will open a form for updating
              course details.
            </p>
            <p className="mb-5">
              3. To delete a course, click the "Delete" button next to the
              course you want to remove. Confirm the deletion in the prompt that
              appears.
            </p>
            <p className="mb-5">
              4. To show or hide specific columns in the Course table, click the
              "Columns" button and select or deselect the columns you want to
              display.
            </p>
            <p className="mb-5">
              5. To search for a Course, use the search box on the Course
              management page to filter the list by Course name and title.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesDocumentation;

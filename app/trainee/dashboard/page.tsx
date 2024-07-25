import React from "react";

function Dashboard() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className=" ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <h2 className="text-gray-600 text-base mt-2">Trainee Dashboard</h2>
        <div className="content-section__box">
          <div className="mt-4">
            <p className="mb-10">
              The Trainee Dashboard provides an overview of the key metrics and
              activities related to the Total Modules, Assignment, Tests, Active
              Activity, Your Daily Tasks, Your daily Plans and Tasks FInished.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/traineedashboard.png"
              alt="IMG NO FOUND"
              className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className=" ">
            <div className="mt-10">
              <h1 className="font-bold text-lg">Sections</h1>
              <h1 className="font-semibold mt-4">1. Total Modules</h1>
              <p className="mb-5">
                This section provides an overview of the total number of modules
                assigned to the trainee. It helps in tracking the progress of
                module completion.
              </p>
              <h1 className="font-semibold mt-2">2. Assignments</h1>
              <p className="mb-5">
                The Assignments section shows the number of assignments assigned
                to the trainee, including their status (completed or pending).
              </p>
              <h1 className="font-semibold mt-2">3. Tests</h1>
              <p className="mb-5">
                This section provides information on the tests scheduled for the
                trainee, helping them prepare and stay on top of their test
                schedule.
              </p>
              <h1 className="font-semibold mt-2">4. Active Activity</h1>
              <p className="mb-5">
                The Active Activity section highlights the current activity the
                trainee is engaged in, such as a test or an assignment.
              </p>
              <h1 className="font-semibold mt-2">5. Your Daily Tasks</h1>
              <p className="mb-5">
                This section lists the daily tasks assigned to the trainee,
                ensuring they are aware of their responsibilities for the day.
              </p>
              <h1 className="font-semibold mt-2">6. Your Daily Plans</h1>
              <p className="mb-5">
                The Daily Plans section helps the trainee plan their day by
                outlining the tasks and activities they need to complete.
              </p>{" "}
              <h1 className="font-semibold mt-2">7. Tasks Finished</h1>
              <p className="mb-5">
                This section tracks the tasks the trainee has completed,
                providing a sense of accomplishment and progress.
              </p>
            </div>

            <h1 className="font-bold mt-2 mb-4">
              How to Access the Trainee Dashboard
            </h1>
            <p className="mb-5">
              1. Log in to the Trainee panel using your credentials.
            </p>
            <p className="mb-5">
              2. Navigate to the Dashboard section from the main menu.
            </p>
            <p className="mb-5">
              3. The dashboard will display the sections as described above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

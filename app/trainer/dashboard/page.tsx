import React from "react";

function TrainerDashboard() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className=" ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <h2 className="text-gray-600 text-base mt-2">Trainer Dashboard</h2>
        <div className="content-section__box">
          <div className="mt-4">
            <p className="mb-10">
              The Trainer Dashboard provides an overview of the key metrics and
              activities related to the Total Modules, Total Lectures Delivered,
              Batches Assigned, Tests/Assignments Conducted and list of the 5
              top-performing students.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/trainerdashboard.png"
              alt="IMG NO FOUND"
              className="h-auto w-auto shadow-lg transform transition-transform duration-300 hover:scale-100"
            />
          </div>
          <div className=" ">
            <div className="mt-14">
              <h1 className="font-bold my-4">
                How to Access the Trainer Dashboard
              </h1>
              <p className="mb-5">
                To access the Trainer Dashboard, Login to the Trainer page.
                Below is the image of the Trainer Login page:
              </p>
              <div className="flex items-center justify-center my-8">
                <img
                  src="/trainerlogin.png"
                  alt="IMG NOT FOUND"
                  className="h-96 w-auto  shadow-lg transform transition-transform duration-300 hover:scale-105"
                />
              </div>
              <p className="mb-5">
                1. Log in to the trainer panel using your credentials.
              </p>
              <p className="mb-5">
                2. Navigate to the Dashboard section from the main menu.
              </p>
              <p className="mb-5">
                3. The dashboard will display the sections as described above.
              </p>
              <h1 className="font-bold text-lg">Sections</h1>
              <h1 className="font-semibold mt-4">1. Total Modules</h1>
              <p className="mb-5">
                This section displays the total number of modules assigned to
                the trainer. It helps the trainer quickly assess their current
                module workload.
              </p>
              <h1 className="font-semibold mt-2">
                2. Total Lectures Delivered
              </h1>
              <p className="mb-5">
                This section shows the total number of lectures delivered by the
                trainer. It provides a quick reference for tracking lecture
                delivery.
              </p>
              <h1 className="font-semibold mt-2">3. Batches Assigned</h1>
              <p className="mb-5">
                The Batches Assigned section lists all the batches that the
                trainer is responsible for. It allows the trainer to monitor and
                manage batch assignments.
              </p>
              <h1 className="font-semibold mt-2">
                4. Tests/Assignments Conducted
              </h1>
              <p className="mb-5">
                This section highlights the number of tests and assignments
                conducted by the trainer. It helps the trainer keep track of
                their assessment activities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrainerDashboard;

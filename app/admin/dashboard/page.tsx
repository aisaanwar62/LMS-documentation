import Image from "next/image";
import React from "react";

function Dashboard() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className=" ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">Dashboard</h1>
        <div className="content-section__box">
          <div className="mt-4">
            <p className="mb-10">
              The Admin Dashboard provides an overview of the key metrics and
              activities related to the trainees, trainers, batches, scheduled
              activities, and top-performing students.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/admin-dashboard.png"
              alt="IMG NOT FOUND"
              className="  shadow-lg transform transition-transform duration-300 hover:scale-105"
              height={950}
              width={950}
            />
          </div>
          <div className=" ">
            <div className="mt-14">
              <h1 className="font-bold mt-4 mb-4">
                How to Access the Admin Dashboard
              </h1>
              <p className="mb-5">
                To access the Admin Dashboard, Login to the Admin page. Below is
                the image of the Admin Login page:
              </p>
              <div className="flex items-center justify-center my-8">
                <Image
                  src="/adminlogin.png"
                  alt="IMG NOT FOUND"
                  className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                  height={750}
                  width={750}
                />
              </div>
              <p className="mb-5">
                1. Log in to the admin panel using your credentials.
              </p>
              <p className="mb-5">
                2. Navigate to the Dashboard section from the main menu.
              </p>
              <p className="mb-5">
                3. The dashboard will display the sections as described above.
              </p>
              <h1 className="font-bold text-lg">Sections</h1>
              <h1 className="font-semibold mt-4">1. Total Trainees</h1>
              <p className="mb-5">
                This section displays the total number of trainees enrolled in
                the system. It helps the admin quickly assess the current
                trainee count.
              </p>
              <h1 className="font-semibold mt-2">2. Total Trainers</h1>
              <p className="mb-5">
                This section shows the total number of trainers available. It
                provides a quick reference for the admin to manage the trainers.
              </p>
              <h1 className="font-semibold mt-2">3. Batches</h1>
              <p className="mb-5">
                The Batches section lists all the batches currently active or
                scheduled. It allows the admin to monitor batch progress and
                manage scheduling.
              </p>
              <h1 className="font-semibold mt-2">
                4. Activities Scheduled Today
              </h1>
              <p className="mb-5">
                This section highlights the number of activities (e.g., tests,
                assignments) scheduled for the day. It helps the admin stay
                informed about the days schedule.
              </p>
              <h1 className="font-semibold mt-2">5. Top 5 Students</h1>
              <p className="mb-5">
                The Top 5 Students section lists the highest-performing students
                based on recent assessments. It provides a quick view of the top
                achievers in the system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

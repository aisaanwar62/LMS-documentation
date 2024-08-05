import Image from "next/image";
import React, { useState } from "react";

function MyProgress() {
  return (
    <div className="content-section flex-1 max-h-[calc(100vh - 120px)] mt-20 mb-14">
      <div className="ml-96 pl-16 mr-16">
        <h1 className="text-xl font-bold">My Progress</h1>
        <p className="mt-4">
          The My progress page provides an overview of the Trainee overall
          progress.
        </p>
        <div className="content-section__box">
          <div className="mt-6">
            <h1 className="font-bold">Overview</h1>
            <p className="mb-10 mt-3">
              The My progress page provides an overview of the Trainee overall
              progress. This includes the ability to view the Trainee Details,
              Attendance Report and Per Module Trainee Test Record. Below is the
              image of the My Progress page:
            </p>
            <div className="flex items-center justify-center mb-5">
              <Image
                src="/trainee-myprogress.png"
                alt="admin dashboard"
                className=" shadow-lg transform transition-transform duration-300 hover:scale-105"
                height={850}
                width={850}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProgress;

import React from "react";

function Requiurement() {
  return (
    <div className="content-section h-screen flex-1 overflow-y-auto max-h-[calc(100vh - 120px)] mt-20">
      <div className=" max-w-3xl ml-96 pl-16 mr-auto">
        <h1 className="text-xl font-bold">Requirements</h1>
        <h2 className="text-gray-600 text-base mt-2">
          Minimum requirements to start using the Pie-Technology LMS
        </h2>
        <div className="content-section__box">
          <div className="mt-6">
            <p className="mb-3">Please install the following requirements:</p>
            <p className="mb-1">
              <span className="font-bold">Node.js:</span> Ensure you have
              Node.js installed. Tailwind CSS requires Node.js version 12.13.0
              or higher.
            </p>
            <a
              className="text-blue-700  mb-5 block"
              target="_blank"
              rel="noopener noreferrer"
              href="https://nodejs.org/en/"
            >
              https://nodejs.org/en/
            </a>
            <p className="mb-1">
              <span className="font-bold">NPM:</span> npm is the package manager
              for managing dependencies.
            </p>
            <p className="mb-1">
              You can install npm by installing Node.js. npm comes bundled with
              Node.js.
            </p>
            <a
              className="text-blue-700  mb-5 block"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.npmjs.com/"
            >
              https://www.npmjs.com/
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requiurement;

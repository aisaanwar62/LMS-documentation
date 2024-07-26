import React from "react";

function Installation() {
  return (
    <div className="content-section mt-20 mb-12">
      <div className="h-full ml-96 pl-16 mr-32">
        <h1 className="text-xl font-bold">Installing Dependencies</h1>
        <h2 className="text-gray-600 text-base mt-2">
          A few steps to install the project dependencies for your LMS
        </h2>
        <div className="content-section__box">
          <div className="mt-6">
            <p className="mb-5">
              Dependencies are packages or third-party libraries used in the
              templates, including compiler to compile JS and CSS assets. Follow
              the steps below to install the project dependencies and run the
              compiler:
            </p>
            <ul className="mb-3 ml-2 space-y-4">
              <li>
                <p className="font-semibold mb-1">1. Access Your Terminal:</p>
                Open your terminal or command prompt and navigate to the root
                directory of your project.
                <pre className="italic bg-gray-200 m-2 p-2">
                  cd path/to/your/project
                </pre>
                Replace path/to/your/project with the actual path to your
                project directory.
              </li>
              <li>
                <p className="font-semibold mb-1">2. Install Dependencies:</p>
                Run the following command to install the required packages using
                npm:
                <pre className="italic bg-gray-200 m-2 p-2">npm install</pre>
                This command will download and install all necessary packages
                defined in your package.json file, including Next.js, Tailwind
                CSS, TypeScript, and other dependencies.
              </li>
              <li>
                <p className="font-semibold mb-1">3. Run the Compiler:</p>
                Once the installation is complete, start the development server
                and compiler by running:
                <pre className="italic bg-gray-200 m-2 p-2">npm run dev</pre>
                This command will compile TypeScript, bundle your JavaScript and
                CSS assets, and start the Next.js development server. You should
                see output similar to:
                <pre className="italic bg-gray-200 m-2 p-2">
                  1. your-project-name@1.0.0 dev /path/to/your/project <br />
                  2. next dev <br />
                  3. ready - started server on http://localhost:3000
                </pre>
                Open your browser and navigate to http://localhost:3000 to see
                your project running.
              </li>
              <li>
                <p className="font-semibold mb-1">4. Automatic Compilation:</p>
                While the development server is running, any changes you make to
                the code will trigger automatic recompilation. There is no need
                to manually restart the server unless specified.
              </li>
              <li>
                <p className="font-semibold mb-1">
                  5. Setting Up Tailwind CSS:
                </p>
                Ensure Tailwind CSS is correctly set up by configuring the
                <code>tailwind.config.js</code> and including Tailwind in your
                CSS file.
                <p className="font-normal mb-1">1. Initialize Tailwind CSS:</p>
                <pre className="italic bg-gray-200 m-2 p-2">
                  npx tailwindcss init -p
                </pre>
                This will create a <code>tailwind.config.js</code> file and add
                <code>@tailwind</code> directives to your CSS file.
                <p className="font-normal mb-1">
                  2. Configure <code>tailwind.config.js</code>:
                </p>
                <pre className="bg-gray-200 p-2 m-2">
                  {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
                </pre>
                <p className="font-normal mb-1">
                  3. Include Tailwind in your CSS:
                </p>
                In your global CSS file (e.g., <code>styles/globals.css</code>),
                add the following:
                <pre className="bg-gray-200 p-2 m-2">
                  {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                </pre>
              </li>
              <li>
                <p className="font-semibold mb-1">6. Setting Up TypeScript:</p>
                If you are using TypeScript, ensure it is correctly configured.
                <p className="font-normal mb-1">1. Initialize TypeScript:</p>
                <pre className="italic bg-gray-200 m-2 p-2">npx tsc --init</pre>
                This creates a <code>tsconfig.json</code> file. Next.js
                automatically uses this file for TypeScript settings.
                <p className="font-normal mb-1">
                  2. Add a <code>next-env.d.ts</code>:
                </p>
                Create a file named next-env.d.ts in the root of your project
                with the following content:
                <pre className="bg-gray-200 p-2 m-2">
                  {`/// <reference types="next" />
/// <reference types="next/types/global" />
`}
                </pre>
                <p className="font-normal mb-1">
                  3. Include Tailwind in your CSS:
                </p>
                In your global CSS file (e.g., <code>styles/globals.css</code>),
                add the following:
                <pre className="bg-gray-200 p-2 m-2">
                  {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
                </pre>
              </li>
              <li>
                <p className="font-semibold mb-1">
                  7. Setting Up ESLint and Prettier
                </p>
                <p className="font-normal mb-1">1. Install ESLint:</p>
                <pre className="italic bg-gray-200 m-2 p-2">
                  npm install eslint eslint-config-next --save-dev
                </pre>
                <p className="font-normal mb-1">2. Initialize ESLint:</p>
                <pre className="italic bg-gray-200 m-2 p-2">
                  npx eslint --init
                </pre>
                Follow the prompts to configure ESLint. This will create an
                `.eslintrc` file in your project directory.
                <p className="font-normal mb-1">3. Install Prettier:</p>
                <pre className="italic bg-gray-200 m-2 p-2">
                  npm install prettier eslint-config-prettier
                  eslint-plugin-prettier --save-dev
                </pre>
                This installs Prettier along with its ESLint plugin and
                configuration.
                <p className="font-normal mb-1">
                  4. Create Configuration Files:
                </p>
                <p className="font-normal mb-1">
                  - **.eslintrc.js** (or `.eslintrc.json`):
                </p>
                <pre className="bg-gray-200 p-2 m-2">
                  {`module.exports = {
      extends: [
        'next',
        'next/core-web-vitals',
        'prettier',
      ],
      plugins: ['prettier'],
      rules: {
        'prettier/prettier': ['error', {
          endOfLine: 'auto',
        }],
      },
    }`}
                </pre>
                <p className="font-normal mb-1">- **.prettierrc**:</p>
                <pre className="bg-gray-200 p-2 m-2">
                  {`{
      "semi": false,
      "singleQuote": true,
      "trailingComma": "all",
      "printWidth": 80
    }`}
                </pre>
                <p className="font-normal mb-1">
                  - **.prettierignore** (optional):
                </p>
                <pre className="bg-gray-200 p-2 m-2">
                  {`node_modules
    .next
    public`}
                </pre>
                <p className="font-normal mb-1">
                  5. Add Linting and Formatting Scripts:
                </p>
                Update your `package.json` to include scripts for linting and
                formatting:
                <pre className="bg-gray-200 p-2 m-2">
                  {`"scripts": {
      "lint": "eslint .",
      "lint:fix": "eslint . --fix",
      "format": "prettier --write ."
    }`}
                </pre>
              </li>
              <li>
                <p className="font-semibold mb-1">8. Setting Up TypeScript</p>
                <p className="font-normal mb-1">1. Initialize TypeScript:</p>
                <pre className="italic bg-gray-200 m-2 p-2">npx tsc --init</pre>
                This command will create a `tsconfig.json` file in your project.
                Next.js automatically uses this file for TypeScript settings.
                <p className="font-normal mb-1">2. Add a next-env.d.ts:</p>
                Create a file named `next-env.d.ts` in the root of your project
                with the following content:
                <pre className="bg-gray-200 p-2 m-2">
                  {`/// <reference types="next" />
    /// <reference types="next/types/global" />
    `}
                </pre>
                This file ensures that TypeScript is aware of the Next.js types.
                <p className="font-normal mb-1">
                  3. Install TypeScript and types for React:
                </p>
                Run the following command to add TypeScript and type definitions
                for React:
                <pre className="italic bg-gray-200 m-2 p-2">
                  npm install typescript @types/react @types/node --save-dev
                </pre>
              </li>

              <li>
                <p className="font-semibold mb-1">
                  9. Adding Environment Variables
                </p>
                <p className="font-normal mb-1">1. Create a .env.local File:</p>
                Create a `.env.local` file in the root of your project to store
                environment variables. This file should not be committed to
                version control.
                <pre className="italic bg-gray-200 m-2 p-2">
                  NEXT_PUBLIC_API_URL=https://api.example.com
                  NEXT_PUBLIC_API_KEY=yourapikey
                </pre>
                Replace the example variables with your actual environment
                values.
                <p className="font-normal mb-1">
                  2. Access Environment Variables:
                </p>
                In your Next.js code, you can access these variables using
                `process.env`:
                <pre className="bg-gray-200 p-2 m-2">
                  {`const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;
    `}
                </pre>
              </li>

              <li>
                <p className="font-semibold mb-1">
                  10. Setting Up Git and Version Control
                </p>
                <p className="font-normal mb-1">
                  1. Initialize Git Repository:
                </p>
                Run the following command to initialize a Git repository in your
                project:
                <pre className="italic bg-gray-200 m-2 p-2">git init</pre>
                <p className="font-normal mb-1">2. Create a .gitignore File:</p>
                Create a `.gitignore` file to specify files and directories that
                should be ignored by Git. Example content:
                <pre className="bg-gray-200 p-2 m-2">
                  {`node_modules
    .next
    .env.local
    .DS_Store
    `}
                </pre>
                <p className="font-normal mb-1">3. Make Your First Commit:</p>
                Add all files to the staging area and make your initial commit:
                <pre className="italic bg-gray-200 m-2 p-2">
                  git add . git commit -m Initial commit
                </pre>
                <p className="font-normal mb-1">
                  4. Connect to a Remote Repository:
                </p>
                If you have a remote repository (e.g., on GitHub), connect it
                using:
                <pre className="italic bg-gray-200 m-2 p-2">
                  git remote add origin git push -u origin master
                </pre>
                Replace with the URL of your remote repository.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Installation;

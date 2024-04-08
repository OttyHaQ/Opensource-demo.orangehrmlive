This guide provides steps to execute tests for the Cypress project.

Prerequisites: 
• A GitHub account (if forking) 
• Node.js and npm installed on your machine (check by running node -v, and npm -v commands on your terminal)

Steps:

Fork or Clone the Repository to your local machine: If you haven't already, fork this repository on GitHub or clone it using HTTPS.

      https://github.com/OttyHaQ/SEAMLESS_ASSESSMENT.git
If familiar with git, you can use

      git clone https://github.com/OttyHaQ/SEAMLESS_ASSESSMENT.git
Open the Project in an IDE (VSCode preferably):

Install Dependencies: Open a terminal window and navigate to your local copy of the repository. Run the following command to install the project's dependencies:

          npm install
Update Cypress Configuration (if applicable):

Run Cypress Tests: Once the dependencies are installed, you can run the Cypress tests using:

    npx cypress open
This will launch the Cypress Test Runner GUI

        
          Click on E2E testing
          Select a browser
          Click the “Start E2E Testing in <browser>” button
        Click “Run 2 specs” to run all spec files or click the spec each spec file to run the individually.
Viewing Test Results After test execution is completed, Cypress Test Runner will display the results in an interactive interface.

Notes: Used Fixtures for my POM instead of Pages, to minimize the number of imports in the spec files. Created custom commands to reduce the lines of codes in some of the spec files. Saved baseUrl in cypress.config.js file. Saved beforeEach command in the e2e.js file

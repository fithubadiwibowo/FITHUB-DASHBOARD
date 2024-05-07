# FITHUB-DASHBOARD

This is a test automation framework designed using Playwright and JavaScript. The framework aims to provide a structured and maintainable approach to automated testing of API applications. The Example for this project is to test API for https://reqres.in.

Features Utilizes Playwright, a powerful automation library for web and api testing. Supports writing tests in JavaScript. Easily extensible and customizable for various testing needs.

Getting started Clone repository

Open your terminal or command prompt.
Navigate to the directory where you want to clone the repository. You can use the cd command to change directories. For example: $ cd Documents
Once you're in the desired directory, use the git clone command followed by the repository URL "git clone https://github.com/fithubadiwibowo/FITHUB-DASHBOARD.git"
Press Enter to execute the command.
Once the clone is finished, you'll see a message indicating that the clone was successful.

Pre-requisites 
Download and install Node.js Download and install any Text Editor like Visual Studio Code (Recommended) / Sublime / Brackets

Install project dependencies 
$ npm install 
$ npm init playwright@latest

How to write Test 
Add new file spec for write test under tests folder and name the file as .spec.js (e.g. dashboard_login.spec.js) 
Add new file page object file under pages folder and name the file as .js (e.g. DashboardLoginPage.js)
Add file .env for store the test data, after create file .env then install $ npm install dotenv --save

You can run your tests with the playwright test command.

Run your tests on spesific platform as configured in the playwright.config file. 
Example : $ npx playwright test --project=desktop

Run your tests on spesific @tag strategy will help to run a test with a specific tag that we define on test title, use the -g flag followed by the @tagof the test.
Example : $ npx playwright test -g @login --project=desktop

Report After your test completes, an HTML Reporter will be generated, which shows you a full report of your tests allowing you to filter the report by browsers, passed tests, failed tests, skipped tests. 
$ npx playwright show-report

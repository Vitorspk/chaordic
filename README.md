# Chaordic - Link Shortener

This is a simple front-end application for a link shortener service called "Chaordic".

## Description

The Chaordic Link Shortener is a single-page web application that allows users to shorten long URLs. The application features a responsive design and a clean, user-friendly interface. It also displays the top 5 most popular shortened links and a total count of all link clicks.

## Features

*   **Link Shortening:**  Users can paste a long URL into the input field and click the "ENCURTAR" (Shorten) button to receive a shortened link.
*   **Top 5 Links:** The application displays a list of the top 5 most clicked shortened links, along with their click counts.
*   **Hit Counter:** A "HITS" section shows the total number of clicks on all shortened links.
*   **Responsive Design:** The application is designed to work on various screen sizes, from mobile devices to desktops.

## Getting Started

To run this project locally, simply open the `index.html` file in your web browser.

## Dependencies

The project uses the following libraries:

*   **Grunt:** A JavaScript task runner used for automating tasks like CSS minification.
    *   `grunt-contrib-cssmin`: To minify CSS files.
    *   `grunt-contrib-watch`: To run tasks automatically when files change.

## How it Works

The application is built with HTML, CSS, and JavaScript.

*   **`index.html`:** The main HTML file that defines the structure of the web page.
*   **`css/`:** This directory contains the CSS files for styling the application. The files are minified into `.min.css` files.
*   **`js/chaordicscript.js`:** This file contains the JavaScript code for the application's functionality.
    *   It reads data from the `urls.json` file to populate the "TOP 5" list.
    *   The link shortening functionality is currently a placeholder and always returns the same shortened link.
*   **`urls.json`:** A JSON file that contains a list of URLs, their shortened versions, and their hit counts.
*   **`Gruntfile.js`:** The configuration file for Grunt, which defines the tasks for CSS minification.
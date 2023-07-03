# Newsletter Signup Web Application

This repository contains the code for a simple newsletter signup web application. The application allows users to sign up for a newsletter by providing their first name, last name, and email address.

## Features

- User-friendly signup form
- Integration with the Mailchimp API for managing subscriptions
- Success and failure pages to indicate signup status
- Redirects to external website upon successful signup

## Technologies Used

- Express.js: A web framework for Node.js
- Body-parser: Middleware for parsing form data
- HTTPS: Module for making HTTP requests
- Path: Module for working with file paths

## Setup Instructions

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Replace the Mailchimp API key and list ID with your own in the code.
4. Start the server using `npm start`.
5. Access the application in your web browser at `http://localhost:3000`.

## Deployment

The application can be deployed to any hosting platform that supports Node.js applications, such as Vercel or Heroku. Ensure that you set the environment variables for your API key and list ID in the hosting platform's settings.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.


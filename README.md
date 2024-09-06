# CrewLink

CrewLink is a full-stack web application built on the MEN (MongoDB, Express.js, Node.js) stack. It provides superyacht crew members with a central repository to store and manage all of the crew recruitment agencies they have signed up for. CrewLink supports full CRUD (Create, Read, Update, Delete) operations and ensures that only signed-in users can create, view, update, and delete their own agencies.

## Table of Contents

- [Description](#description "‌")
- [Deployment](#deployment "‌")
- [Planning](#planning "‌")
- [Features](#features "‌")
- [Installation](#installation "‌")
- [Usage](#usage "‌")
- [Routes](#routes "‌")
- [Middleware](#middleware "‌")
- [Models](#models "‌")
- [Views](#views "‌")
- [Contributing](#contributing "‌")
- [License](#license "‌")
- [Contact](#contact "‌")

## Description

CrewLink is designed for superyacht crew members to keep track of all the crew recruitment agencies they are associated with. Each user can perform CRUD operations on their agencies securely, ensuring user-specific data protection.

## Deployment

The app is deployed on Netlify and can be accessed [here](https://melodic-macaron-76a64b.netlify.app "‌").

## Planning

Project planning and progress were managed using a Trello board. You can view our planning board [here](https://trello.com/invite/b/668d2dd726f10635320c0e7a/ATTI00d63ae3fc01da3222851c7f619b23cbFBB05E2E/seb-unit2-menstackcrudapp-project "‌").

## Features

- User authentication (sign up, sign in, sign out)
- Create, view, update, and delete agencies
- Protect routes to ensure only the agency owner can manage their data
- User session management
- Dynamic rendering of views

## Installation

1. Clone the repository:
   ```sh
   git clone <https://github.com/andyheggs/Unit2-Project-CrewLink.git>
   cd Unit2-Project-CrewLink
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   SESSION_SECRET=your_session_secret
   PORT=3000
   ```
4. Start the server:
   ```sh
   npm start
   ```

## Usage

1. Navigate to the home page and sign up or sign in.
2. Once signed in, you can:
   - View all your agencies
   - Add a new agency
   - Edit an existing agency
   - Delete an agency
   - View details of a specific agency

## Routes

### Auth Routes

- `GET /auth/sign-up` - Render the sign-up form
- `POST /auth/sign-up` - Handle sign-up logic
- `GET /auth/sign-in` - Render the sign-in form
- `POST /auth/sign-in` - Handle sign-in logic
- `GET /auth/sign-out` - Handle sign-out logic

### Agency Routes

- `GET /agencies` - View all agencies (only owned by the signed-in user)
- `GET /agencies/new` - Render the form to create a new agency
- `POST /agencies` - Handle agency creation logic
- `GET /agencies/:agencyId` - View a specific agency (protected by ownership check)
- `GET /agencies/:agencyId/edit` - Render the form to edit an agency (protected by ownership check)
- `PUT /agencies/:agencyId` - Handle agency update logic (protected by ownership check)
- `DELETE /agencies/:agencyId` - Handle agency deletion logic (protected by ownership check)

## Middleware

- `isSignedIn` - Ensures the user is signed in before accessing protected routes
- `isAgencyOwner` - Ensures the user is the owner of the agency before accessing or modifying it
- `passUserToView` - Passes user session information to all views

## Models

### User Model

- `username` (String, required, unique)
- `password` (String, required)

### Agency Model

- `name` (String, required)
- `profileLoginUrl` (String, required)
- `agentName` (String)
- `agentEmail` (String)
- `agentTelNo` (String)
- `streetAddress` (String)
- `city` (String)
- `country` (String)
- `contactNumber` (String)
- `operatingHours` (String)
- `user` (ObjectId, ref: 'User', required) - Reference to the owning user

## Views

- `index.ejs` - Home page with a brief description of the app and links to sign up or sign in.
- `partials/_navbar.ejs` - Navigation bar that changes based on the user's authentication status.
- `auth/sign-up.ejs` - Sign-up form for new users.
- `auth/sign-in.ejs` - Sign-in form for existing users.
- `404.ejs` - Custom 404 error page.
- `agencies/index.ejs` - List of all agencies owned by the signed-in user.
- `agencies/new.ejs` - Form to create a new agency.
- `agencies/edit.ejs` - Form to edit an existing agency.
- `agencies/show.ejs` - Detailed view of a specific agency.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes and commit them with clear and descriptive messages.
4. Push your changes to your fork.
5. Create a Pull Request on the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE "‌") file for more details.

## Contact

For questions, suggestions, or issues, please contact:

- **Andy Heggs**
- [GitHub Profile](https://github.com/andyheggs "‌")
- [Trello Board](https://trello.com/invite/b/668d2dd726f10635320c0e7a/ATTI00d63ae3fc01da3222851c7f619b23cbFBB05E2E/seb-unit2-menstackcrudapp-project "‌")

Thank you for using CrewLink! Your superyacht crew recruitment management made simpler.
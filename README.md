# Sky Jabo

## Overview

A full-stack web application enabling users to search for flights, view available options, and book them. The platform includes user authentication, role management, flight search, and booking functionalities.

## Live Site URL

- [Sky Jabo Live](https://skyjabo.web.app)

Note: If you block third-party cookies in your browser, you might encounter issues with the authentication system, as it relies on cookies for session management.

## Admin Credentials

- **Username:** admin@gmail.com
- **Password:** 789789

## User Credentials

- **Username:** user@gmail.com
- **Password:** 789789

## Key Features

- User Authentication: Register, login, logout, and role-based access control (User/Admin).
- Flight Search: Search flights based on origin, destination, and travel dates.
- Booking Management: Book flights, view booking history, and cancel bookings within the allowed timeframe.
- Admin Panel: Add, update, and delete flights; view and manage bookings.
- Responsive UI: User-friendly design optimized for different screen sizes.

## Technology Stack

- **Frontend:** React.js, Tailwind CSS,DaisyUI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT, bcrypt
- **Hosting:** Vercel (Frontend), Firebase (Backend)

## How to Run the Project

### Prerequisites

- Node.js
- npm
- MongoDB

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rjspyk5/skyjabo-client
   cd skyjabo-client

   ```

2. **Install dependencies::**

   ```bash
   npm install

   ```

3. **Create an .env file in the root directory and add necessary environment variables:**

   ```bash

   ```

VITE_APIKEY3=
VITE_AUTHDOMAIN3=
VITE_PROJECTID3=
VITE_STORAGEBUCKET3=
VITE_MESSAGINGSENDERID3=
VITE_APPID3=

-For the .env file format and details, please contact [rjspyk5@gmail.com]

````

4. **Run the development server::**

```bash
npm run dev


````

5. **Download the server from the provided GitHub repository and follow its setup instructions**

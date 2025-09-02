# Pincode Searcher

## Project Overview

Pincode\_Searcher is a web application that allows users to search and retrieve location details using Indian pincodes. It integrates with a public API to fetch postal information such as district, state, and nearby post offices. The app uses MongoDB to store search history and EJS with Tailwind CSS to provide a clean, responsive interface.

## Technologies Used

* **Backend:** Node.js, Express.js
* **Frontend:** EJS, Tailwind CSS
* **Database:** MongoDB
* **API:** Public Postal API

## Features

* Search location details by entering a pincode.
* Fetch real-time postal data from an API.
* Store and manage search history with MongoDB.
* Responsive and modern UI using Tailwind CSS.

## Installation & Setup

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/pincode_searcher.git
   cd pincode_searcher
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Configure environment variables (`.env` file):

   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Start the server:

   ```sh
   npm start
   ```

5. Open in browser:

   ```
   http://localhost:3000
   ```

## Future Enhancements

* Add reverse lookup (search by location name).
* User authentication with personalized search history.
* Analytics dashboard for popular pincodes.

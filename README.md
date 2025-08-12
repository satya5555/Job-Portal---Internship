# Full-Stack Job Portal

As part of my internship at **Gradious**, I was tasked with developing a **full-stack job portal project**.  
The goal was to create a platform where users could easily **post, search, and filter job listings**.

---

## 📌 Project Overview

**Purpose**  
To provide a seamless job posting and searching experience with responsive UI and efficient backend integration.

**Tech Stack**
- **Frontend**: React, Axios, styled-components
- **Backend**: Node.js, Express
- **Database**: MySQL
- **API Type**: RESTful API

---

## 🛠️ Features

### Backend
- RESTful API with Node.js & Express.
- Endpoints for:
  - Adding job listings (POST)
  - Retrieving job listings (GET) with filters
- MySQL database configuration & optimized connections.

### Frontend
- **JobEntry.js** → job form submission with validation.
- **JobList.js** → display jobs with search & filters.
- Responsive UI with styled-components.
- Expandable job cards and detailed job description sidebar.

---
## 🚀 Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MySQL](https://www.mysql.com/) installed and running

### Clone the repository
```bash
git clone https://github.com/satya5555/PROJECT.git
cd PROJECT
```

``` Backend Setup
cd backend
npm install
Configure your MySQL connection in the backend (inside server.js or config file).
Start backend server:
node server.js
```

```Frontend Setup
Open a split terminal in the project root and run:
cd job
npm install
npm start
```

---
📄 Usage

🔹 Job Entry
Open the web app in your browser (default: http://localhost:3000).
Fill in the job details in the form.
Submit the form to add a job listing.

🔹 Job Listings
Append /jobs to the URL (e.g. http://localhost:3000/jobs).
View all available job listings.
Use search and filter options to refine the results.

---

Flow of Job Entry:
* 📝 **User fills** the job entry form in `JobEntry.js`.
* ✅ **Frontend validates** the input data.
* 📡 **Axios sends** a `POST` request to the backend API.
* 💾 **Backend inserts** the job details into the MySQL database.
* 📬 **Backend responds** with success or failure.
* 🔄 **UI updates** or displays a notification based on the response.


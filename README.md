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
1)Job Entry
Open the web app in your browser (default: http://localhost:3000).
Fill in job details in the form and submit.

2)Job Listings
To view job listings, append /jobs to the URL:
http://localhost:3000/jobs
Use the search and filter options to refine results.

---

📜 Flow of Job Entry
User fills job entry form in JobEntry.js.
Data is validated on the frontend.
Axios sends a POST request to backend API.
Backend inserts data into MySQL database.
Backend responds with success/failure.
UI updates or displays a notification.

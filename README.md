# DevRound – Human-to-Human Technical Interview Platform

**Practice with engineers. Prepare for the real round.**

DevRound is a full-stack web application designed to help students and aspiring software developers prepare for technical interviews through real human-to-human mock interviews with experienced software developers.

The platform aims to connect candidates with professional developers who can conduct technical interviews, evaluate their performance and provide structured feedback.

## Project Overview

DevRound is being developed in multiple versions, with each version introducing new functionality.

The project focuses on building a realistic interview preparation platform while exploring practical full-stack development concepts, backend engineering, database design, authentication and real-world business logic.

## Current Development Version

**Version:** `1.0.0`

**Status:** In Development

### Version 1 – Foundation & Authentication

Version 1 focuses on building the application's foundation and implementing a secure authentication system.

### Features in Version 1

- User registration and login.
- JWT-based authentication.
- Password hashing using bcrypt.
- Role-based access control (RBAC).
- Candidate, Interviewer and Admin roles.
- Protected routes and API endpoints.
- Basic user dashboards.
- MongoDB database integration.
- Input validation and error handling.

## User Roles

| Role | Responsibility |
|---|---|
| Candidate | Register, log in and access the candidate dashboard. |
| Interviewer | Register, log in and access the interviewer dashboard. |
| Admin | Access administrative functionality. |

Role-specific features will be expanded in future versions.

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React, TypeScript |
| Styling | Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Authentication | JWT |
| Password Security | bcrypt |
| Validation | Zod |
| API Testing | Postman |
| Version Control | Git & GitHub |

## Project Structure

```text
DevRound/
│
├── client/                 # React frontend
│
├── server/                 # Express backend
│   ├── src/
│   │   ├── config/         # Database configuration
│   │   ├── controllers/    # Request handling
│   │   ├── middleware/    # Authentication and RBAC
│   │   ├── models/        # Mongoose models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── validators/    # Request validation
│   │   └── app.js
│
└── README.md
```

## Development Roadmap

DevRound is planned to be developed in six versions.

| Version | Development Scope |
|---|---|
| V1.0 | Foundation, Authentication & RBAC |
| V2.0 | Interviewer Marketplace |
| V3.0 | Availability & Booking System |
| V4.0 | Interview & Feedback System |
| V5.0 | Subscription & Payment System |
| V6.0 | Admin Panel, Testing & Deployment |

## Learning Objectives

Through this project, I aim to gain practical experience with:

- Designing and developing RESTful APIs.
- Implementing authentication and authorization.
- Understanding role-based access control.
- Designing MongoDB schemas using Mongoose.
- Structuring a maintainable backend application.
- Handling request validation and errors.
- Building scalable application workflows incrementally.

## Project Status

Currently working on **Version 1.0 – Foundation & Authentication**.

New features and improvements will be introduced progressively as development continues.

---

**DevRound**  
*A practical approach to real-world technical interview preparation.*

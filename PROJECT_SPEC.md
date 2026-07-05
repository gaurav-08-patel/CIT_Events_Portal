# Role-Based Pages and Routes

This file captures the desired app structure for PUBLIC, STUDENT, ORGANIZER, and ADMIN users.

> Backend schema details are intentionally excluded from this document.

## PUBLIC

- `/` — Home
- `/events` — Events Listing
- `/events/:id` — Event Details
- `/login` — Login
- `/register` — Register
- `/about` — About
- `/faq` — FAQ
- `/contact` — Contact Us

## STUDENT

- `/student/dashboard` — Dashboard
- `/student/my-events` — My Events
- `/student/my-teams` — My Teams
- `/student/team/:id` — Team Details
- `/student/notifications` — Notifications
- `/student/certificates` — Certificates
- `/student/results` — Results
- `/student/profile` — Profile

## ORGANIZER

- `/organizer/dashboard` — Dashboard
- `/organizer/manage-events` — Manage Events
- `/organizer/create-event` or `/organizer/events/new` — Create/Edit Event
- `/organizer/events/:id/participants` — Event Participants
- `/organizer/events/:id/results` — Event Results
- `/organizer/profile` — Profile

## ADMIN

- `/admin/dashboard` — Dashboard
- `/admin/organizer-approval` — Organizer Approval
- `/admin/users` — User & Reports Management
- `/admin/reports` — Reports (optional separate page)

## Notes

- This page structure is intended to reflect your desired organization.
- Use role-based route guarding to ensure only the correct user role can access each group.
- The current frontend routes are only implemented for public pages.
- Add protected route wrappers for `/student/*`, `/organizer/*`, and `/admin/*`.


# PROJECT TITLE

CIT Event Hub - College Competition & Event Management Platform

# PROJECT OVERVIEW

Build a complete full-stack web application called "CIT Event Hub" using React.js, Node.js, Express.js, and MySQL.

The platform is inspired by Unstop, Devfolio, Hack2Skill, and Facebook, but is designed exclusively for a single college.

The purpose of this platform is to manage all college events, hackathons, workshops, technical events, non-technical competitions, sports events, cultural events, conferences, seminars, and coding contests in one centralized platform.

The application should eliminate manual registrations, Google Forms, Excel sheets, WhatsApp announcements, and offline team management.

The platform must support authentication, role-based authorization, event creation, team formation, team invitations, event registration, payment integration, notifications, certificates, results, reports, analytics, and announcements.

The UI should follow Facebook's design language.

Primary Color:
#1877F2

Background:
#F0F2F5

Cards:
White

Rounded Corners:
12-16px

Soft Shadows

Responsive Layout

Modern SaaS Dashboard

---

# TECHNOLOGY STACK

## Frontend

- React.js
- React Router
- Redux Toolkit
- React Query
- Axios
- Material UI or Tailwind CSS

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Authentication

- JWT
- Bcrypt

## Uploads

- Multer
- Cloudinary

## Emails

- Nodemailer

## Payments

- Razorpay

## PDF

- PDFKit

## Validation

- Joi

## Documentation

- Swagger

---

# USER ROLES

1. Admin
2. Organizer
3. Student (Participant)

---

# PUBLIC WEBSITE PAGES

- Home
- Events Listing
- Event Details
- Login
- Register
- About
- FAQ
- Contact

---

# STUDENT PAGES

- Dashboard
- My Events
- My Teams
- Team Details
- Notifications
- Certificates
- Results
- Profile

---

# ORGANIZER PAGES

- Dashboard
- Manage Events
- Create Event
- Participants
- Results
- Profile

---

# ADMIN PAGES

- Dashboard
- Organizer Approval
- User Management
- Reports
- Payments
- Announcements

---

# SYSTEM ARCHITECTURE

User

↓

React Frontend

↓

REST API

↓

Express Backend

↓

Controllers

↓

Services

↓

Repositories

↓

MySQL Database

↓

Return JSON Response

↓

React Updates UI

---

# FRONTEND ARCHITECTURE

src

pages

components

layouts

hooks

redux

services

routes

assets

utils

App.jsx

---

# BACKEND ARCHITECTURE

src

config

controllers

services

repositories

routes

middleware

validations

utils

database

uploads

jobs

templates

app.js

server.js

---

# MVC FLOW

Request

↓

Route

↓

Middleware

↓

Controller

↓

Service

↓

Repository

↓

Database

↓

Repository

↓

Service

↓

Controller

↓

Response

---

# AUTHENTICATION WORKFLOW

Student opens Register page

↓

Fill details

↓

Frontend validates

↓

POST /register

↓

Backend validates

↓

Password hashed

↓

User stored in database

↓

JWT generated

↓

Login successful

↓

Dashboard

---

# LOGIN WORKFLOW

User enters

Email

Password

↓

POST /login

↓

Backend verifies

↓

Generate JWT

↓

Return role

↓

Frontend redirects

Admin Dashboard

Organizer Dashboard

or

Student Dashboard

---

# ROLE BASED ACCESS CONTROL

Every request

↓

JWT Verification

↓

Check User Role

↓

Allow

or

Reject

Examples

Student

Cannot create event

Organizer

Can create event

Admin

Can approve organizer

---

# STUDENT WORKFLOW

Student registers

↓

Login

↓

Dashboard

↓

Browse Events

↓

Search

↓

Filter

↓

Open Event

↓

Register

If Individual Event

↓

Register

↓

Payment if required

↓

Registration Completed

If Team Event

↓

Create Team

↓

Invite Members

↓

Members Accept

↓

Register Team

↓

Payment

↓

Registration Completed

↓

Receive Notifications

↓

Participate

↓

Results Published

↓

Certificate Generated

↓

Download Certificate

---

# TEAM WORKFLOW

Student creates team

↓

Insert into teams table

↓

Captain inserted into team_members

↓

Captain searches student

↓

Send Invite

↓

Create record in team_invites

↓

Create Notification

↓

Student accepts invitation

↓

Insert into team_members

↓

Notification sent to captain

---

# EVENT CREATION WORKFLOW

Organizer Login

↓

Create Event

↓

Basic Information

↓

Registration Settings

↓

Schedule

↓

Rules

↓

Eligibility

↓

Upload Poster

↓

Publish

↓

Visible to Students

---

# EVENT REGISTRATION WORKFLOW

Student clicks Register

↓

Backend validates

Event Exists

Registration Open

Seats Available

Deadline Valid

Already Registered

Team Size Valid

↓

Create Registration

↓

Payment if Paid

↓

Store Payment

↓

Registration Confirmed

↓

Notification

↓

Email

---

# PAYMENT WORKFLOW

Student

↓

Register

↓

Backend Creates Order

↓

Payment Gateway

↓

Success Callback

↓

Verify Signature

↓

Store Payment

↓

Update Registration

↓

Notification

↓

Receipt Email

---

# NOTIFICATION WORKFLOW

Notifications generated automatically for

Team Invitation

Registration Success

Payment Success

Organizer Approval

Event Reminder

Result Published

Announcements

Student Dashboard requests

GET /notifications

Unread notifications displayed

---

# ORGANIZER WORKFLOW

Organizer Login

↓

Dashboard

↓

Analytics

↓

Create Event

↓

Manage Events

↓

View Participants

↓

Search Participants

↓

Export CSV

↓

Publish Results

↓

Generate Certificates

---

# ADMIN WORKFLOW

Admin Login

↓

Dashboard

↓

Approve Organizers

↓

Manage Users

↓

View Events

↓

View Reports

↓

Revenue Analytics

↓

Announcements

---

# FRONTEND PAGE LOADING

User opens Dashboard

↓

React Component Mounts

↓

Axios Requests

↓

Backend APIs

↓

JSON Returned

↓

Redux Updates

↓

Components Render

---

# BACKEND REQUEST FLOW

React

↓

Express Route

↓

JWT Middleware

↓

Role Middleware

↓

Validation Middleware

↓

Controller

↓

Service

↓

Repository

↓

Database

↓

Return Response

↓

React UI Updated

---

# FILE UPLOAD FLOW

Organizer Uploads Poster

↓

Multer

↓

Cloudinary

↓

Image URL

↓

Store URL in Database

↓

Frontend Displays Image

---

# CERTIFICATE WORKFLOW

Organizer Publishes Results

↓

Generate PDF

↓

Upload to Cloudinary

↓

Store URL

↓

Student Dashboard

↓

Download Certificate

---

# COMPLETE SYSTEM LIFECYCLE

Admin creates organizer

↓

Organizer approved

↓

Organizer logs in

↓

Organizer creates event

↓

Student registers

↓

Student creates team

↓

Invites members

↓

Members accept

↓

Team registers

↓

Payment completed

↓

Notifications sent

↓

Organizer conducts event

↓

Results published

↓

Certificates generated

↓

Students download certificates

↓

Admin views reports

---

# DATABASE MODULES

users

events

teams

team_members

team_invites

event_registrations

payments

notifications

event_results

certificates

announcements

---

# BACKEND MODULES

Authentication Module

Register

Login

JWT

Forgot Password

Reset Password

---

User Module

Profile

Update Profile

Change Password

---

Organizer Module

Approval

Dashboard

Analytics

---

Event Module

Create

Update

Delete

Search

Filter

Categories

---

Team Module

Create Team

Invite Members

Accept Invite

Reject Invite

Leave Team

---

Registration Module

Individual Registration

Team Registration

Validation

---

Payment Module

Create Order

Verify Payment

Payment History

---

Notification Module

Create Notification

Mark Read

Unread Count

Announcements

---

Certificate Module

Generate PDF

Upload

Download

---

Results Module

Publish Results

Rankings

Winner Teams

---

Admin Module

Reports

Users

Events

Payments

Analytics

Announcements

---

# API DESIGN

Use REST APIs.

Follow MVC.

Follow SOLID principles.

Return standardized JSON responses.

Use centralized error handling.

Use async/await.

Use MySQL Transactions wherever multiple tables are updated.

Use Repository Pattern.

Never write SQL inside Controllers.

Never put business logic inside Routes.

Controllers should only receive request and return response.

Services contain business logic.

Repositories interact with MySQL.

---

# SECURITY

JWT Authentication

RBAC

Helmet

CORS

Rate Limiter

Joi Validation

Password Hashing

SQL Injection Protection

XSS Protection

Environment Variables

---

# FRONTEND REQUIREMENTS

Responsive

Facebook Inspired Design

Reusable Components

Protected Routes

Role Based Navigation

Axios Interceptors

React Query

Redux Toolkit

Loading Skeletons

Toast Notifications

Pagination

Search

Filters

Dark Mode Ready

---

# BACKEND REQUIREMENTS

Scalable Architecture

Reusable Services

Centralized Error Handling

Transactions

Swagger Documentation

Production Ready

Docker Ready

Logging

Health Check API

---

# FINAL OBJECTIVE

The final application should behave like a college-specific version of Unstop.

Students should be able to discover events, create teams, invite friends, register individually or as a team, make payments, receive notifications, participate in competitions, view results, and download certificates.

Organizers should be able to create and manage events, monitor participants, publish results, and generate certificates.

Admins should control the entire platform through approvals, analytics, reports, user management, and announcements.

The project should be modular, scalable, production-ready, follow software engineering best practices, and be easy to maintain and extend in the future.

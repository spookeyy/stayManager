# Hotel Management System

## Project Description
Welcome to stayManager, a comprehensive web application for managing hotel accommodations while providing seamless user experiences for customers and efficient management tools for administrators.

---
- Backend: Flask + SQLite
- Frontend: React + Vite

## Setup/Installation Requirements
- Fork and Clone this repository; `git clone https://github.com/spookeyy/stayManager`
- Navigate to the directory and `cd stayManager` folder in your terminal.
- use `code . ` command to open the folder in VScode

## Getting started
- Run this commands to get started:
On your VsCode IDE: navigate to backend `cd backend` and run the following commands:
  ```bash
  pipenv install
  pipenv shell
  python3 seed.py
  flask run
  ```
Now your backend is running. Lets try to run the frontend.
On your terminal, navigate to frontend `cd frontend` and run the following commands:
  ```bash
  npm install
  npm run dev
  ```
  or
  ```bash
  yarn install
  yarn dev
  ```
  - And the application is running in the browser.

## Live link
#### Tools used: 
- `Netlify` - deploy react frontend
- `Render` - deploy backend (mock server)
  
Deployed Frontend can be accessed here https://stay-manager-mg.netlify.app

Deployed Backend can be accessed here https://staymanager-1.onrender.com


## Technologies used
#### Frontend
    - React Js
    - Vite
    - React Router
    - Tailwind CSS
#### Backend
    - Flask
    - Python
    - SQLite
    - Flask-SQLAlchemy
#### package managers
- ```npm``` conversant with ```yarn```
    
## Key Features
---
### User

1. **User Registration and Authentication**
   - Secure login/logout functionality.
   - User profile management with profile photo upload and update capabilities.
   - Unique email and phone number validations.

2. **Booking System**
   - Search and browse hotel rooms.
   - Book hotel rooms with the option to update booking details.
   - Receive booking updates and messages via email and reply to them.

3. **Reservation Management**
   - View booking details.
   - Modify or cancel reservations.

4. **Payment Integration**
   - Secure payment gateway integration for booking transactions.

5. **Review and Rating**
   - Customers can leave reviews and ratings for hotels or travel experiences.

### Admin
---
1. **Dashboard**
   - Overview of bookings, revenue, and occupancy rates.

2. **Booking Management**
   - CRUD operations for managing reservations.

3. **Hotel/Room Management**
   - Add, update, and delete hotel details and room inventory.
   - Mark rooms as booked.

4. **Customer Management**
   - View customer details, bookings, and preferences.

5. **Reporting**
   - Generate reports on bookings and occupancy statistics.

### Backend (Flask)
---
1. **Database**
   - SQLite database used for data storage.

2. **API Development**
   - Develop RESTful APIs for frontend interactions.

3. **Authentication**
   - Implement secure user authentication and authorization.

4. **Integration**
   - Integrate with payment gateways (e.g., M-pesa) for transactions.

### Data Validation

- Ensure data integrity and validate user inputs across the application.
- 
### Frontend (React)
---
- Design user-friendly interfaces using React and responsive design principles.
- Utilize Redux or React Context API for managing application state.
- Implement form validations and error handling.
- Connect frontend components to backend APIs for data retrieval and submission.

### Additional Considerations
---
1. **Search and Filter**
   - Implement robust search and filtering options for hotels.

2. **Notification**
   - Send email or in-app notifications for booking confirmations, updates, and reminders.

3. **Reviews and Ratings**
   - Allow customers to leave reviews and ratings for hotels or travel experiences.

---
### Support and contact details
Email and Phone: sarahscarlet641@gmail.com || +254704372525

Email and Phone: pmbugua276@gmail.com || +254701571745

Email and Phone: pangasmeshack@gmail.com || +254793057720

Email and Phone: skmutai6@gmail.com || +254723486218

 
## License
Licensed under the MIT Licence Copyright (c) 2024 ** Scarlet Sarah ** Peter Mbugua ** Meshack Pangas ** Shadrack Mutai.

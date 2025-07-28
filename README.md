# Eventvista

![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=json-web-tokens&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![NGINX](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![K6](https://img.shields.io/badge/K6-65C453?style=for-the-badge&logo=k6&logoColor=white)

Eventvista is a full-stack MERN (MongoDB, Express, React, Node.js) application designed for college event discovery. 

## Features

* **Advanced Event Filtering**: Filter events based on categories (Tech, Cultural, Sports, etc.), location, date, and mode (online/offline). This helps users quickly find events relevant to their interests and availability.
* **Interactive Event Map**: Integrated map view (via Leaflet or Mapbox) that displays all upcoming events with real-time geolocation markers. Clicking on a pin shows basic event details and links to the event page.
* **JWT Authentication**: Secure login and session handling using JSON Web Tokens (JWT). Ensures that sensitive user actions (like event creation, rating, or profile editing) are protected.
* **Dynamic Event Posting System**: Registered users can create detailed event listings, including title, description, category, location, date/time, and image upload. Events can later be edited or deleted by the creator.
* **Live Rating and Feedback System**: Attendees can leave a rating and short review for events they've attended. Ratings are averaged and updated in real time on the event cards and detail pages.
* **User Profile Management**: Users can update their personal information, view their posted events, and track events they've rated. Profile ratings reflect their credibility as contributors/attendees.
* **Clean and Responsive UI**: Built with React.js + Tailwind CSS for a fast, mobile-first experience with minimalistic design and smooth navigation.

## Technologies Used

* **Frontend**: React, Tailwind CSS 
* **Backend**: Node.js, Express.js, JWT 
* **Database**: MongoDB 
* **Deployment & Tools**: Docker, NGINX, K6 

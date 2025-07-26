# MERN Blog Website

This project is a full-stack blog website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

---

## Features

### Client (React)
- User authentication (login/signup)
- Create, update, delete, and view blog posts
- Comment on posts
- Category-based filtering
- Responsive UI with Material-UI

### Server (Node.js/Express)
- RESTful API for blog, user, comment, and image management
- JWT-based authentication and refresh tokens
- MongoDB (Atlas or local) with Mongoose ODM
- File/image upload support with GridFS

---

## Folder Structure

```
Blog-Website/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── constants/
│   │   ├── context/
│   │   ├── service/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── README.md
│
└── server/
    ├── controller/
    ├── database/
    ├── model/
    ├── routes/
    ├── utils/
    ├── .env
    ├── index.js
    └── package.json
```

---

## How to Run Locally

### Prerequisites

- Node.js (v16 recommended for client)
- npm
- MongoDB (local or Atlas cluster)

---

### 1. Clone the Repository

```sh
git clone <repo-url>
cd Blog-Website
```

---

### 2. Setup and Run the Server

```sh
cd server
npm install
```

- Create a `.env` file in the `server` folder with the following (edit values as needed):

  ```
  DB_USERNAME=your_mongodb_username
  DB_PASSWORD=your_mongodb_password
  ACCESS_SECRET_KEY=your_access_secret
  REFRESH_SECRET_KEY=your_refresh_secret
  ```

- Start MongoDB locally or ensure your Atlas cluster is running and your IP is whitelisted.

- Start the server:

  ```sh
  npm start
  ```

  The server will run on [http://localhost:8000](http://localhost:8000).

---

### 3. Setup and Run the Client

Open a new terminal:

```sh
cd client
npm install
```

- If using Node.js v17 or above, start with:

  ```sh
  set NODE_OPTIONS=--openssl-legacy-provider
  npm start
  ```

- Otherwise, just run:

  ```sh
  npm start
  ```

  The client will run on [http://localhost:3000](http://localhost:3000).

---

## Usage

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Sign up or log in to start creating and managing blog posts.

---

## Notes

- Make sure your MongoDB connection string in `server/database/db.js` matches your `.env` credentials.
- For MongoDB Atlas, whitelist your IP in the Atlas dashboard.
- For image uploads, GridFS is used; ensure your MongoDB instance supports it.

---
"# BLOG-APPLICATION" 
"# BLOG-APPLICATION" 
"# BLOG-APPLICATION" 
"# BLOG-APPLICATION" 
"# BLOG-APPLICATION" 
"# BLOG-APPLICATION" 
"# BLOG-APPLICATION" 

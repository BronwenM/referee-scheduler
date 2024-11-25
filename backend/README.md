# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

### Connect Backend to Frontend

1. **Install Backend Dependencies**:
   ```sh
   cd backend
   bundle install
   ```
2. **Install Frontend Dependencies**:
   ```sh
   cd ../frontend
   npm install
   ```
3. **Start the Backend Server**:
   ```sh 
   cd backend
   bin/rails s
   ```
4. **Start the Frontend Development Server**:
   ```sh 
   cd ../frontend
   npm run dev
   ```
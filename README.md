# GrowAGarden

---
## Introduction
GrowAGarden acts as a web application, allowing unique users to create an account with their physical characteristics, and input their daily caloric intake, in order to gauge their fitness, and determine where they are in their physical goals. 
It utilizes React.js on the frontend web app, SpringBoot on the backend, connecting to an SQL database to manage user data and inputs. It takes in data from the user such as age, weight, and height. 
It then calculates the user’s caloric goal based on the information and encourages users to input their caloric intake for the day. 
Based on their caloric goal and intake, a flower will grow in the garden. This process will repeat until the user decides to stop using it. 

## Features 
- Login system with username and password 
- Questionnaire that calculates user caloric goals
- Logs user’s calories per day into a database
- Based on calorie goal, a flower will blossom on the screen

## Usage
- Access website (or localhost)
- Create an account
- Login to account
- Start tracking calories
- Repeat Every day for flower growth
- Access flower page

### API Endpoints
- `POST /Register` - registers user initial data such
- GET/login - gets user information

### Technologies Used
- Java 21
- Spring Web
- Ngrok tunneling proxy
- MySQL workbench
- Vite
- NodeJS
- JDBC
- React

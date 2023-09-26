# CRUD Rest API for Movie Management



A simple Node.js CRUD (Create, Read, Update, Delete) REST API for managing movies. This API allows you to perform basic operations on a collection of movies, including listing all movies, retrieving a specific movie by its UUID, adding new movies, updating existing movies, and deleting movies.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Features

- List all movies
- Retrieve a movie by its UUID
- Add new movies
- Update existing movies
- Delete movies
- Error handling for invalid routes and data

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed
- NPM (Node Package Manager) installed
- JSON data file containing movie information (e.g., movies.json)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/TanmayRajeevKhurana/CRUDRestAPI.git

2. Setup dependencies


   ```bash
   npm install
## Usage

To start the CRUD Rest API server, run the following command:
   
    
    npm start

## API Endpoints

### List all movies

- **Endpoint:** `GET /api/movies`
- **Description:** Retrieve a list of all movies.

### Retrieve a movie by its UUID

- **Endpoint:** `GET /api/movies/{movieId}`
- **Description:** Retrieve a specific movie by its UUID.

### Add a new movie

- **Endpoint:** `POST /api/movies`
- **Description:** Add a new movie to the collection. Send a JSON payload with movie details.

### Update an existing movie

- **Endpoint:** `PUT /api/movies/{movieId}`
- **Description:** Update an existing movie's details. Send a JSON payload with the updated movie information.

### Delete a movie

- **Endpoint:** `DELETE /api/movies/{movieId}`
- **Description:** Delete a movie by its UUID.



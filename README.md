# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Tech Used:

CSS Framework: Bootstrap

Stack: MongoDB, Express, NodeJS

Server-Side Rendering: JSX

Node-Modules: method-verride, dotenv, express-react-views

## Routes
| Method        | Path          | Purpose       |
| ------------- |:-------------:| -------------:|
| GET           | /             | Home Page     |
GET | /places | Places index page
POST | /places | Create new place
GET | /places/new | Form page for creating a new place
GET | /places/:id | Details about a particular place
PUT | /places/:id | Update a particular place
GET | /places/:id/edit | Form page for editing an existing page
DELETE | /places/:id | Delete a particular place
POST | places/:id/rant | Create a rant (comment) about a particular place
DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place
GET | * | 404 page (matches any route not defined above)

## Database
places
Field | Type
--- | ---
name | String
city | String
state | String
cuisines | String
pic | string
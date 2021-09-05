# Train Sim - Microservices - Group 7

NOTE: Please see our notes on our progress and lessons learned here: https://github.com/bs3265/trainsim-public-group7

### Architecture Documents

We also have a separate set of design documents for the microservices version of our project in this repo:

* Component diagram for the overall system 
  * [Train Ticketing System Component Diagram - server side only](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Train%20Ticketing%20System%20Component%20Diagram%20MS.pdf)
		
* Sequence diagrams for each implemented user scenario 
		
  * [Launch Train Ticketing System](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Use%20Case%201%20Launch%20Train%20Ticketing%20System%20Sequence%20Diagram%20MS.pdf)
			
  * [User Login](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Use%20Case%202%20User%20Login.pdf)
			
  * [Search Tickets](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Use%20Case%203%20Search%20Tickets%20Sequence%20Diagram%20MS.pdf)
			
  * [Select Itinerary](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Use%20Case%204%20Select%20Itinerary%20Sequence%20Diagram%20MS.pdf)
			
  * [Enter Traveler Info](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Use%20Case%205%20Enter%20Traveler%20Info%20Sequence%20Diagram%20MS.pdf)
			
  * [Enter Payment Info and Checkout](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Use%20Case%206%20Enter%20Payment%20Info%20and%20Checkout%20Sequence%20Diagram%20MS.pdf)
		
		
* Quality attribute utility tree
		
  * [Train Ticketing System QA Utility Tree](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Train%20Ticketing%20System%20QA%20Utility%20Tree.pdf)
		
* Tactics applied for the quality attributes specified in the utility tree
					
  * [Modifiability Tactics](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Modifiability%20Tactics.pdf)
			
  * [Security Tactics](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Security%20Tactics.pdf)
			
  * [Performance Tactics](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Performance%20Tactics.pdf)
			
  * [Usability Tactics](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Usability%20Tactics.pdf)
		
* Extras			
  * [Quality Attribute Tactics Scenarios](https://github.com/bs3265/trainsim-public-microservices-group7/blob/master/architecture-documents/Quality%20Attributes%20Tactics%20Scenarios.docx)

### Group Members

| Name          | Role                                     |
|---------------|------------------------------------------|
| Grace Que     | Architect                                |
| Courtney Finn | Developer                                |
| Brian Song    | Developer                                |
| Steve Hurlock | Tester, Admin                            |


A work-in-progress application to simulate purchasing train tickets. This project is used for an assignment of SE 577 at Drexel University.

### Project Details: 

- [User Scenarios](https://docs.google.com/document/d/17qXcQV29qGFcG-WD5if1wZUmjGl9ywvFJMxEpQ1JR8Y/edit)
- [Technology Stack](https://docs.google.com/document/d/17qXcQV29qGFcG-WD5if1wZUmjGl9ywvFJMxEpQ1JR8Y/edit)
- [Database Schema](https://dbdiagram.io/d/60df44220b1d8a6d39649bfa)
- [Template Repository](https://github.com/jlefever/trainsim-public)



## Getting Started

The following tools are required to build and run this project: Docker, Docker Compose, Maven, Java 11, and npm.

From the root of the project run:

```
mvn clean install
docker-compose up
```

You should then be able to visit https://localhost:8000/ in your browser. Ignore the certificate error and you will be greated with the homepage. (The certificate error happens because it is self-signed. It is not a concern because we are running locally.)

## Project Design Documents

All Documents related to this project will be available under project-resources folder. 


## Structure

This project contains seven services, each with an associated Dockerfile. If you are new to Docker, check out this great [introduction](https://docs.docker.com/get-started/overview/).

### trainsim-db

This is a PostgreSQL database. The database contents are stored in the `data/` directory. Every script in the `scripts/` directory will be run on startup if the database doesn't exist yet. During development, the easiest way to make a change to delete `data/` and modify `scripts/000-init.sql`.

### trainsim-planner

This is an [OpenTripPlanner](https://www.opentripplanner.org/) server with SEPTA data. The `trainsim-planner/Dockerfile` does everything. You should not have to make any changes to this.

### trainsim-stripe-service

This is a Java web server. This project is a support project of Train Sim, which provides a fake stripe service that allow other services to check the price of an itinerary and make payments. [trainsim-stripe](https://github.com/hf92/trainsim-stripe/)

### trainsim-order

This is a Java web server. This service provide the order API to create the order. 

### trainsim-itinerary

This is a Java web server. This service provide the endpoints for get stops and do the itineray search. 

### trainsim-user

This is a Java web server. This service provide the endpoint to create user in the user table. 


### trainsim-client

This is the user interface of our application. It is written in [TypeScript](https://www.typescriptlang.org/) and uses [React](https://reactjs.org/) to render our views. We use [npm](https://www.npmjs.com/) to manage our dependencies and [webpack](https://webpack.js.org/) to build our project. Building the project (with `npm run build`) will result in a bundle of `.js` and `.html` being output to the `dist/` directory. We use [nginx](https://www.nginx.com/) to serve this `dist/` directory to the browser. The `nginx.conf` also configures nginx to forward any urls which start with `/api/` to trainsim-api. This allows the client to make requests to the api without using a different port.

If you are brand new to frontend development, here are some great resources for getting started:
- [A re-introduction to JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) - A great refresher or introduction to JavaScript
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html) - TypeScript gives JavaScript a type system that should feel much more like Java
- [React Hello World](https://reactjs.org/docs/hello-world.html) - Highly recommend reading through as much as this as you can if you are new to React

There are also great resources out there on npm, webpack, and nginx but you should not have to modify the configurations of these tools. (But it never hurts to get more familiar with the tools you are using.) We understand much of this may be brand new for many students in this class. Please do not hesistate to contact the TAs if you are having troubles with any of the above.

## Development

You can start the project at any time with `docker-compose up`.

To apply changes you have made to the backend, you could stop all services (with Ctrl + C) and start docker-compose again, but it may be easier to open a new shell and restart just the `trainsim-order` service by running `docker-compose restart trainsim-order`.

If you make any changes to the frontend, simply run `npm run build` to apply your changes. As an alternative to `npm run build`, you can use `npm run watch` (in a different shell from `docker-compose up`.) This will cause webpack to rebuild the frontend every time a file is saved. This can make for a more fluid development experience.


# Travlr Getaways Full Stack Web Application

## CS 465 Full Stack Development

**Maurice Sapp**

### Architecture

For the Travlr Getaways project, I worked with several different technologies that all had to work together to create a functioning web application. One thing I learned during this course is that there are multiple ways to build the frontend of a website depending on the needs of the application.

The customer-facing side of the project used Express, HTML, and Handlebars templates. With this setup, the server generates the page and sends the completed HTML to the browser. When a user clicks a link, a new request is sent to the server and a new page is generated. Before this course, I had used HTML and JavaScript, but I did not fully understand how server-side rendering worked. Building these pages helped me see what happens behind the scenes when a user navigates through a website.

I also used JavaScript to add functionality to the customer-facing pages. JavaScript made the pages more interactive and improved the overall user experience.

For the administrative side of the project, I built an Angular single-page application. This was one of the biggest learning experiences for me because Angular works very differently from Handlebars. Instead of loading an entirely new page every time a user navigates to a different section, Angular updates the content in the browser while communicating with the backend through API calls. At first, it took me some time to understand how Angular components, services, and routing worked together, but after completing the project, I became much more comfortable working with a modern frontend framework.

The backend was built using Node.js, Express, and MongoDB. MongoDB stores information as documents rather than rows and columns like a traditional relational database. I found MongoDB easier to work with because the data structure closely matched the JavaScript objects used throughout the application. This made it easier to move data between the database, API, and frontend without having to perform a lot of conversions.

### Functionality

One of the most important concepts I learned in this course was how data moves through a full stack application. JSON, which stands for JavaScript Object Notation, played a major role in connecting every part of the project. While JavaScript is a programming language, JSON is simply a format used to organize and exchange data.

Throughout the project, Angular communicated with the Express API using JSON. When trip information was requested, the API retrieved the data from MongoDB and returned it in JSON format. Angular then used that data to display information to the user. Seeing this process in action helped me better understand how the frontend and backend communicate with each other.

I also gained experience refactoring code to make it more organized and easier to maintain. One example was creating a separate trip card component to display trip information. Earlier in development, the trip listing component handled most of the display logic. As the project grew, it became clear that separating responsibilities would make the code cleaner and easier to manage. By creating a reusable trip card component, I was able to simplify the listing component and make the code more organized.

Another improvement involved the TripDataService. Instead of placing API requests inside multiple Angular components, I centralized those requests into a single service. This reduced duplicate code and made future updates easier. If an API endpoint changes later, I only need to update the service rather than search through several different files.

### Testing

Testing was an important part of the development process because every layer of the application needed to work correctly. I used Postman extensively to test API endpoints before connecting them to Angular. This helped me identify issues in routes and controllers without having to determine whether the problem was coming from the frontend or backend.

I tested all CRUD operations, including retrieving trip information, creating new trips, updating existing trips, and deleting records. Using Postman made troubleshooting much easier because I could verify that the API was working before moving on to frontend testing.

Security testing was another area that helped me better understand how web applications protect data. The application used JWT authentication to secure administrative functions. I tested protected routes by attempting requests without a token and confirmed that the server returned a 401 Unauthorized response. After including a valid token in the Authorization header, the requests completed successfully. Testing both situations helped me verify that authentication was working as expected.

One thing I learned during testing is that troubleshooting often takes patience. There were times when data was not displaying correctly, and I had to trace the problem through the Angular components, API routes, and database before finding the source of the issue. Although this process could be frustrating at times, it helped me become more comfortable debugging full stack applications.

### Reflection

This course gave me a much better understanding of how all the pieces of a web application work together. Before CS 465, I understood basic web development concepts, but I had never built a complete application that included a frontend, backend, database, and authentication system.

The Travlr Getaways project allowed me to work with MongoDB, Express, Angular, and Node.js while seeing how each technology contributes to the overall application. One of the biggest things I gained from this course was confidence. At the beginning, concepts like API development, Angular services, routing, and JWT authentication felt complicated. After working through the project step by step, those concepts became much easier to understand.

I also learned the importance of organization, testing, and code maintenance. Building an application is not just about making it work. It is also about creating code that can be maintained, updated, and expanded in the future. Refactoring components, creating reusable services, and testing endpoints all contributed to a better final product.

Looking back, this project showed me how much I have grown throughout the Computer Science program. It brought together many of the concepts I learned in previous courses and gave me hands-on experience building a full stack application from start to finish. Completing this project helped strengthen my technical skills and prepared me for future opportunities in software development and other technology-related careers.

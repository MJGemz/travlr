# Travlr Getaways Full Stack Web Application

## CS 465 Full Stack Development

**Maurice Sapp**

### Architecture

Throughout this project, I worked with several different frontend technologies and learned how each one serves a different purpose. The customer-facing side of the application was built using Express, HTML, and Handlebars templates. With this approach, the server creates the webpage and sends a fully rendered HTML page to the browser. Whenever a user clicks a link or navigates to another page, the browser sends a request back to the server and receives a newly generated page in return. This was my first experience seeing how server-side rendering works and understanding what happens behind the scenes when users navigate through a website.

I also used client-side JavaScript to add interactivity to the customer-facing pages. JavaScript allowed certain actions to happen directly in the browser without requiring the entire page to reload. This improved the user experience and helped me better understand the relationship between frontend code and server-side functionality.

The admin side of the project was built using Angular as a single-page application (SPA). Unlike the Handlebars pages, Angular performs most of the rendering in the browser. Instead of requesting a completely new page every time a user navigates to a different section, Angular dynamically updates the content that is displayed. This creates a smoother and faster user experience. Working with Angular showed me the advantages of modern frontend frameworks and helped me understand why many companies use SPAs for web applications today.

For the backend, I used MongoDB as the database. MongoDB stores information as flexible JSON-like documents rather than traditional rows and tables. This worked well for the trip data because different trips could contain different information without requiring major changes to the database structure. I found MongoDB easier to work with because it integrates naturally with JavaScript and Node.js. Since the frontend, backend, and database all use similar data structures, information can move through the application more efficiently.

### Functionality

One of the most important concepts I learned during this course was how JSON connects every layer of a full stack application. JSON, which stands for JavaScript Object Notation, is not the same thing as JavaScript itself. JavaScript is the programming language used to build functionality, while JSON is simply a format used to organize and exchange data.

In the Travlr Getaways application, JSON served as the common language between the frontend and backend. When Angular needed trip information, it sent a request to the Express API. The API retrieved the data from MongoDB and returned it in JSON format. Angular then used that JSON data to display information on the page. Understanding this process helped me see how data flows through an application from the database all the way to the user interface.

Another important part of development was refactoring code to improve organization and maintainability. One example was separating the trip display functionality into its own reusable trip card component. Initially, the trip listing component handled both retrieving and displaying trip information. As the application grew, this approach became harder to maintain. By moving the display logic into a dedicated component, I created a cleaner structure where the trip card simply receives trip data and handles presentation. This made the code easier to read, easier to update, and more reusable throughout the application.

I also refactored API communication by creating a centralized TripDataService. Instead of placing HTTP requests directly inside multiple Angular components, all requests were handled through a single service. This improved code organization and reduced duplication. If an API endpoint changes in the future, I only need to update the service instead of searching through multiple files. This experience showed me how refactoring can make applications more scalable and easier to maintain over time.

### Testing

Testing was a critical part of building the Travlr Getaways application because every layer of the stack needed to function correctly. I learned that testing involves much more than simply checking whether a webpage loads properly. The frontend, backend, database connections, and security features all need to be verified independently.

To test the API, I used Postman to send requests directly to the Express server. This allowed me to verify that each endpoint worked correctly before connecting the Angular frontend. I tested all CRUD operations, including retrieving trips with GET requests, creating trips with POST requests, updating trips with PUT requests, and deleting trips with DELETE requests. Using Postman helped me identify routing and controller issues much faster because I could isolate backend functionality without worrying about frontend errors at the same time.

Security testing was also an important part of the project. The application used JSON Web Tokens (JWTs) to protect administrative functionality. I tested protected routes by attempting to access them without authentication credentials. As expected, the server returned a 401 Unauthorized response. After obtaining a valid JWT and including it in the Authorization header, I repeated the request and received the expected success response. Testing both successful and unsuccessful scenarios helped confirm that the authentication system was working properly and that unauthorized users could not access protected resources.

This process taught me that effective testing involves verifying both positive and negative outcomes. It is not enough to confirm that a feature works when everything is correct. Developers must also verify that the application behaves appropriately when errors occur or invalid requests are made.

### Reflection

This course significantly expanded my understanding of full stack development. Before taking CS 465, I had experience working with HTML, CSS, and JavaScript, but my understanding of how all the pieces fit together was limited. I could build simple webpages, but I did not fully understand how data moved between the frontend, backend, and database.

Working on the Travlr Getaways project allowed me to see the complete lifecycle of a web application. I learned how MongoDB stores data, how Express handles API requests, how Node.js supports backend operations, and how Angular creates dynamic user interfaces. Seeing all of these technologies work together gave me a much stronger understanding of modern web development practices.

One of the most valuable skills I gained was learning how to build and secure RESTful APIs using JWT authentication. Security is a major concern for modern applications, and this project helped me understand the importance of protecting sensitive data and restricting access to authorized users. I also gained experience troubleshooting issues across multiple layers of the application, which improved my problem-solving skills and confidence as a developer.

Looking back at this project, I can clearly see how much I have grown throughout the Computer Science program. The Travlr Getaways application challenged me to think beyond individual pieces of code and focus on how an entire system works together. Completing this project showed me that I can successfully develop a full stack application from the database all the way to the user interface. These skills will be valuable as I pursue opportunities in software development and technology-related careers after graduation.

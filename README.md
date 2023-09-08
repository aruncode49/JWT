# Json Web Token

- This repository contains a simple http server with a home get route and two post routes for login and profile page.
- In the login page we send the user hard coded data to the server, and the server hold that data as a payload and generate a token using jwt sign method.
- That generated token goes further for the verification process inside the middleware function which is present inside the /profile page through the headers property. After getting the token from the headers we can easily verify that token with jwt.verify method using the token the secret key.

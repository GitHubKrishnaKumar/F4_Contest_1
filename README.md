
## Task:
Suppose you're building a form for users to create a new account on your website. You want to use useState to manage the state of the form inputs (e.g. email, password, confirm password). Validate the input fields through their onChange event methods.

UI Reference- https://drive.google.com/file/d/1aM-A7xw0Coc3cz4eBsqs-zHG7-wuO075/view

Requirements
The form should have the following requirements:

The email input must be in a valid email address format.


The password input must be at least 8 characters long.


The confirm-password input must match the password input.


The submit button should give an alert when it is clicked, if all the 3 inputs are correct it should say form submitted successfully, if not the alert should say can’t submit the form.


Apart from the useStates of the input values, you’ll also have to create useStates for if the input value entered has been validated or not. If the email input is valid then make a green border around it, otherwise keep the border red and throw an error below it.


The UI inspiration is given in the google drive video.


Write a React component that implements this form using useState, and includes error messages and input validation.

## Marking Scheme:
The project will be evaluated based on the following criteria:

    1. Use of useState for inputs - 20
    2. Use of useStates for errors - 20
    3. Showing the errors if input is not valid - 10
    4. Showing Green border if input is valid - 10
    5. Submit button functionality with the alerts - 20
    6. Ui - 10
    7. Hosting and deployment - 10


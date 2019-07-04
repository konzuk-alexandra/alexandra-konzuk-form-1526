let pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

// event-target object
let btn = document.getElementById("submit-btn");
let email = document.getElementById("email");
let fullName = document.getElementById("full-name");
let message = document.getElementById("message");

// Clear the data from HTML form
let testForm = document.querySelector("form");

// event-handler
function validateForm() {
    
    console.clear();
    
    // save data and errors in these initially empty "buckets":
    let errors = [];
    let data = {};
    
    // VALIDATING FULL NAME
    if (fullName.value === ""){
        errors.push("Fullname is missing");
    } else {
        data.fullname = fullName.value;
    } 
    
    // VALIDATING EMAIL
    if (email.value === "") {
        errors.push("Email is missing");
    } else {
        if (pattern.test(email.value)) {
            data.email = email.value;
        } else {
            errors.push("Email is not valid");
        }
    }
    
    // VALIDATING MESSAGE 
 if (message.value === ""){
        errors.push("Message is missing");
    } else {
        data.message = message.value;
    } 
    
    
    
    // CREATE FEEDBACK
    if (errors.length === 0) {
        // clear your form here:
        testForm.reset();
        console.log(data);
    } else {
        console.log(errors);
    } 
}

// registering event
btn.addEventListener("click", validateForm);
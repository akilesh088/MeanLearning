// document.getElementById("formvalidation").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent form submission
 
//     let isValid = true;
 
//     let name = document.getElementById("n").value.trim();
//     let email = document.getElementById("e").value.trim();
//     let pass = document.getElementById("p").value;
//     let rePass = document.getElementById("rp").value;
 
//     // Clear previous error messages
//     document.getElementById("nameError").innerText = "";
//     document.getElementById("emailError").innerText = "";
//     document.getElementById("passwordError").innerText = "";
//     document.getElementById("confirmPasswordError").innerText = "";
 
//     // Name validation
//     if (name === "") {
//         document.getElementById("nameError").innerText = "Name is required";
//         isValid = false;
//     }
 
//     // Email validation
//     let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//         document.getElementById("emailError").innerText = "Enter a valid email";
//         isValid = false;
//     }
 
//     // Password validation (6 to 16 characters)
//     if (pass.length < 6 || pass.length > 16) {
//         document.getElementById("passwordError").innerText = "Password must be between 6 and 16 characters";
//         isValid = false;
//     }
 
//     // Confirm password validation
//     if (pass !== rePass) {
//         document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
//         isValid = false;
//     }
//     let checkBox = document.getElementById("terms");
//     if(!checkBox.checked){
//            alert("You must agree to the terms and conditions.");
//            isValid = false;
//             return false;
//         }
 
//     // Final validation check
//     if (isValid) {
//         alert("Form Submitted Successfully!");
//         document.getElementById("form").reset(); // Reset form fields
//     }
       
 
 
   
// });

//to check phone number "/^[0-9]{10}$/"
//to check email pattern "/^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.%+-]+\.[a-zA-Z]{2,}$/"; 
// to check password "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" 
// for zip code checking "/^\d{5}(-\d{4})?$/"
// to checking user name "/^[a-zA-Z0-9_]{3,16}$/"

 const emailInput = document.getElementById("email");
 const passwordInput = document.getElementById("password");
 const loginFormelement = document.getElementById("loginForm");
 loginFormelement.addEventListener("submit", (event) => {
   event.preventDefault();
   const emailValue = emailInput.value;
   const passwordValue = passwordInput.value;
   console.log(emailValue,passwordValue);
   if (emailValue === "sujithkumar.ec20@bitsathy.ac.in" && passwordValue === "sujithkumar"||emailValue === "santhosh.ec20@bitsathy,.ac.in" && passwordValue === "santhosh"||emailValue === "guruakash.ec20@bitsathy.ac.in" && passwordValue === "guruakash") {
     console.log("landed");
     window.location.href = "search.html";
   } else {
     alert("Please fill in both email and password.");
   }
 });
 
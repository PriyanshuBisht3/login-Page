document.getElementById("loginForm").addEventListener("submit", (event)=> {
    const username = document.getElementsByName("uname")[0].value;
    const password = document.getElementsByName("psw")[0].value;
    console.log('password');

    // Check if username and password are correct (for demonstration purposes)
    if (username !== "Priyanshu" || password !== "2003") {
         // Prevent form submission
        alert("Incorrect username or password. Please try again.");
        event.preventDefault();
    }
    else{
        alert("correct username or password.");
        event.preventDefault();
    }
});


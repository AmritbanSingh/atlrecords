function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    if (username === "Atlbvn2025" && password === "atlbvn@123") {
      // Save for delete protection
      localStorage.setItem("password", password);
      window.location.href = "home.html";
    } else {
      alert("Incorrect username or password");
    }
  }
  
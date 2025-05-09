function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");


  if (username === "admin" && password === "password123") {
    window.location.href = "index.html";
    return false;
  } else {
    errorMsg.style.display = "block";
    return false;
  }
}

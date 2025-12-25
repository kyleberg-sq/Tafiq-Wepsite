function login() {
  localStorage.setItem("loggedIn", "true")
  window.location.href = "dashboard.html"
}

function logout() {
  localStorage.removeItem("loggedIn")
  window.location.href = "login.html"
}

function protect() {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html"
  }
}

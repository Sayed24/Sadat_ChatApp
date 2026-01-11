function saveUsername(name) {
  localStorage.setItem("username", name);
}

function getUsername() {
  return localStorage.getItem("username");
}

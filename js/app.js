const form = document.getElementById("chat-form");
const messagesDiv = document.getElementById("messages");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");

usernameInput.value = getUsername() || "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const text = messageInput.value.trim();
  if (!username || !text) return;

  saveUsername(username);

  const message = {
    user: username,
    text,
    time: new Date().toLocaleTimeString()
  };

  sendMessage(message);
  displayMessage(message, true);
  messageInput.value = "";
});

function displayMessage(msg, self = false) {
  const div = document.createElement("div");
  div.className = `message ${self ? "self" : ""}`;
  div.innerHTML = `
    <strong>${msg.user}</strong><br/>
    ${msg.text}<br/>
    <span>${msg.time}</span>
  `;
  messagesDiv.appendChild(div);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

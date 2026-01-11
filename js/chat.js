const channel = new BroadcastChannel("sadat-chat");

function sendMessage(data) {
  channel.postMessage(data);
}

channel.onmessage = (event) => {
  displayMessage(event.data);
};

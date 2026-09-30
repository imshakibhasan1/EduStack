// Frontend helper: calls your OWN backend, never NVIDIA directly.
async function askAIMentor(message) {
  try {
    const res = await fetch("/api/ai/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();

    if (!data.success) {
      throw new Error(data.error || "AI request failed");
    }

    return data.reply;
  } catch (error) {
    console.error(error);
    return "Sorry, the AI mentor is currently unavailable.";
  }
}

// Example wiring to an input element with id="mentor-input"
document.getElementById("mentor-input")?.addEventListener("keydown", async (e) => {
  if (e.key === "Enter") {
    const message = e.target.value.trim();
    if (!message) return;

    const reply = await askAIMentor(message);
    console.log(reply);

    // TODO: render `reply` into your chat UI here
    e.target.value = "";
  }
});




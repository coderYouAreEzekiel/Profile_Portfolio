document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const visitorEmail = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Pre-fill your email in "To", a clear subject, and the body
    const yourEmail = "your-email@example.com"; // ← CHANGE TO YOUR ACTUAL EMAIL

    let subject = "Portfolio Contact: " + (name ? name : "New Message");
    if (visitorEmail) subject += " from " + visitorEmail;

    const body = `From: ${name} (${visitorEmail})\n\n${message}\n\n---\nSent via Portfolio Contact Form`;

    // Dynamically update the form action with parameters
    const baseUrl =
      "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new";
    const params = new URLSearchParams({
      to: yourEmail,
      su: subject,
      body: body,
    });

    this.action = baseUrl + "&" + params.toString();
  });

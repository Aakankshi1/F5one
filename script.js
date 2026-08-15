document.getElementById("year").textContent = new Date().getFullYear();

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(bookingForm);

  const name = formData.get("name");
  const phone = formData.get("phone");
  const date = formData.get("date");
  const duration = formData.get("duration");
  const shootType = formData.get("shootType");
  const teamSize = formData.get("teamSize");
  const message = formData.get("message") || "Not specified";

  const text =
`Hi F5ONE Studio,

I would like to request a booking.

Name: ${name}
Phone: ${phone}
Preferred Date: ${date}
Duration: ${duration}
Shoot Type: ${shootType}
Team Size: ${teamSize}

Shoot Details:
${message}`;

  const whatsappURL =
    "https://wa.me/918447980353?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank");
});

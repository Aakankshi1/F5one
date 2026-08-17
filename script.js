const bookingForm = document.querySelector("#bookingForm");
const formStatus = document.querySelector("#formStatus");
const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(bookingForm);

    if (formData.get("website")) {
      return;
    }

    const details = [
      ["Name", formData.get("name")],
      ["Email", formData.get("email")],
      ["Phone", formData.get("phone")],
      ["Preferred date", formData.get("date")],
      ["Duration", formData.get("duration")],
      ["Shoot type", formData.get("shootType")],
      ["Team size", formData.get("teamSize")],
      ["Details", formData.get("message") || "Not specified"],
    ];

    const message = [
      "Hi F5.One Studio, I would like to request a booking.",
      "",
      ...details.map(([label, value]) => `${label}: ${value}`),
    ].join("\n");

    const whatsappUrl = `https://wa.me/918447980353?text=${encodeURIComponent(message)}`;

    if (formStatus) {
      formStatus.textContent = "Opening WhatsApp with your booking request.";
    }

    window.open(whatsappUrl, "_blank", "noopener");
  });
}

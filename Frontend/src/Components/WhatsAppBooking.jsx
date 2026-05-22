const handleWhatsAppBooking = () => {
  const message = `
Hello, I would like to book a ${selectedService}.

Name: ${name}
Preferred Time: ${time}
`;

  const whatsappUrl = `https://wa.me/97798XXXXXXXX?text=${encodeURIComponent(
    message,
  )}`;

  window.open(whatsappUrl, "_blank");
};

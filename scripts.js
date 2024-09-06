function learnMore() {
    alert("Thank you for your interest! More content is coming soon.");
}

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We will get back to you soon.");
});

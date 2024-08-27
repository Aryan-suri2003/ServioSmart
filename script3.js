document.addEventListener("DOMContentLoaded", function() {
    const serviceDetailsSection = document.querySelector(".service-details");

    const serviceName = serviceDetailsSection.dataset.serviceName;
    const serviceDescription = serviceDetailsSection.dataset.serviceDescription;
    const serviceImage = serviceDetailsSection.dataset.serviceImage;

    // Update the service details dynamically
    document.getElementById("service-name").textContent = serviceName;
    document.getElementById("service-description").textContent = serviceDescription;
    document.getElementById("service-image").src = serviceImage;

    // Handle the modal opening and closing
    const bookServiceBtn = document.getElementById("book-service-btn");
    const modal = document.getElementById("booking-modal");
    const closeModal = document.querySelector(".close");

    // Open the modal when the "Book Service" button is clicked
    bookServiceBtn.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    // Close the modal when the "X" button is clicked
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal if the user clicks outside of it
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle the form submission inside the modal
    const bookingForm = document.getElementById("booking-form");
    bookingForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Service booked successfully!");
        modal.style.display = "none";
        bookingForm.reset();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const serviceDetailsSection = document.querySelector(".service-details");

    // Retrieve and update service details dynamically
    const serviceName = serviceDetailsSection.dataset.serviceName;
    const serviceDescription = serviceDetailsSection.dataset.serviceDescription;
    const serviceImage = serviceDetailsSection.dataset.serviceImage;

    document.getElementById("service-name").textContent = serviceName;
    document.getElementById("service-description").textContent = serviceDescription;
    document.getElementById("service-image").src = serviceImage;

    // Modal elements
    const modal = document.getElementById("booking-modal");
    const bookServiceBtn = document.getElementById("book-service-btn");
    const closeModalBtn = document.querySelector(".modal .close");
    const bookingForm = document.getElementById("booking-form");

    // Open the modal when the "Book Service" button is clicked
    bookServiceBtn.addEventListener("click", function() {
        modal.style.display = "flex"; // Use 'flex' to center the modal
    });

    // Close the modal when the close button is clicked
    closeModalBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close the modal when clicking outside of the modal content
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    bookingForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Retrieve form data
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const address = document.getElementById("address").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Retrieve existing bookings from local storage
        let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

        // Add new booking to the array with a default status
        bookings.push({
            name,
            email,
            phone,
            address,
            date,
            time,
            status: 'Pending' // Default status
        });

        // Save the updated bookings array to local storage
        localStorage.setItem("bookings", JSON.stringify(bookings));

        // Reset the form
        bookingForm.reset();

        // Close the modal
        modal.style.display = "none";

        // Show a confirmation message or redirect the user (optional)
        alert("Your booking has been confirmed!");
        window.location.href = "display-booking.html"; // Redirect to the booking display page
        
    });
});

async function myfunction() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    var preloader = document.getElementById('loading');
    preloader.style.display = 'none';
  }

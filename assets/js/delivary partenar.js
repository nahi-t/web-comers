function registerDeliveryPartner(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Add a subtle animation to the form when it's submitted
    const form = document.querySelector('.delivery-partner-form form');
    form.style.animation = 'formSubmitted 0.6s ease-out';

    // Simulate a success message after a short delay
    setTimeout(() => {
        // Hide the form and show a success message
        form.innerHTML = `
            <h3 style="text-align: center; color: #004aad;">Thank you for registering as a delivery partner!</h3>
            <p style="text-align: center; color: #333;">We will review your information and get in touch soon.</p>
        `;
    }, 600);
}

/* CSS keyframe for form submission */
@keyframes formSubmitted {
    0% {
        opacity: 1;
        transform: scale(1);
    }
    100% {
        opacity: 0;
        transform: scale(0.9);
    }
}

function submitDelivery() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const item = document.getElementById('item').value;
    const contact = document.getElementById('contact').value;

    // Simple validation (can be enhanced)
    if (name && address && item && contact) {
        document.getElementById('delivery-form').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
    } else {
        alert("Please fill out all fields.");
    }
}

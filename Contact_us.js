document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const responseMessage = document.getElementById('response-message');

    if (name && email && message) {
        responseMessage.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you soon.';
        responseMessage.style.color = '#28a745';
    } else {
        responseMessage.textContent = 'Please fill out all fields.';
        responseMessage.style.color = '#dc3545';
    }

    document.getElementById('contact-form').reset();
});

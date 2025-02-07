document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }

        if (!isValidEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        console.log('Form submitted:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Message:', message);

        const formData = {
            name: name,
            email: email,
            message: message,
            timestamp: new Date().toISOString()
        };

        let storedData = JSON.parse(localStorage.getItem('contactFormSubmissions')) || [];
        storedData.push(formData);
        localStorage.setItem('contactFormSubmissions', JSON.stringify(storedData));

        form.reset();

        alert('Thank you for your message! We will get back to you soon.');
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }



    function displayStoredSubmissions() {
        const storedData = JSON.parse(localStorage.getItem('contactFormSubmissions')) || [];
        console.log('Stored form submissions:', storedData);
    }

    displayStoredSubmissions();
});
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('formSuccess').textContent = '';

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
      document.getElementById('nameError').textContent = 'Name is required.';
      isValid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === '') {
      document.getElementById('emailError').textContent = 'Email is required.';
      isValid = false;
    } else if (!email.match(emailPattern)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Validate password
    const password = document.getElementById('password').value;
    if (password === '') {
      document.getElementById('passwordError').textContent = 'Password is required.';
      isValid = false;
    } else if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      isValid = false;
    }

    // If form is valid, display a success message
    if (isValid) {
      document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    }
  });

  function initMap() {
    var uyo = {lat: 5.038963, lng: 7.909763};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: uyo
    });
    var marker = new google.maps.Marker({
      position: uyo,
      map: map
    });
  }

  function copyEmail() {
    const email = "e3emmaworld@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard: " + email);
    }).catch(err => {
        alert("Failed to copy email: " + err);
    });
}


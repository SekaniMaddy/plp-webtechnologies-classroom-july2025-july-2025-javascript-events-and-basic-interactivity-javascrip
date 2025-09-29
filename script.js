// 🌗 Light/Dark Mode Toggle
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// 🎮 Counter Game
let count = 0;
document.getElementById('incrementBtn').addEventListener('click', () => {
  count++;
  document.getElementById('counter').textContent = count;
});

document.getElementById('resetBtn').addEventListener('click', () => {
  count = 0;
  document.getElementById('counter').textContent = count;
});

// ❓ Collapsible FAQ
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});

// ✅ Form Validation
document.getElementById('signupForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Clear previous messages
  document.getElementById('formSuccess').textContent = '';
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  let valid = true;

  // Name validation
  const name = document.getElementById('name').value.trim();
  if (name.length < 2) {
    document.getElementById('nameError').textContent = 'Name must be at least 2 characters.';
    valid = false;
  }

  // Email validation
  const email = document.getElementById('email').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    document.getElementById('emailError').textContent = 'Enter a valid email.';
    valid = false;
  }

  // Password validation
  const password = document.getElementById('password').value;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (!passwordRegex.test(password)) {
    document.getElementById('passwordError').textContent = 'Password must be at least 6 characters and include a number.';
    valid = false;
  }

  // Success message
  if (valid) {
    document.getElementById('formSuccess').textContent = 'Form submitted successfully!';
    this.reset();
  }
});
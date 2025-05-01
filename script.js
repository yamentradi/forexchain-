
document.getElementById('signupForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  if (password !== confirmPassword) return alert("Passwords do not match.");

  localStorage.setItem('user', JSON.stringify({ name, email, password }));
  window.location.href = 'dashboard.html';
});

document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user || user.email !== email || user.password !== password) {
    return alert("Invalid credentials.");
  }

  window.location.href = 'dashboard.html';
});

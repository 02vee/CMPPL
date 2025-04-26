document.addEventListener('DOMContentLoaded', () => {
    // Check if the user is authenticated
    fetch('http://localhost:5000/api/auth/check-session', { method: 'GET', credentials: 'include' })
        .then(response => {
            if (!response.ok) throw new Error('Session check failed');
            return response.json();
        })
        .then(data => {
            if (!data.isAuthenticated) {
                alert('Session expired. Redirecting to login.');
                window.location.href = '/login.html';
            }
        })
        .catch(err => {
            console.error('Error checking session:', err);
            window.location.href = '/login.html'; // Redirect on error
        });

    // Logout functionality
    function logout() {
        fetch('http://localhost:5000/api/auth/logout', { method: 'GET', credentials: 'include' })
            .then(() => window.location.href = '/login.html');
    }

    // Attach logout function to the logout link
    document.querySelector('a[onclick="logout()"]').addEventListener('click', logout);
});
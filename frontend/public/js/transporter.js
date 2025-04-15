document.addEventListener('DOMContentLoaded', () => {
    const startTrackingButton = document.getElementById('start-tracking');
    startTrackingButton.addEventListener('click', () => {
        const vehicleNumber = document.getElementById('vehicle-number').value;
        if (vehicleNumber) {
            alert('Tracking started, you can close the window.');
            // Request location access
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(position => {
                    console.log(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
                });
            } else {
                alert('Geolocation is not supported by this browser.');
            }
        } else {
            alert('Please enter a vehicle number.');
        }
    });
});
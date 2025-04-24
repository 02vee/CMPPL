let trackedVehicles = {};

document.addEventListener('DOMContentLoaded', () => {
    const trackForm = document.getElementById('track-form');
    const vehicleList = document.getElementById('tracked-vehicles');

    trackForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const vehicleNumber = document.getElementById('vehicle-number').value;

        if (vehicleNumber) {
            trackedVehicles[vehicleNumber] = true;
            updateVehicleList(vehicleNumber);
        }
    });

    const updateVehicleList = (vehicleNumber) => {
        if (!trackedVehicles[vehicleNumber]) return;

        const li = document.createElement('li');
        li.textContent = `Vehicle ${vehicleNumber} is being tracked.`;
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => {
            delete trackedVehicles[vehicleNumber];
            li.remove();
        });
        li.appendChild(removeButton);
        vehicleList.appendChild(li);
    };
});
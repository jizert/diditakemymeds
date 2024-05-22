window.onload = function() {
    const morningMessage = document.getElementById('morning-message');
    const eveningMessage = document.getElementById('evening-message');
    const bedtimeMessage = document.getElementById('bedtime-message');

    const morningMeds = localStorage.getItem('morning-meds');
    const eveningMeds = localStorage.getItem('evening-meds');
    const bedtimeMeds = localStorage.getItem('bedtime-meds');

    morningMessage.textContent = morningMeds === 'Yes' ? 'Yes' : 'Not yet';
    eveningMessage.textContent = eveningMeds === 'Yes' ? 'Yes' : 'Not yet';
    bedtimeMessage.textContent = bedtimeMeds === 'Yes' ? 'Yes' : 'Not yet';
};

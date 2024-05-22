window.onload = function() {
    const morningStatus = document.getElementById('morning-status');
    const eveningStatus = document.getElementById('evening-status');
    const bedtimeStatus = document.getElementById('bedtime-status');

    const morningMeds = localStorage.getItem('morning-meds');
    const eveningMeds = localStorage.getItem('evening-meds');
    const bedtimeMeds = localStorage.getItem('bedtime-meds');

    if (morningStatus) {
        morningStatus.textContent = morningMeds === 'Yes' ? 'Yes' : 'Not yet';
    }

    if (eveningStatus) {
        eveningStatus.textContent = eveningMeds === 'Yes' ? 'Yes' : 'Not yet';
    }

    if (bedtimeStatus) {
        bedtimeStatus.textContent = bedtimeMeds === 'Yes' ? 'Yes' : 'Not yet';
    }
};

function updateStatus(timeOfDay) {
    if (timeOfDay === 'morning') {
        localStorage.setItem('morning-meds', 'Yes');
        alert('Morning meds logged.');
    } else if (timeOfDay === 'evening') {
        localStorage.setItem('evening-meds', 'Yes');
        alert('Evening meds logged.');
    } else if (timeOfDay === 'bedtime') {
        localStorage.setItem('bedtime-meds', 'Yes');
        alert('Bedtime meds logged.');
    }
    updateStatusOnPage();
}

function undoStatus(timeOfDay) {
    if (timeOfDay === 'morning') {
        localStorage.removeItem('morning-meds');
        alert('Morning meds log removed.');
    } else if (timeOfDay === 'evening') {
        localStorage.removeItem('evening-meds');
        alert('Evening meds log removed.');
    } else if (timeOfDay === 'bedtime') {
        localStorage.removeItem('bedtime-meds');
        alert('Bedtime meds log removed.');
    }
    updateStatusOnPage();
}

function updateStatusOnPage() {
    const morningMeds = localStorage.getItem('morning-meds');
    const eveningMeds = localStorage.getItem('evening-meds');
    const bedtimeMeds = localStorage.getItem('bedtime-meds');

    const morningStatus = document.getElementById('morning-status');
    const eveningStatus = document.getElementById('evening-status');
    const bedtimeStatus = document.getElementById('bedtime-status');

    if (morningStatus) {
        morningStatus.textContent = morningMeds === 'Yes' ? 'Yes' : 'Not yet';
    }

    if (eveningStatus) {
        eveningStatus.textContent = eveningMeds === 'Yes' ? 'Yes' : 'Not yet';
    }

    if (bedtimeStatus) {
        bedtimeStatus.textContent = bedtimeMeds === 'Yes' ? 'Yes' : 'Not yet';
    }
}

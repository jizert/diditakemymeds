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
}

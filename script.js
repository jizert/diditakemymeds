async function updateStatus(timeOfDay) {
    const userId = 'unique-user-id'; // Replace with actual user ID logic
    const { data, error } = await supabase
        .from('medsStatus')
        .upsert({ user_id: userId, [timeOfDay]: 'Yes' }, { onConflict: ['user_id'] });

    if (error) {
        console.error('Error updating status:', error);
    } else {
        alert(`${timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} meds logged.`);
    }
}

async function undoStatus(timeOfDay) {
    const userId = 'unique-user-id'; // Replace with actual user ID logic
    const { data, error } = await supabase
        .from('medsStatus')
        .update({ [timeOfDay]: null })
        .eq('user_id', userId);

    if (error) {
        console.error('Error undoing status:', error);
    } else {
        alert(`${timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} meds log removed.`);
    }
}

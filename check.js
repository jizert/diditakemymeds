window.onload = async function() {
    if (!window.supabase) {
        console.error('Supabase not initialized');
        return;
    }

    const userId = 'postgres.dahjmbayitrmaogxlrts'; // Replace with actual user ID logic
    const { data, error } = await window.supabase
        .from('medsStatus')
        .select('*')
        .eq('user_id', userId)
        .single();

    if (error) {
        console.error('Error fetching status:', error);
    } else {
        document.getElementById('morning-message').textContent = data.morning || 'Not yet';
        document.getElementById('evening-message').textContent = data.evening || 'Not yet';
        document.getElementById('bedtime-message').textContent = data.bedtime || 'Not yet';
    }
}

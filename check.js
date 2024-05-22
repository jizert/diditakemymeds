window.onload = async function() {
    console.log('Page loaded, initializing...');

    if (!window.supabase) {
        console.error('Supabase not initialized');
        return;
    }

    try {
        // Fetch the user by username "jizert"
        const { data: userData, error: userError } = await window.supabase
            .from('users') // Replace with the correct table name where user info is stored
            .select('id')
            .eq('username', 'jizert')
            .single();

        if (userError) {
            console.error('Error fetching user:', userError);
            return;
        }

        const userId = userData.id;
        console.log('Fetched user ID:', userId);

        // Fetch medication status
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
            console.log('Fetched medication status:', data);
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

async function updateStatus(timeOfDay) {
    // Wait until Supabase is initialized
    while (!window.supabase) {
        console.log('Waiting for Supabase to initialize...');
        await new Promise(resolve => setTimeout(resolve, 100));
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

        const { data, error } = await window.supabase
            .from('medsStatus')
            .upsert({ user_id: userId, [timeOfDay]: 'Yes' }, { onConflict: ['user_id'] });

        if (error) {
            console.error('Error updating status:', error);
        } else {
            alert(`${timeOfDay.charAt(0).toUpperCase() + timeOfDay.slice(1)} meds logged.`);
        }
    } catch (err) {
        console.error('Unexpected error:', err);
    }
}

async function undoStatus(timeOfDay) {
    // Wait until Supabase is initialized
    while (!window.supabase) {
        console.log('Waiting for Supabase to initialize...');
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    try {
        // Fetch the user by username "jizert"
        const { data: userData, error: userError } = await window.supabase
            .from('users') // Replace with the correct

import * as db from '$lib/database.js';
import { fail } from '@sveltejs/kit';

export function load() {
    return {
        rating: db.getRating(),
    }
}

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        
        if (data.get('rating') === '-1') return fail(400, { message: 'Invalid Input'});
        
        db.setRating(data.get('rating'));
        
        return { success: true };
    }
}
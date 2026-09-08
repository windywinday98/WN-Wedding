import { createClient } from '@supabase/supabase-js';

// Ganti dengan URL & Anon Key dari Project Settings > API di Supabase kamu
const supabaseUrl = 'https://vzjxsjyjtvfytzbnkpdr.supabase.co';
const supabaseKey = 'sb_publishable_LrNNh_0SOJG5N7EtR976Xg_6Xp5hjcW';

export const supabase = createClient(supabaseUrl, supabaseKey);
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://nynyxsdaijuguerkkuvn.supabase.co';
const supabaseKey = 'sb_publishable_1l1IhjJxazLeChvzCS5QCQ_weqN6VHS';

// Initialize the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
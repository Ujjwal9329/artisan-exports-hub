
import { createClient } from '@supabase/supabase-js';

// Replace these with the values from your Supabase dashboard
const supabaseUrl = 'https://patqbjlahcprmptvrmhu.supabase.co';
const supabaseKey = 'sb_publishable_HV9ek4JW-zudADNGLzZE7Q_x8we_BEu';

export const supabase = createClient(supabaseUrl, supabaseKey);

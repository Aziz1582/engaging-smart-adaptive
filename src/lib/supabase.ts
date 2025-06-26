import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
// Using direct values from project configuration
const supabaseUrl = 'https://yvjyhgshrknjaqmhuizi.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2anloZ3NocmtuamFxbWh1aXppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5NDg0NTcsImV4cCI6MjA2NjUyNDQ1N30.-D5RleePG6mS2Dm3W44ZsXWx7mm1iya90oxbihFT5gU';
const supabase = createClient(supabaseUrl, supabaseKey);


export { supabase };
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gojnhthsfmriyubbprpg.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvam5odGhzZm1yaXl1YmJwcnBnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIxNjMwOTksImV4cCI6MjAzNzczOTA5OX0.97jsQGaRqunUKTau6XGgso-Dt8-Vt0P9nbsOJ04k1-g'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
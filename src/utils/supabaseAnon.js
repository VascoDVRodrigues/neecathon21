import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://gahraycocamnovpvaatg.supabase.co';
const supabaseSecretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzMjE2MTMzNywiZXhwIjoxOTQ3NzM3MzM3fQ.TlsCdvthpQA4Qtu4_GrE1cgik_kuC-hr7V9X-baxO10';

const supabaseAnon =  createClient(supabaseUrl, supabaseSecretKey);

export default supabaseAnon;
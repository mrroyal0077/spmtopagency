const { createClient } = require("@supabase/supabase-js");

/*
  SPM TOP AGENCY
  Supabase connection

  IMPORTANT:
  Real Supabase keys environment variables
  vich honge. GitHub code vich nahi.
*/

const supabaseUrl =
  process.env.SUPABASE_URL;

const supabaseServiceKey =
  process.env.SUPABASE_SERVICE_ROLE_KEY;


if (
  !supabaseUrl ||
  !supabaseServiceKey
) {
  console.warn(
    "Supabase environment variables are not configured."
  );
}


const supabase =
  createClient(
    supabaseUrl || "https://placeholder.supabase.co",
    supabaseServiceKey || "placeholder"
  );


module.exports = supabase;

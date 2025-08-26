-- Strapi Setup for Soleil Database
-- This script sets up the initial Strapi admin user and public access

-- Note: This script will be executed after Strapi creates its tables
-- The actual admin user creation will be handled by Strapi's bootstrap process

-- Create a function to set up public access for Strapi content
CREATE OR REPLACE FUNCTION setup_strapi_public_access()
RETURNS void AS $$
BEGIN
    -- This function will be called after Strapi tables are created
    -- It sets up public access for content types
    
    -- Grant public access to all Strapi content tables
    -- This is a template that will be executed when Strapi is ready
    
    RAISE NOTICE 'Strapi public access setup function created';
    RAISE NOTICE 'This function will be called after Strapi initialization';
END;
$$ LANGUAGE plpgsql;

-- Create a function to verify Strapi setup
CREATE OR REPLACE FUNCTION verify_strapi_setup()
RETURNS TABLE(table_name text, exists boolean) AS $$
BEGIN
    -- Check if Strapi core tables exist
    RETURN QUERY
    SELECT 
        'users-permissions_role'::text as table_name,
        EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'users-permissions_role'
        ) as exists
    UNION ALL
    SELECT 
        'users-permissions_user'::text as table_name,
        EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'users-permissions_user'
        ) as exists
    UNION ALL
    SELECT 
        'strapi_core_store_settings'::text as table_name,
        EXISTS (
            SELECT FROM information_schema.tables 
            WHERE table_schema = 'public' 
            AND table_name = 'strapi_core_store_settings'
        ) as exists;
END;
$$ LANGUAGE plpgsql;

-- Log the setup
DO $$
BEGIN
    RAISE NOTICE 'Strapi setup functions created successfully';
    RAISE NOTICE 'Database is ready for Strapi initialization';
END;
$$;

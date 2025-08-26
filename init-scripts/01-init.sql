-- Initialize Soleil Database for Strapi
-- This script runs when the PostgreSQL container starts for the first time

-- Create extensions that might be useful for the project
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create any additional schemas if needed
-- CREATE SCHEMA IF NOT EXISTS soleil_schema;

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE soleil_db TO soleil_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO soleil_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO soleil_user;

-- Set default privileges for future objects
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO soleil_user;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO soleil_user;

-- Create additional databases for testing if needed
-- CREATE DATABASE soleil_test;
-- GRANT ALL PRIVILEGES ON DATABASE soleil_test TO soleil_user;

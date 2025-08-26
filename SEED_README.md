# Soleil Database Seeding Guide

This guide explains when and how the seed functions run in the Soleil project.

## 🌱 When Does the Seed Function Run?

The `async seed({ strapi })` function in `backend/src/seeds/admin-user.ts` will run in the following scenarios:

### 1. **Manual Execution** (Recommended)

```bash
cd backend
yarn seed
```

This will:

- Check if Strapi is running
- Provide instructions for manual setup
- Guide you through creating the admin user and permissions

### 2. **Bootstrap Execution** (Automatic)

The `backend/src/bootstrap.ts` file contains similar logic that runs automatically when Strapi starts in development mode.

## 🚀 Complete Setup Process

### Step 1: Start the Database

```bash
# Start PostgreSQL with Docker
docker-compose up -d

# Verify database connection
docker exec -it soleil-postgres psql -U soleil_user -d soleil_db -c "SELECT 1;"
```

### Step 2: Start Strapi Backend

```bash
cd backend
yarn dev
```

Wait for Strapi to fully start (you'll see "Welcome back!" in the console).

### Step 3: Run the Seed

```bash
# In a new terminal
cd backend
yarn seed
```

### Step 4: Manual Setup (if needed)

If the automatic seed doesn't work, follow these manual steps:

#### Create Admin User

1. Open http://localhost:1337/admin in your browser
2. Click "Create your first administrator"
3. Fill in the form:
   - **First Name**: Soleil
   - **Last Name**: Admin
   - **Email**: admin@soleil.com
   - **Password**: SoleilAdmin123!
4. Click "Let's start"

#### Set Up Public Permissions

1. After logging in, go to **Settings** > **Users & Permissions Plugin** > **Roles**
2. Click on the **Public** role
3. Enable the following permissions:
   - **api::footer.footer**
     - ✅ find
     - ✅ findOne
   - **api::header.header**
     - ✅ find
     - ✅ findOne
4. Click **Save**

## 📁 File Structure

```
soleil/
├── backend/
│   ├── src/
│   │   ├── bootstrap.ts              # Runs on Strapi startup
│   │   └── seeds/
│   │       └── admin-user.ts         # Seed function definition
│   ├── scripts/
│   │   ├── seed.js                   # Complex seed runner
│   │   └── run-seed.js               # Simple seed runner
│   └── package.json                  # Contains "seed" script
├── init-scripts/
│   ├── 01-init.sql                   # Database initialization
│   └── 02-strapi-setup.sql           # Strapi-specific setup
└── docker-compose.yml                # Database container
```

## 🔧 Seed Function Details

### What the Seed Function Does

```typescript
async seed({ strapi }) {
  // 1. Creates admin user if it doesn't exist
  await createAdminUser(strapi);

  // 2. Sets up public permissions for content types
  await setupPublicPermissions(strapi);
}
```

### Admin User Creation

- **Email**: admin@soleil.com
- **Password**: SoleilAdmin123!
- **Role**: Administrator
- **Status**: Active

### Public Permissions

The seed function grants public access to:

- `api::footer.footer` - find, findOne
- `api::header.header` - find, findOne

This allows your frontend to fetch header and footer content without authentication.

## 🐛 Troubleshooting

### Seed Function Not Running

1. **Check if Strapi is running**:

   ```bash
   curl http://localhost:1337/admin
   ```

2. **Check database connection**:

   ```bash
   docker exec -it soleil-postgres psql -U soleil_user -d soleil_db -c "SELECT 1;"
   ```

3. **Check logs**:
   ```bash
   cd backend
   yarn dev
   ```

### Database Connection Issues

1. **Verify Docker containers**:

   ```bash
   docker-compose ps
   ```

2. **Check port conflicts**:

   ```bash
   lsof -i :5433
   ```

3. **Restart database**:
   ```bash
   docker-compose down && docker-compose up -d
   ```

### Permission Issues

If public content is not accessible:

1. Go to Strapi admin panel
2. Navigate to Settings > Users & Permissions Plugin > Roles
3. Edit the Public role
4. Enable the required permissions
5. Save changes

## 🔄 Alternative Setup Methods

### Method 1: Using Bootstrap (Automatic)

The `bootstrap.ts` file runs automatically when Strapi starts. It performs the same functions as the seed.

### Method 2: Manual Setup

Follow the manual steps outlined above to create the admin user and set permissions through the Strapi admin interface.

### Method 3: Database Reset

If you need to start fresh:

```bash
# Stop and remove database volumes
docker-compose down -v

# Start fresh
docker-compose up -d
cd backend
yarn dev
```

## 📝 Environment Variables

Make sure your `backend/.env` file has the correct database configuration:

```env
DATABASE_CLIENT=postgres
DATABASE_HOST=localhost
DATABASE_PORT=5433
DATABASE_NAME=soleil_db
DATABASE_USERNAME=soleil_user
DATABASE_PASSWORD=soleil_password
DATABASE_SSL=false
```

## 🎯 Quick Start Commands

```bash
# Complete setup in one go
docker-compose up -d                    # Start database
cd backend && yarn dev &                # Start Strapi
sleep 30 && yarn seed                   # Run seed after Strapi starts
```

## 🔐 Security Notes

- The default admin password should be changed after first login
- Public permissions should be carefully reviewed for production
- Consider using environment variables for sensitive data
- The seed function only runs in development mode by default

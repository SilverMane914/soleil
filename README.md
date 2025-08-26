# Soleil Workspace

This is a Yarn workspace containing both the backend (Strapi) and frontend (Next.js) applications with separate lock files for each workspace.

## Project Structure

```
soleil/
├── backend/          # Strapi CMS backend
│   ├── yarn.lock    # Backend dependencies lock file
│   └── package.json # Backend configuration
├── frontend/         # Next.js frontend
│   ├── yarn.lock    # Frontend dependencies lock file
│   └── package.json # Frontend configuration
├── yarn.lock        # Root workspace lock file
├── package.json     # Root workspace configuration
├── .yarnrc.yml     # Root Yarn configuration
└── README.md       # This file
```

## Prerequisites

- Node.js >= 18.0.0
- Yarn (latest stable version)

## Setup

1. **Install Yarn** (if not already installed):

   ```bash
   corepack enable
   corepack prepare yarn@stable --activate
   ```

2. **Install dependencies for all workspaces**:

   ```bash
   yarn install
   ```

3. **Install dependencies for individual workspaces** (optional):

   ```bash
   # Backend only
   cd backend && yarn install

   # Frontend only
   cd frontend && yarn install
   ```

## Available Scripts

### Root Workspace Scripts

- `yarn dev` - Start development servers for both backend and frontend
- `yarn build` - Build both backend and frontend
- `yarn start` - Start production servers for both backend and frontend
- `yarn install:all` - Install dependencies for all workspaces
- `yarn clean` - Clean node_modules and cache for all workspaces
- `yarn lint` - Run linting for all workspaces

### Backend Scripts (Strapi)

- `yarn dev` - Start Strapi development server
- `yarn build` - Build Strapi application
- `yarn start` - Start Strapi production server
- `yarn console` - Open Strapi console
- `yarn clean` - Clean backend dependencies and cache

### Frontend Scripts (Next.js)

- `yarn dev` - Start Next.js development server with Turbopack
- `yarn build` - Build Next.js application with Turbopack
- `yarn start` - Start Next.js production server
- `yarn lint` - Run ESLint
- `yarn clean` - Clean frontend dependencies, cache, and build files

## Development

### Starting Development Servers

**Both applications:**

```bash
yarn dev
```

**Individual applications:**

```bash
# Backend only
cd backend && yarn dev

# Frontend only
cd frontend && yarn dev
```

### Adding Dependencies

**To a specific workspace:**

```bash
# Backend
cd backend && yarn add package-name

# Frontend
cd frontend && yarn add package-name
```

**To all workspaces:**

```bash
# Install in backend
cd backend && yarn add package-name

# Install in frontend
cd frontend && yarn add package-name
```

### Workspace Management

- **Run command in specific workspace:**

  ```bash
  cd backend && yarn dev
  cd frontend && yarn dev
  ```

- **Run command in all workspaces:**
  ```bash
  yarn dev  # Runs both backend and frontend concurrently
  ```

## Configuration

### Yarn Configuration

- **Root**: `.yarnrc.yml` - Main workspace configuration
- **Backend**: `backend/.yarnrc.yml` - Backend-specific configuration
- **Frontend**: `frontend/.yarnrc.yml` - Frontend-specific configuration

### Lock Files

Each workspace maintains its own lock file:

- `yarn.lock` - Root workspace dependencies (concurrently, etc.)
- `backend/yarn.lock` - Backend dependencies (Strapi, etc.)
- `frontend/yarn.lock` - Frontend dependencies (Next.js, React, etc.)

## Ports

- **Backend (Strapi)**: `http://localhost:1337`
- **Frontend (Next.js)**: `http://localhost:3000`

## Environment Variables

### Backend

Create `.env` file in the `backend/` directory:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS=your-app-keys
API_TOKEN_SALT=your-api-token-salt
ADMIN_JWT_SECRET=your-admin-jwt-secret
JWT_SECRET=your-jwt-secret
```

### Frontend

Create `.env.local` file in the `frontend/` directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:1337
```

## Troubleshooting

### Clean Installation

If you encounter dependency issues:

```bash
# Clean all workspaces
yarn clean

# Reinstall all dependencies
yarn install:all
```

### Yarn Cache Issues

```bash
# Clear Yarn cache
yarn cache clean

# Reinstall dependencies
yarn install
```

### Workspace Issues

```bash
# Reset workspace configuration
rm -rf node_modules .yarn/cache .yarn/install-state.gz
yarn install
```

## Contributing

1. Make changes in the appropriate workspace
2. Test your changes locally
3. Ensure all scripts run successfully
4. Commit your changes

## License

This project is private and proprietary.

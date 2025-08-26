#!/bin/bash

# Soleil Database Docker Management Script

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

print_header() {
    echo -e "${BLUE}=== $1 ===${NC}"
}

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
}

# Function to start the database
start_db() {
    print_header "Starting Soleil PostgreSQL Database"
    check_docker
    
    if [ -f "docker-compose.yml" ]; then
        docker-compose up -d postgres
        print_status "PostgreSQL database started successfully!"
        print_status "Database URL: postgresql://soleil_user:soleil_password@localhost:5432/soleil_db"
    else
        print_error "docker-compose.yml not found in current directory"
        exit 1
    fi
}

# Function to start database with PgAdmin
start_full() {
    print_header "Starting Soleil Database with PgAdmin"
    check_docker
    
    if [ -f "docker-compose.yml" ]; then
        docker-compose up -d
        print_status "PostgreSQL database and PgAdmin started successfully!"
        print_status "Database URL: postgresql://soleil_user:soleil_password@localhost:5432/soleil_db"
        print_status "PgAdmin URL: http://localhost:5050"
        print_status "PgAdmin Email: admin@soleil.com"
        print_status "PgAdmin Password: admin123"
    else
        print_error "docker-compose.yml not found in current directory"
        exit 1
    fi
}

# Function to stop the database
stop_db() {
    print_header "Stopping Soleil Database"
    check_docker
    
    if [ -f "docker-compose.yml" ]; then
        docker-compose down
        print_status "Database stopped successfully!"
    else
        print_error "docker-compose.yml not found in current directory"
        exit 1
    fi
}

# Function to restart the database
restart_db() {
    print_header "Restarting Soleil Database"
    stop_db
    start_full
}

# Function to show database status
status_db() {
    print_header "Soleil Database Status"
    check_docker
    
    if [ -f "docker-compose.yml" ]; then
        docker-compose ps
    else
        print_error "docker-compose.yml not found in current directory"
        exit 1
    fi
}

# Function to show database logs
logs_db() {
    print_header "Soleil Database Logs"
    check_docker
    
    if [ -f "docker-compose.yml" ]; then
        docker-compose logs -f postgres
    else
        print_error "docker-compose.yml not found in current directory"
        exit 1
    fi
}

# Function to reset the database (remove volumes)
reset_db() {
    print_header "Resetting Soleil Database"
    check_docker
    
    print_warning "This will remove all data in the database. Are you sure? (y/N)"
    read -r response
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        docker-compose down -v
        print_status "Database reset successfully!"
        print_status "Run './scripts/docker-db.sh start' to start fresh database"
    else
        print_status "Database reset cancelled."
    fi
}

# Function to connect to database
connect_db() {
    print_header "Connecting to Soleil Database"
    check_docker
    
    if docker ps | grep -q soleil-postgres; then
        docker exec -it soleil-postgres psql -U soleil_user -d soleil_db
    else
        print_error "Database is not running. Start it first with './scripts/docker-db.sh start'"
        exit 1
    fi
}

# Function to show help
show_help() {
    print_header "Soleil Database Docker Management"
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start     Start PostgreSQL database only"
    echo "  full      Start PostgreSQL database with PgAdmin"
    echo "  stop      Stop all database services"
    echo "  restart   Restart all database services"
    echo "  status    Show status of database services"
    echo "  logs      Show database logs"
    echo "  reset     Reset database (remove all data)"
    echo "  connect   Connect to database with psql"
    echo "  help      Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 start     # Start database only"
    echo "  $0 full      # Start database with PgAdmin"
    echo "  $0 stop      # Stop all services"
    echo "  $0 connect   # Connect to database"
}

# Main script logic
case "${1:-help}" in
    start)
        start_db
        ;;
    full)
        start_full
        ;;
    stop)
        stop_db
        ;;
    restart)
        restart_db
        ;;
    status)
        status_db
        ;;
    logs)
        logs_db
        ;;
    reset)
        reset_db
        ;;
    connect)
        connect_db
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac

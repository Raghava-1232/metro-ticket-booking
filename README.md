# Metro Ticket Booking Application

A modern, responsive metro ticket booking application that works across all devices.

## Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- React Router (for routing)
- Axios (for API calls)

### Backend
- Python
- Django
- Django REST Framework
- MySQL
- django-cors-headers

## Project Structure
```
metro-ticket-booking/
├── frontend/                # React frontend application
│   ├── public/             # Public assets
│   ├── src/               # Source files
│   │   ├── components/    # React components
│   │   ├── pages/        # Page components
│   │   ├── services/     # API services
│   │   └── App.js        # Main App component
├── backend/                # Django backend application
│   ├── metro_booking/     # Django project settings
│   ├── api/              # Django REST API app
│   ├── manage.py         # Django management script
│   └── requirements.txt  # Python dependencies
├── .gitignore             # Git ignore file
└── README.md              # Project documentation
```

## Getting Started

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm start
   ```
4. Access the application at `http://localhost:3000`

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate virtual environment:
   ```bash
   python -m venv venv
   .\venv\Scripts\activate  # Windows
   source venv/bin/activate # Linux/Mac
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure MySQL database in `metro_booking/settings.py`
5. Run migrations:
   ```bash
   python manage.py migrate
   ```
6. Start development server:
   ```bash
   python manage.py runserver
   ```
7. Access the API at `http://localhost:8000/api/`

## Features (In Development)
- User Authentication
- Station Search
- Route Planning
- Ticket Booking
- Payment Integration
- Booking History
- Digital Tickets
- Real-time Updates

## API Endpoints (Coming Soon)
- `/api/stations/` - List all stations
- `/api/routes/` - Get available routes
- `/api/tickets/` - Book and manage tickets
- `/api/users/` - User management
- `/api/auth/` - Authentication endpoints
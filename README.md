<h1 align="center"> Apartments Listing App </h1>

A full-stack apartment listing application built with Node.js/Express backend and Next.js frontend, using PostgreSQL database and Docker for containerization.

### Tech Stack

- **Backend**: `Node.js` with `Express`, `TypeScript`, `Prisma` `ORM`
- **Frontend**: `Next.js` with `React`, `TypeScript`, `Bootstrap`
- **Database**: `PostgreSQL`
- **Containerization**: `Docker` & `Docker-Compose`

### project structure

```bash
├── apartments-backend
│   ├── Dockerfile
│   ├── prisma
│   │   └── migrations
│   │       └── 20251105152215_apartments_migration
│   └── src
│       ├── config
│       ├── middlewares
│       └── modules
│           └── apartments
│               ├── apartmentController.ts
│               ├── apartmentRoutes.ts
│               ├── apartmentService.ts
│               └── apartmentValidation.ts
├── apartments-frontend
│   ├── Dockerfile
│   ├── app
│   │   ├── page.tsx
│   │   └── apartments
│   │       ├── page.tsx
│   │       └── [id]
│   │           └── page.tsx
│   ├── components
│   │   └── apartments
│   │       ├── ApartmentFilter.tsx
│   │       ├── ApartmentInfo.tsx
│   │       └── ApartmentTable.tsx
│   ├── hooks
│   │   └── apartments
│   │       ├── useApartment.ts
│   │       └── useApartments.ts
│   ├── interfaces
│   │   └── Apartment.ts
│   ├── public
│   ├── services
│   │   └── api.ts
│   └── types
├── .env
└── docker-compose.yml

```

### How to run

Run the app using `docker-compose`

```bash
# Build and start all services
docker-compose up

# Or run in detached mode
docker-compose up -d
```

### Access the Application

Once the containers are running:

- **Frontend**: http://localhost:3000 (listening on port 3000)
- **Backend API**: http://localhost:5000 (listening on port 5000)
- **API Documentation (Swagger)**: http://localhost:5000/api-docs

### Application Overview

This apartment listing system allows users to:
- View a list of all apartments
- View detailed information about specific apartments
- Search and filter apartments


### API Documentation

- Base URL `http://localhost:5000/api`

### Endpoints

#### 1. Get All Apartments
```http
GET /apartments
```

**Response:**
```json
[
  {
    "id": 1,
    "unit_name": "Palm Hills Residence",
    "unit_number": "A101",
    "unit_description": "Modern apartment with garden view",
    "project": "Palm Hills",
    "price": 2500000,
    "city": "Cairo",
    "createdAt": "2025-11-05T14:55:37.694Z"
  }
]
```

#### 2. Get Apartment by ID
```http
GET /apartments/{id}
```

**Parameters:**
- `id` (path parameter): Apartment ID

**Response:**
```json
{
  "id": 1,
  "unit_name": "Palm Hills Residence",
  "unit_number": "A101",
  "unit_description": "Modern apartment with garden view",
  "project": "Palm Hills",
  "price": 2500000,
  "city": "Cairo",
  "createdAt": "2025-11-05T14:55:37.694Z"
}
```

#### 3. Create New Apartment
```http
POST /apartments
```

**Request Body:**
```json
{
  "unit_name": "Mountain View Apartment",
  "unit_number": "B202",
  "unit_description": "Luxury apartment near the beach",
  "project": "Mountain View",
  "price": 3200000,
  "city": "Alexandria"
}
```

**Response:**
```json
{
  "id": 2,
  "unit_name": "Mountain View Apartment",
  "unit_number": "B202",
  "unit_description": "Luxury apartment near the beach",
  "project": "Mountain View",
  "price": 3200000,
  "city": "Alexandria",
  "createdAt": "2025-11-05T15:30:22.123Z"
}
```

### Complete cleanup

```bash
docker-compose down --rmi all --volumes --remove-orphans

```


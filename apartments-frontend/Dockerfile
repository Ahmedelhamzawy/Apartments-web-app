# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only package files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Accept build argument
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build the Next.js app
RUN npm run build

# Stage 2: Run 
FROM node:20-alpine AS runner

WORKDIR /app

# Copy the built app from the builder stage
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]

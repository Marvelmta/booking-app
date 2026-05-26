# Booking App

A simple and responsive **Booking App** built with **React** and **TypeScript**.  
The app allows users to create bookings with name, email, and date selection, while handling validation, duplicate bookings, and preventing past-date reservations.

---

## Functions

**Create booking** – Users can create a booking by entering:

- Name
- Email
- Date

**Form validation**

- Validates that name is not empty
- Validates correct email format
- Prevents booking with past dates

**Duplicate booking prevention**

- Prevents booking the same email on the same date

**Booking list**

- Displays all created bookings
- Shows name, email, and selected date
- Allows deletion of bookings

---

## Tech Stack

**Built with:**
- React   
- TypeScript  
- TailwindCSS

---

## Installation

```bash
# Clone the project
git clone https://github.com/Marvelmta/booking-app.git

# Go into the project folder
cd bokning

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## Project Structure 

```
/src
├── components/
│   ├── BokningForm.tsx
│   └── BokingLista.tsx
├── App.tsx
└── index.css
└── main.tsx
```
---

## Screenshots

### Home Page
![Home Page](/src/assets/homepage.png)

### Country Page
![Validation](/src/assets/validation.png)




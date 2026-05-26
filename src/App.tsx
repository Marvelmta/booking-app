import { useEffect, useState } from "react";
import BookingForm from "./components/BokningForm"
import BookingList from "./components/BokningLista";

export type Booking = {
  id: number;
  name: string;
  email: string;
  date: string;
};

function App() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    const savedBookings = localStorage.getItem("bookings");

    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );
  }, [bookings]);

  const addBooking = (booking: Booking) => {
    setBookings([...bookings, booking]);
  };

  const deleteBooking = (id: number) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    setBookings(updatedBookings);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-8">
          Bokningssystem
        </h1>

        <BookingForm
          bookings={bookings}
          addBooking={addBooking}
        />

        <BookingList
          bookings={bookings}
          deleteBooking={deleteBooking}
        />
      </div>
    </div>
  );
}

export default App;
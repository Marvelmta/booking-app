import { useState } from "react";

type Booking = {
  id: number;
  name: string;
  email: string;
  date: string;
};

type Props = {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
};

function BookingForm({ bookings, addBooking }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");

  const [successMessage, setSuccessMessage] =
    useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    date: "",
  });

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage("");

    let valid = true;

    const newErrors = {
      name: "",
      email: "",
      date: "",
    };

    const today = new Date()
    .toISOString()
    .split("T")[0];

    if (!name.trim()) {
      newErrors.name = "Namn krävs";
      valid = false;
    }

    if (!email.trim()) {
      newErrors.email = "Email krävs";
      valid = false;
    } else if (!validateEmail(email)) {
      newErrors.email = "Ogiltigt email-format";
      valid = false;
    }

    if (!date) {
      newErrors.date = "Datum krävs";
      valid = false;
    } else if (date < today) {
      newErrors.date =
        "Du kan inte boka ett datum som redan passerat";
      valid = false;
    }

    const duplicate = bookings.find(
      (booking) => booking.date === date
    );

    if (duplicate) {
      newErrors.date =
        "Detta datum är redan bokat";
      valid = false;
    }

    setErrors(newErrors);

    if (!valid) return;

    const newBooking: Booking = {
      id: Date.now(),
      name,
      email,
      date,
    };

    addBooking(newBooking);

    setSuccessMessage(
      "Bokningen har lagts till!"
    );

    setName("");
    setEmail("");
    setDate("");

    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <h2 className="text-2xl font-semibold">
        Lägg till bokning
      </h2>

      {successMessage && (
        <p className="bg-green-100 text-green-700 p-3 rounded-lg">
          {successMessage}
        </p>
      )}

      <div className="flex flex-col gap-2">
        <label className="font-medium">
          Namn
        </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {errors.name && (
          <p className="text-red-500 text-sm">
            {errors.name}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">
          E-mail
        </label>

        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {errors.email && (
          <p className="text-red-500 text-sm">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-medium">
          Datum
        </label>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {errors.date && (
          <p className="text-red-500 text-sm">
            {errors.date}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
      >
        Spara bokning
      </button>
    </form>
  );
}

export default BookingForm;
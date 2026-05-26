type Booking = {
  id: number;
  name: string;
  email: string;
  date: string;
};

type Props = {
  bookings: Booking[];
  deleteBooking: (id: number) => void;
};

function BookingList({
  bookings,
  deleteBooking,
}: Props) {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-6">
        Bokningslista
      </h2>

      {bookings.length === 0 ? (
        <p className="text-gray-500">
          Inga bokningar ännu.
        </p>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="border border-gray-200 rounded-xl p-5 flex items-center justify-between shadow-sm"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold">
                  {booking.name}
                </h3>

                <p className="text-gray-600">
                  {booking.email}
                </p>

                <p className="text-gray-500 text-sm">
                  {booking.date}
                </p>
              </div>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                onClick={() =>
                  deleteBooking(booking.id)
                }
              >
                Ta bort
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default BookingList;
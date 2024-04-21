import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Tag } from "antd";

import Loader from "../components/Loader";
import Error from "../components/Error";
import "./MyBookingScreen.css"; // Import custom CSS for styling

function MyBookingScreen() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const user = JSON.parse(localStorage.getItem("currentUser"));

  async function fetchMyAPI() {
    setError("");
    setLoading(true);
    try {
      const data = (
        await axios.post("/api/bookings/getbookingbyuserid", {
          userid: user._id,
        })
      ).data;
      setBookings(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMyAPI();
  }, []);

  async function cancelBooking(bookingid, roomid) {
    setError("");
    setLoading(true);
    try {
      const data = (
        await axios.post("/api/bookings/cancelbooking", {
          bookingid,
          roomid,
        })
      ).data;
      setLoading(false);
      Swal.fire(
        "Congratulations",
        "Your Room Cancelled Successfully",
        "success"
      ).then((result) => {
        fetchMyAPI();
      });
    } catch (error) {
      console.log(error);
      Swal.fire("Opps", "Error:" + error, "error");
    }
    setLoading(false);
  }

  return (
    <div className="my-booking-container">
      {loading ? (
        <Loader />
      ) : error.length > 0 ? (
        <Error msg={error} />
      ) : (
        <div className="booking-list">
          {bookings &&
            bookings.map((booking) => (
              <div className="booking-card" key={booking._id}>
                <h1>{booking.room}</h1>
                <p><b>BookingId:</b> {booking._id}</p>
                <p><b>CheckIn:</b> {booking.fromdate}</p>
                <p><b>CheckOut:</b> {booking.todate}</p>
                <p><b>Amount:</b> {booking.totalamount}</p>
                <p>
                  <b>Status:</b>{" "}
                  <Tag color={booking.status === "booked" ? "green" : "red"}>
                    {booking.status === "booked" ? "CONFIRMED" : "CANCELLED"}
                  </Tag>
                </p>
                {booking.status === "booked" && (
                  <div className="text-right">
                    <button
                      className="cancel-btn"
                      onClick={() => cancelBooking(booking._id, booking.roomid)}
                    >
                      Cancel Booking
                    </button>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default MyBookingScreen;

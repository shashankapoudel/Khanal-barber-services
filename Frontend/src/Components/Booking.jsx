import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { createPortal } from "react-dom";
import "react-datepicker/dist/react-datepicker.css";

const Booking = ({ serviceName }) => {
  const [showModal, setShowModal] = useState(false);

  const [name, setName] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");

  const slots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
  ];

  const handleWhatsAppBooking = () => {
    const message = `
Hello, I would like to book an appointment.

Service: ${serviceName}
Name: ${name}
Date: ${date.toDateString()}
Time: ${time}
    `;

    const whatsappNumber = "9779812345678";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    setShowModal(false);
    setName("");
    setDate(new Date());
    setTime("");
  };

  const modal = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={() => setShowModal(false)}
    >
      <div
        className="bg-[#2A2F31] w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-[#C6A45C]/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#1B1F21] p-5 text-center border-b border-[#C6A45C]/20">
          <h2 className="text-white text-2xl font-bold font-orbitron">
            Book Appointment
          </h2>
          <p className="text-[#C6A45C] text-sm mt-1">{serviceName}</p>
        </div>

        <div className="p-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-[#1B1F21] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#C6A45C]"
          />

          <DatePicker
            selected={date}
            onChange={(d) => setDate(d)}
            minDate={new Date()}
            className="w-full bg-[#1B1F21] text-white p-4 rounded-xl outline-none border border-transparent focus:border-[#C6A45C]"
          />

          <div>
            <p className="text-gray-300 text-sm mb-2">Select Time</p>

            <div className="grid grid-cols-3 gap-2">
              {slots.map((slot) => (
                <button
                  key={slot}
                  onClick={() => setTime(slot)}
                  className={`p-2 rounded-lg border text-sm ${
                    time === slot
                      ? "bg-[#C6A45C] text-black"
                      : "border-gray-500 text-white"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-4">
            <button
              onClick={() => setShowModal(false)}
              className="w-full border border-gray-500 text-white py-3 rounded-xl hover:bg-gray-700"
            >
              Cancel
            </button>

            <button
              onClick={handleWhatsAppBooking}
              disabled={!name || !time}
              className="w-full bg-[#C6A45C] text-black font-bold py-3 rounded-xl disabled:opacity-50"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="w-full bg-[#C6A45C] hover:bg-[#d4b26b] text-black font-bold py-3 rounded-xl"
      >
        BOOK NOW
      </button>

      {showModal && createPortal(modal, document.body)}
    </>
  );
};

export default Booking;

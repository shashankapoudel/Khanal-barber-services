import React, { useState } from "react";

const ContactPage = () => {
  const [name, setName] = useState("");

  return (
    <div className="relative min-h-screen flex flex-col w-full p-8 items-center justify-center bg-black/70">
      <div className="flex w-full h-full lg:w-1/2   p-4 text-[#FFFFFF]  items-center justify-center ">
        <div className="w-1/2 flex flex-col gap-4">
          <div className="flex flex-col">
            <label>Your Name:</label>
            <input
              name="name"
              className="border p-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label>Email:</label>
            <input
              name="name"
              className="border p-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label>Phone number:</label>
            <input
              name="name"
              className="border p-1"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button className="bg-[#C6A45C] p-1 font-medium rounded-lg">
            Submit
          </button>
        </div>
      </div>

      <div className="w-full absolute bg-white flex items-center justify-between p-8  bottom-0 font-roboto">
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold border-b border-[#C6A45C] pb-1 inline-block">
            GET IN TOUCH
          </h1>
          <div>
            <p>Hobart, Tasmania</p>
            <p>Phone: 0400811122</p>
            <p>Email: sharpandmobile@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold border-b border-[#C6A45C] pb-1 inline-block">
            Hours
          </h1>
          <div>
            <p>Hobart, Tasmania</p>
            <p>Phone: 0400811122</p>
            <p>Email: sharpandmobile@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold border-b border-[#C6A45C] pb-1 inline-block">
            Follow Us
          </h1>
          <div>
            <p>Hobart, Tasmania</p>
            <p>Phone: 0400811122</p>
            <p>Email: sharpandmobile@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

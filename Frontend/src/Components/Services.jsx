import React from "react";

const Services = () => {
  const services = [
    {
      image: "/Images/prasanna1.jpeg",
      name: "Haircut",
      price: 25,
      description: "Includes skin fade, taper & burst styles",
    },
    {
      image: "/Images/barber.jpg",
      name: "Beard",
      price: 15,
      description: "Sharp lineup and beard grooming",
    },
    {
      image: "/Images/barber.jpg",
      name: "Haircut & Beard",
      price: 35,
      description: "Complete fresh cut with beard styling",
    },
  ];

  return (
    <section className="w-full bg-[#1B1F21] py-16 px-4 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-14">
          <p className="text-[#C6A45C] uppercase tracking-[6px] font-semibold text-sm lg:text-base font-rajdhani">
            WHAT WE DO
          </p>

          <h1 className="text-white text-4xl lg:text-6xl font-bold font-orbitron mt-3">
            OUR SERVICES
          </h1>

          <div className="w-24 h-1 bg-[#C6A45C] rounded-full mt-5"></div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-[#2A2F31] rounded-[30px] overflow-hidden 
              border border-transparent hover:border-[#C6A45C]
              transition-all duration-500 hover:-translate-y-3
              hover:shadow-[0_20px_60px_rgba(198,164,92,0.25)]
              flex flex-col h-full"
            >
              <div className=" overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div> */}
              </div>

              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-white text-2xl font-bold font-orbitron">
                      {service.name}
                    </h2>

                    {/* <p className="text-gray-300 text-sm mt-2 leading-relaxed font-rajdhani">
                      {service.description}
                    </p> */}
                  </div>

                  <div className="bg-[#C6A45C] text-black font-bold px-4 py-2 rounded-full text-lg min-w-fit">
                    ${service.price}
                  </div>
                </div>

                {service.name === "Haircut" ? (
                  <div className="">
                    <p className="text-[#C6A45C] text-sm font-medium">
                      (Skin fade with foil used: +$5)
                    </p>
                  </div>
                ) : (
                  <p className="opacity-0 text-sm">placeholder</p>
                )}

                <button className="mt-2 w-full bg-[#C6A45C] hover:bg-[#d4b26b] text-black font-bold py-3 rounded-xl transition duration-300 font-orbitron tracking-wide">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

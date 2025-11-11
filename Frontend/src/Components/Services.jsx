import React from 'react'

const Services = () => {

    const services = [
        {
            image: "/Images/barber.jpg",
            name: "Haircut and Beard",
            price: 45
        },
        {
            image: "/Images/barber.jpg",
            name: "Beard and Moustache",
            price: 45
        },
        {
            image: "/Images/barber.jpg",
            name: "Men's Haircut",
            price: 45
        },
    ]


    return (
        <div className='w-full flex items-center justify-center p-8 bg-[#232729]'>

            <div>


                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#FFFFFF] font-bold text-xl lg:text-2xl font-rajdhani'>-- WHAT WE DO --</h1>
                    <h1 className='text-[#FFFFFF] font-bold text-2xl lg:text-5xl leading-relaxed font-orbitron'>OUR  SERVICES</h1>
                </div>


                <div className='flex flex-col lg:flex-row gap-8 p-8'>
                    {
                        services.map((service, index) => (
                            <div
                                className=' p-8 flex flex-col items-center justify-center gap-4 bg-[#545454] rounded-3xl w-72 lg:w-96 cursor-pointer hover:scale-110'
                                key={index}>
                                <img
                                    src={service.image}
                                    className='w-36 h-36 object-cover rounded-full border border-black'
                                />
                                <div className='flex w-full justify-between'>
                                    <h1 className='text-[#FFFFFF] font-orbitron font-bold text-xl'>{service.name}</h1>
                                    <h1 className='text-[#FFFFFF] font-orbitron font-bold text-xl'>${service.price}</h1>
                                </div>
                            </div>
                        ))
                    }
                </div>


            </div>
        </div>
    )
}

export default Services

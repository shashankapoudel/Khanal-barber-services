import React from 'react'

const About = () => {

    const features = [

        {
            image: "/Images/feature2.jpg",
            feature: "Express Barber Service"
        },

        {
            image: "/Images/feature2.jpg",
            feature: "Guaranteed Satisfaction"
        },

        {
            image: "/Images/feature1.jpg",
            feature: "Top-Tier Service"
        },

    ]

    return (
        <div className='flex items-center justify-center p-12'>

            <div className='w-4/5 '>

                <div >
                    <h1 className='text-center tracking-wider font-extrabold text-4xl font-orbitron'>THE BARBER THAT COMES TO YOU</h1>
                    <p className='text-center text-lg font-medium tracking-wider mt-4 font-rajdhani'>We are bringing top-quality grooming straight to your doorstep.
                        Whether you’re at home, the office, or hosting an event, we come to you by appointment with a fully equipped, air-conditioned barbershop on wheels.<br />
                        <br />
                        We specialize in men’s and kids’ haircuts at affordable prices, offering everything from modern fades and classic cuts to precise beard trims. We value your time. Our service is built for convenience and quality — perfect for busy professionals, parents, and anyone who wants a fresh look without the hassle of traveling or waiting in line.<br />
                        <br />
                        No traffic. No queues. Just professional grooming on your schedule.
                        Let us bring the barbershop experience to you — wherever you are in Melbourne.</p>
                </div>

                <div className='flex items-center justify-between gap-6 mt-4'>

                    {features.map((feature, index) => (
                        <div key={index}>
                            <img
                                className='w-96 object-cover h-56'
                                src={feature.image}
                            />
                        </div>
                    ))

                    }
                </div>


            </div>
        </div>
    )
}

export default About

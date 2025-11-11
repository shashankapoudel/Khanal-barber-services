
// import { motion, AnimatePresence } from 'framer-motion';
// import React, { useEffect, useState } from 'react';

// const phrases = [
//     'Classic Cuts, Modern Style',
//     'Precision. Passion. Perfection.',
//     'Look Sharp. Feel Sharp.',
// ];

// const HomePage = () => {
//     const [index, setIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setIndex((prev) => (prev + 1) % phrases.length);
//         }, 2500);
//         return () => clearInterval(timer);
//     }, []);

//     return (
//         <div>

//             <div
//                 className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
//                 style={{ backgroundImage: "url('/Images/barber.jpg')" }}
//             >
//                 <h1 className="text-5xl font-semibold font-rajdhani mb-4">Welcome to Khanal Barber Services</h1>

//                 <AnimatePresence mode="wait">
//                     <motion.p
//                         key={phrases[index]}
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -20 }}
//                         transition={{ duration: 0.5 }}
//                         className="text-2xl font-orbitron text-gray-200 font-medium"
//                     >
//                         {phrases[index]}
//                     </motion.p>
//                 </AnimatePresence>
//             </div>

//         </div>
//     );
// };
// export default HomePage;

import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Services from '../Components/services';
import About from '../Components/About';

const phrases = [
    'Classic Cuts, Modern Style',
    'Precision. Passion. Perfection.',
    'Look Sharp. Feel Sharp.',
];

const HomePage = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % phrases.length);
        }, 2500);
        return () => clearInterval(timer);
    }, []);

    return (

        <div>

            <div
                className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
                style={{ backgroundImage: "url('/Images/barber.jpg')" }}
            >
                <motion.div
                    initial={{ y: "100vh", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    <h1 className="text-5xl font-semibold font-rajdhani mb-4">
                        Welcome to Khanal Barber Services
                    </h1>

                    <AnimatePresence mode="wait">
                        <motion.p
                            key={phrases[index]}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-2xl font-orbitron text-gray-200 font-medium"
                        >
                            {phrases[index]}
                        </motion.p>
                    </AnimatePresence>

                </motion.div>
            </div>


            <div>
                <About />
            </div>

            <div>
                <Services />
            </div>


        </div>
    );
};

export default HomePage;

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import welcomeImg from "../../../assets/welcome-pic.png";
import { TbActivityHeartbeat as BeatIcon } from "react-icons/tb";

const Welcome = () => {
    const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });
    const controls1 = useAnimation();
    const controls2 = useAnimation();
    const controls3 = useAnimation();
    const controls4 = useAnimation();

    const [isAnimated, setIsAnimated] = useState(false);

    if (inView && !isAnimated) {
        setIsAnimated(true);
        controls1.start("visible");
        setTimeout(() => controls2.start("visible"), 1000);
        setTimeout(() => controls3.start("visible"), 2000);
        setTimeout(() => controls4.start("visible"), 3000);
    }

    return (
        <section
            className="d-flex justify-content-around align-items-center pt-5"
            style={{
                marginTop: 100,
                marginBottom: 150,
                marginLeft: 60,
                marginRight: 60,
            }}
            ref={ref}
        >
            <motion.div
                className="d-flex flex-column align-items-start w-25 pt-5"
                initial={{ opacity: 0, y: 50 }}
                animate={controls1}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                }}
            >
                <motion.span
                    className="fs-5 mb-3"
                    initial={{ opacity: 0, x: -50 }}
                    animate={controls1}
                    variants={{
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        },
                    }}
                >
                    <BeatIcon className="fs-3" /> About Us
                </motion.span>
                <motion.h2
                    className="text-primary pb-4 fs-1"
                    initial={{ opacity: 0, x: -50 }}
                    animate={controls2}
                    variants={{
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        },
                    }}
                >
                    Welcome to Our Clinic
                </motion.h2>
                <motion.p
                    className="fs-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={controls3}
                    variants={{
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        },
                    }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.tempor incididunt ut labore et dolore magna
                    aliqua.tempor incididunt.
                </motion.p>
                <motion.a
                    href="/about"
                    className="btn btn-primary btn-round px-4 py-2 fs-5"
                    initial={{ opacity: 0, x: -50 }}
                    animate={controls4}
                    variants={{
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 1 },
                        },
                    }}
                >
                    Learn More
                </motion.a>
            </motion.div>
            <div
                className="w-50"
                style={{
                    backgroundImage: `url(${welcomeImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "700px",
                }}
            ></div>
        </section>
    );
};

export default Welcome;

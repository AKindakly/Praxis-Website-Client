import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import homeImg from "../../../assets/home-pic2.jpg";

const Hero = () => {
    const h1Variants = {
        initial: { x: "-100vw" },
        animate: { x: 0 },
    };

    const pVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
    };

    const transition = {
        type: "spring",
        stiffness: 50,
        delay: 0.5,
    };

    return (
        <section
            className="bg-image d-flex align-items-center"
            style={{
                backgroundImage: `url(${homeImg})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "85vh",
            }}
        >
            <Container
                style={{
                    marginLeft: 155,
                }}
            >
                <motion.div
                    className="w-50 text-black"
                    initial="initial"
                    animate="animate"
                    variants={h1Variants}
                    transition={transition}
                >
                    <motion.h1
                        className="pb-4 text-primary"
                        style={{ fontSize: 50 }}
                        variants={h1Variants}
                        transition={transition}
                    >
                        Dentist Services <br /> that You Can Trust
                    </motion.h1>
                </motion.div>
                <motion.div
                    className="w-50 text-black"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    variants={pVariants}
                    transition={{ delay: 2 }}
                >
                    <motion.p
                        className="fs-3"
                        variants={pVariants}
                        transition={{ delay: 2 }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </motion.p>
                    <a
                        href="https://www.google.com"
                        target="_blank"
                        className="btn btn-primary btn-round px-4 py-2 fs-5"
                        rel="noreferrer"
                    >
                        Book Now
                    </a>
                </motion.div>
            </Container>
        </section>
    );
};

export default Hero;

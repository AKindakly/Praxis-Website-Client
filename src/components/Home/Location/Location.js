import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { TbActivityHeartbeat as BeatIcon } from "react-icons/tb";

const workingHoursData = [
    {
        id: 1,
        day: "Monday",
        hour: "09:00-17:00",
    },
    {
        id: 2,
        day: "Tuesday",
        hour: "09:00-17:00",
    },
    {
        id: 3,
        day: "Wednesday",
        hour: "09:00-17:00",
    },
    {
        id: 4,
        day: "Thursday",
        hour: "09:00-17:00",
    },
    {
        id: 5,
        day: "Friday",
        hour: "09:00-17:00",
    },
    {
        id: 6,
        day: "Saturday",
        hour: "Closed",
    },
    {
        id: 7,
        day: "Sunday",
        hour: "Closed",
    },
];

const Location = () => {
    const [Ref, InView] = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    const firstVariants = {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2 } },
    };

    const secondVariants = {
        hidden: { x: 200, opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 2 } },
    };

    return (
        <section
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                marginTop: 100,
                marginBottom: 150,
                marginLeft: 50,
                marginRight: 50,
            }}
            ref={Ref}
        >
            <span className="fs-5 mb-3">
                <BeatIcon className="fs-3" /> Location
            </span>
            <h2 className="text-primary fs-1 mb-5">Where to Find Us</h2>
            <div className="d-flex flex-row">
                <motion.div
                    className="border border-primary border-5 rounded"
                    initial="hidden"
                    animate={InView ? "visible" : "hidden"}
                    variants={firstVariants}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.697407336874!2d13.407230416131934!3d52.52081497981429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e1f9014ffeb%3A0xc8fafc484349e4a1!2sBerliner%20Fernsehturm!5e0!3m2!1sen!2sde!4v1679065743097!5m2!1sen!2sde"
                        width="700"
                        height="600"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={InView ? "visible" : "hidden"}
                    variants={secondVariants}
                >
                    <div
                        className="bg-primary rounded text-white p-5"
                        style={{ marginTop: 60, marginLeft: -70 }}
                    >
                        <h3 className="pb-4">Working Hours</h3>
                        <div>
                            {workingHoursData.map((workingHourData) => (
                                <div
                                    key={workingHourData.id}
                                    className=" d-flex justify-content-between"
                                >
                                    <p className="pe-5">
                                        {workingHourData.day}:
                                    </p>
                                    <p>{workingHourData.hour}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;

import React, { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

import { FiThumbsUp as ThumbsUpIcon } from "react-icons/fi";
import {
    RiCustomerService2Line as ServicesIcon,
    RiCalendar2Line as CalenderIcon,
    RiEmotionHappyLine as HappyIcon,
} from "react-icons/ri";

const Statistics = () => {
    const [hasAnimated, setHasAnimated] = useState(false);
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true,
    });

    if (inView && !hasAnimated) {
        setHasAnimated(true);
    }

    return (
        <section
            ref={ref}
            className="d-flex flex-column align-items-center bg-primary bg-gradient py-5"
        >
            <h2 className="text-white mb-5 fs-1">Dental Clinic in Numbers</h2>
            <div className="w-100 d-flex justify-content-evenly text-white fs-3">
                <div className="d-flex flex-column align-items-center">
                    <ThumbsUpIcon className="fs-2 mb-2" />
                    <h4>Quality</h4>
                    <CountUp
                        end={hasAnimated ? 100 : 0}
                        suffix="%"
                        duration={5}
                    />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <ServicesIcon className="fs-2 mb-2" />
                    <h4>Services Provide</h4>
                    <CountUp
                        end={hasAnimated ? 260 : 0}
                        suffix="+"
                        duration={5}
                    />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <CalenderIcon className="fs-2 mb-2" />
                    <h4>Years of experience</h4>
                    <CountUp
                        end={hasAnimated ? 10 : 0}
                        suffix="+"
                        duration={5}
                    />
                </div>
                <div className="d-flex flex-column align-items-center">
                    <HappyIcon className="fs-2 mb-2" />
                    <h4>Happy Customers</h4>
                    <CountUp
                        end={hasAnimated ? 1500 : 0}
                        suffix="+"
                        duration={5}
                    />
                </div>
            </div>
        </section>
    );
};

export default Statistics;

import React from "react";
import { Container } from "react-bootstrap";
import {
    RiNurseLine as NurseIcon,
    RiHospitalLine as HospitalIcon,
    RiMoneyEuroCircleLine as MoneyIcon,
} from "react-icons/ri";

const Features = () => {
    return (
        <>
            <Container
                className="p-4 border border-3 rounded bg-white text-primary"
                style={{ marginTop: -80 }}
            >
                <div className="row justify-content-center">
                    <div className="col-md-4 text-center px-5">
                        <NurseIcon className="fs-1 my-3" />
                        <h4>Qulified Doctors</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                    <div className="col-md-4 text-center px-5">
                        <HospitalIcon className="fs-1 my-3" />
                        <h4>Modern Instrument</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                    <div className="col-md-4 text-center px-5">
                        <MoneyIcon className="fs-1 my-3 " />
                        <h4>Easy Billing</h4>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Features;

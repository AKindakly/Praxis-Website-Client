import React from "react";

import NavTop from "../Layout/NavTop/NavTop";
import Footer from "../Layout/Footer/Footer";
import Title from "../Layout/Title/Title";
import Location from "../Home/Location/Location";
import ContactForm from "./ContactForm/ContactForm";
import Appointment from "./Appointment/Appointment";

const Contact = () => {
    return (
        <div>
            <NavTop />
            <Title />
            <Location />
            <Appointment />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Contact;

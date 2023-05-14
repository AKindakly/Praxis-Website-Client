import React from "react";
import { TbActivityHeartbeat as BeatIcon } from "react-icons/tb";

const ContactForm = () => {
    return (
        <section
            className="d-flex flex-column justify-content-center align-items-center"
            style={{
                marginTop: 100,
                marginBottom: 150,
            }}
        >
            <span className="fs-5 mb-3">
                <BeatIcon className="fs-3" /> Contact Form
            </span>
            <h2 className="text-primary fs-1 mb-5">Leave us a Message</h2>

            <form className="w-50">
                <div className="form-floating mb-3 ">
                    <input
                        type="text"
                        className="form-control form-control-lg "
                        placeholder="Your Name"
                        required
                    />
                    <label htmlFor="floatingInput">Your Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Your Email"
                        required
                    />
                    <label htmlFor="floatingInput">Your Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="the Subject"
                        required
                    />
                    <label htmlFor="floatingInput">the Subject</label>
                </div>
                <div className="form-floating mb-3">
                    <textarea
                        className="form-control form-control-lg"
                        placeholder="Your Message"
                        style={{ height: 150 }}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Your Message</label>
                </div>
                <div>
                    <button
                        type="submit"
                        className="btn btn-primary btn-round px-4 py-2 fs-5 "
                    >
                        Send Message
                    </button>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;

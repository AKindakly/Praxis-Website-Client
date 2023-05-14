import React from "react";
import { Carousel, Container } from "react-bootstrap";

import {
    TbActivityHeartbeat as BeatIcon,
    TbStarFilled as StarIcon,
} from "react-icons/tb";

const testimonialData = [
    {
        id: 1,
        image: "https://picsum.photos/100",
        name: "John Doe",
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
        rating: 5,
    },
    {
        id: 2,
        image: "https://picsum.photos/101",
        name: "Max Muster",
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
        rating: 4,
    },
    {
        id: 3,
        image: "https://picsum.photos/102",
        name: "Bob Smith",
        review: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti.",
        rating: 5,
    },
];

const Testimonial = () => {
    return (
        <section>
            <Container fluid>
                <div className="row mt-5">
                    <div className="col-1 bg-primary"></div>

                    <div className="col-4 bg-primary pt-5">
                        <span className="fs-5">
                            <BeatIcon className="fs-3" /> Testimonial
                        </span>
                        <h2 className="text-white fs-1 ml-5 mt-3">
                            What Our Patients Say
                        </h2>
                    </div>

                    <div className="col-6 border border-5 border-primary">
                        <Carousel
                            indicators={false}
                            transitionduration={100}
                            removearrowondevicetype={["tablet", "mobile"]}
                        >
                            {testimonialData.map((testimonial) => (
                                <Carousel.Item key={testimonial.id}>
                                    <div className="d-flex flex-column align-items-center text-center my-4">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="rounded-circle mb-3"
                                            width="80"
                                            height="80"
                                        />
                                        <h5>{testimonial.name}</h5>
                                        <p className="w-50">
                                            {testimonial.review}
                                        </p>
                                        <div>
                                            {[...Array(testimonial.rating)].map(
                                                (star, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-warning fs-3"
                                                    >
                                                        <StarIcon />
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                    <div className="col-1 bg-primary"></div>
                </div>
            </Container>
        </section>
    );
};

export default Testimonial;

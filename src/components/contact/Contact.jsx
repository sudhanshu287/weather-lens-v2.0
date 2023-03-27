import React from "react";
import "./Contact.css";
const Contact = () => {
    return (
        <div className="contactContainer" id="contact">
            <h2 className="contactTitle">Contact Us</h2>
            <form
                action="https://formsubmit.co/da5c0bc3fd3dbe01b2826d6f3a82056c"
                method="POST"
                className="contactForm"
                enctype="multipart/form-data"
            >
                <div className="contactInputs">
                    <div className="contactContent">
                        <label for="" className="contactLabel">
                            Name
                        </label>
                        <input
                            type="text"
                            className="contactInput"
                            name="name"
                            required
                        />
                    </div>
                    <div className="contactContent">
                        <label for="" className="contactLabel">
                            Email
                        </label>
                        <input
                            type="email"
                            className="contactInput"
                            name="email"
                            required
                        />
                    </div>
                </div>
                <div className="contactContent">
                    <label for="" className="contactLabel">
                        Project
                    </label>
                    <input type="text" className="contactInput" name="project" />
                </div>
                <div className="contactContent">
                    <label for="" className="contactLabel">
                        Message
                    </label>
                    <textarea
                        name=""
                        id=""
                        cols="0"
                        rows="7"
                        className="contactInput"
                        required
                    ></textarea>
                </div>
                <div>
                    <button type="submit" className="contactButton">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Contact;

import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form action="" className="contact">
        <label for="">Name</label>
        <input type="text" />
        <label for="">Email</label>
        <input type="email" />
        <label for="">Subject</label>
        <input type="text" />
        <label for="">Your Message</label>
        <textarea />
        <button type="Submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;

import React, { useState } from "react";
import {  Modal } from 'semantic-ui-react'
import { db } from "../../firebase";
import ContactContent from "../../content/ContactContent.json";

const Contact = () => {
  const { Contact, Address, Shedule } = ContactContent;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [open, setOpen] = React.useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true)
    db.collection("contacts")
      .add({
        name: name,
        email: email,
        number: number,
        subject: subject,
        message: message,
      })
      .then(() => {
        setName("");
        setEmail("");
        setMessage("");
        setNumber("");
        setSubject("");
        setOpen(false)
      })
      .catch((error) => {
        
        setOpen(false)
      });
  };

  return (
    <>
    <section
      className="contact-section pt-130"
      id="contact"
      style={{ marginBottom: "106px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-5">
            <div className="contact-item-wrapper">
              <div className="row">
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Contact</h4>
                      <p >{Contact.number}</p>
                      <p>{Contact.email}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Address</h4>
                      <p>{Address.address}</p>
                      <p>{`${Address.city},${Address.state},${Address.country}`}</p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-xl-12">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <i className="lni lni-alarm-clock"></i>
                    </div>
                    <div className="contact-content">
                      <h4>Shedule</h4>
                      <p>{Shedule.Open}</p>
                      <p>{Shedule.OfficeTime}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7">
            <div className="contact-form-wrapper">
              <div className="row">
                <div className="col-xl-10 col-lg-8 mx-auto">
                  <div className="section-title text-center mb-50">
                    <span className="wow fadeInDown" data-wow-delay=".2s">
                      Get in Touch
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".4s">
                      Ready to Get Started
                    </h2>
                    {/* <p className="wow fadeInUp" data-wow-delay=".6s">
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      quiblanditiis praesentium
                    </p> */}
                  </div>
                </div>
              </div>
              <form action="assets/php/mail.php" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="number"
                      id="phone"
                      placeholder="Phone Number"
                      required
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Type Message"
                      rows="5"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="button text-center">
                      <button
                        type="submit"
                        className="theme-btn"
                        onClick={handleSubmit}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
    >
     
      <Modal.Content>
        <p>
          Welcome to Cyber threat solutions 
        </p>
      </Modal.Content>
    </Modal>
    </>
  );
};

export default Contact;

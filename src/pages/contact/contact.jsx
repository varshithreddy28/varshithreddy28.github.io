import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "./contact.css";
import Icons from "../../components/contactme/icons";
// import { SMTPClient } from "emailjs";
import emailjs from "@emailjs/browser";

const Contact = ({ theme }) => {
  // const { REACT_APP_SERVICE } = process.env;
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [mailSent, setMailSent] = useState(true);

  const handelChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setDetails({ ...details, [inputName]: inputValue });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    // console.log(process.env.REACT_APP_EMAILSERVICE, process.env);
    if (
      details.name == "" ||
      details.email == "" ||
      details.subject == "" ||
      details.message == ""
    ) {
      toast.error("Fill all the Required fields");
    } else if (details.email.indexOf("@") == -1) {
      toast.warning("Enter a valid email");
    } else {
      setMailSent(false);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE_ID,
          e.target,
          process.env.REACT_APP_USER_ID
        )
        .then((res) => {
          // console.log(res.status, "Is response....................");
          if (res.status == 200) {
            toast.success(
              "Thanks for contacting me!You Will recive a reply soon."
            );
            setMailSent(true);
            setDetails({
              name: "",
              email: "",
              subject: "",
              message: "",
            });
          }
        })
        .catch((err) => {
          toast.error(err.message);
          setMailSent(true);
        });
    }
  };

  return (
    <div className="contactPage" id="contact">
      <div className="containerContact">
        <h1 id="contactHeader">Contact Me</h1>
        <div className="contactForm">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <form data-aos="fade-up" action="" onSubmit={handelSubmit}>
            <div className="contactdetails">
              <div className="inputLabel">
                {/* <label htmlFor="name">Name</label> */}
                <input
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                  onChange={handelChange}
                  value={details.name}
                  // required="true"
                />
              </div>
              <div className="inputLabel">
                {/* <label htmlFor="email">Email</label> */}
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={handelChange}
                  value={details.email}
                />
              </div>
            </div>
            <div className="subject">
              <div className="inputLabel">
                {/* <label htmlFor="subject">Subject</label> */}
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  name="subject"
                  onChange={handelChange}
                  value={details.subject}
                />
              </div>
            </div>
            <div className="message">
              <div className="inputLabel">
                {/* <label htmlFor="message">Message</label> */}
                <textarea
                  type="text"
                  placeholder="Message"
                  id="message"
                  name="message"
                  onChange={handelChange}
                  rows={5}
                  value={details.message}
                />
              </div>
            </div>
            <div className="submitbtn">
              <button type="submit">
                {mailSent ? "Submit" : "Sending..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

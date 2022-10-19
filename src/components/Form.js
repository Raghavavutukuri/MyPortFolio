import "./FormStyles.css"

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const email_send = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ivmxd4j', 'template_evpcu8y', email_send.current, 'wsG2sxphX5Il800Zf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  const notifyToast = () =>{
    toast.success("We received your message.\n check your mail for acknowledgement", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  };

  return (
    <div className="form">
        <form ref={email_send} onSubmit={()=>{sendEmail, notifyToast}}>
            <label>Your Name</label>
            <input type="text" name="user_name"></input>
            <label>Email</label>
            <input type="email" name="user_email"></input>
            <label>Subject</label>
            <input type="text" name="user_subject"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type your message: " name="user_message"/>
            <button className="btn">Submit</button>
            <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        </form>
    </div>
  )
}

export default Form
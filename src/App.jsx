import React from "react";
import "./App.css";
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";
import emailjs from "@emailjs/browser";

function App(){

  async function handleSubmit(event){

    event.preventDefault();

    try{
      const formData=event.target;

      await emailjs.sendForm(process.env.SERVICE_ID , process.env.TEMPLATE_ID , formData , process.env.PUBLIC_KEY);
      console.log('Success...');
    }
    catch (err) {
      console.log('ERROR', err);
    }

  }

  return (
    <div className="App">

      <h1 className="contact_title">Contact Us</h1>
      <form className="contact_form" onSubmit={handleSubmit}>
      <label htmlFor="user_name">Your Name</label>
      <input name="user_name" id="user_name" type="text"></input>

      <label htmlFor="user_email">Your Email</label>
      <input name="user_email" id="user_email" type="email" placeholder="name@example.com"></input>

      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"></textarea>

      <Button variant="contained" type="submit" endIcon={<SendIcon />} className="send_btn">Send</Button>
      </form>
      
    </div>
  );
}

export default App;
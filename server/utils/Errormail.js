const axios = require("axios");
const moment = require("moment");
const nodemailer = require("nodemailer");
const express = require("express");

const sendErrorEmail = async (email, action) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ghattiganesh8@gmail.com",
        pass: "gecy jkfr fzmy dcwf",
      },
    });

    const mailOptions = {
      from: "ghattiganesh8@gmail.com",
      to: "ganeshghatti6@gmail.com, ghattiganesh8@gmail.com",
      subject: "Error Alert - Action Failed",
      html: `
        <p>Alert</p>
        <p>A user with email ${
        email ? email : "Email not available"
      } attempted to ${action} </p>
      
        <p>Message: ${
            action ? action : "No message provided"
        }</p>        
        <p>Please investigate and take necessary actions.</p>
        <p>Warm regards,</p>
        <p>Beliverz Notification System</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error("Error sending error email:", error.message);
    return false;
  }
};

module.exports = { sendErrorEmail };

"use client";
import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Message:", message);
    console.log("name:", name);
  };
  return (
    <div
      id="contact"
      className=" w-11/12 p-3 m-auto flex rounded-2xl mb-5 mt-5 h-[50rem]"
    >
      <div className="flex w-1/2 max-h-[55vh] h-[50rem] mx-2 my-auto p-5 items-center flex-col gap-5 rounded-2xl bg-red-300"></div>
      <form
        onSubmit={handleSubmit}
        className="flex w-1/2 max-h-[55vh] h-full mx-2 my-auto p-5 items-center flex-col gap-5 bg-[#76a0e3] rounded-2xl"
      >
        <div className="flex flex-col w-full">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            className="rounded-lg h-10 p-2 mt-1"
            placeholder="Enter your name"
          />
        </div>
        <div className="flex flex-col w-full">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className="rounded-lg h-10 p-2 mt-1"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col w-full flex-1">
          <label>Message/Query:</label>
          <textarea
            value={message}
            onChange={handleMessageChange}
            className="rounded-lg h-full max-h-45 overflow-y-auto p-3 mt-1"
            placeholder="Enter your message/query"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-black text-white w-full rounded-3xl h-10"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;

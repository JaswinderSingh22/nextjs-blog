"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

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
  };

  const socialLinks = [
    { icon: faTwitter, link: "your_twitter_link" },
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/jaswinder-singh-8a8b90167?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9Yyhx5%2F5QMeWstLQz6kJpQ%3D%3D",
    },
    { icon: faGithub, link: "https://github.com/JaswinderSingh22" },
    { icon: faEnvelope, link: "kkk" },
    { icon: faWhatsapp, link: "kkk" },
  ];
  return (
    <div
      id="contact"
      className=" w-11/12 p-3 m-auto flex rounded-2xl mb-5 mt-5 h-[50rem]"
    >
      <div className="flex flex-col justify-between w-1/2 max-h-[55vh] h-[50rem] mx-2 my-auto p-5   rounded-2xl bg-red-300">
        <div>
          LoreLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </div>
        <div className="gap-5 mx-2 flex justify-around">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={item.icon}
                size="3x"
                className="mr-[10px] cursor-pointer text-white"
              />
            </a>
          ))}
        </div>
      </div>
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

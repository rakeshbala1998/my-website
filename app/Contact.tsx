"use client";

import { useState } from "react";
import LINKEDIN from "../public/linkedin.svg";
import GITHUB from "../public/github.svg";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendStatus, setSendStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (name !== "" && email !== "" && message !== "") {
      setSendStatus("loading");
      let data = {
        name,
        email,
        message,
      };
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const { error } = await res.json();

        if (error) {
          setSendStatus("failed");
          setTimeout(() => {
            setSendStatus("");
          }, 2000);
          return;
        }
        setSendStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setTimeout(() => {
          setSendStatus("");
        }, 2000);
      } catch (error) {
        setSendStatus("failed");
        setTimeout(() => {
          setSendStatus("");
        }, 2000);
      }
    }
  };

  return (
    <div className="w-screen mb-20">
      <div className="text-black grid items-center lg:grid-cols-2 ml-auto mr-auto min-content lg:w-9/12 ">
        <div className="p-10">
          <div className="text-4xl font-bold text-center mb-10">LETS TALK</div>
          <div className="text-base justify-center">
            If you liked my portfolio and would want to work with me, then drop
            me a message!
          </div>
          <div>
            <div className="flex justify-center pt-10 h-24">
              <a
                href="https://www.linkedin.com/in/rakesh-balamurugan/"

                rel="noreferrer"
                target="_blank"
              >
                <LINKEDIN className="fill-black h-20 transition-all hover:h-24 hover:-translate-y-2" />
              </a>{" "}
              <a
                href="https://github.com/rakeshbala1998"
                rel="noreferrer"
                target="_blank"
              >
                <GITHUB className="fill-black h-[5.5rem] -translate-y-1 transition-all hover:h-24 hover:-translate-y-2" />
              </a>
            </div>
            <div></div>
          </div>
        </div>
        <div className="rounded-lg border-slate-300/40 bg-no-repeat bg-gradient-to-r to-slate-300/10 from-transparent lg:text-xl p-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name:
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm text-black"
                type="text"
                id="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email:
              </label>
              <input
                className="w-full rounded-lg border-gray-200 p-3 text-sm text-black"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message:
              </label>
              <textarea
                className="w-full h-72 rounded-lg border-gray-200 p-3 text-sm text-black"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Message"
              ></textarea>
            </div>
            <input
              className={`rounded-full w-full min-w-[10em] h-20 min-h-[4em] relative flex flex-wrap justify-around items-center transition-all bg-size-200 bg-pos-0 hover:bg-pos-100 lg:text-xl font-bold ${
                sendStatus === "failed"
                  ? "bg-rose-700"
                  : sendStatus === "success"
                  ? "bg-green-400"
                  : "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              }`}
              type="submit"
              value={
                sendStatus === "loading"
                  ? "Sending...."
                  : sendStatus === "failed"
                  ? "Failed to Send"
                  : sendStatus === "success"
                  ? "Sent successfully"
                  : "Get In Touch"
              }
            />
          </form>
        </div>
      </div>
    </div>
  );
}

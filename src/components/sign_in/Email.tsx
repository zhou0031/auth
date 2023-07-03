"use client";
import { useState, forwardRef } from "react";
import { MdOutlineEmail } from "react-icons/md";

const emailRegx = /^[A-Za-z\._\-0-9]*[@][A-Za-z0-9]*[\.][a-z]{2,9}$/;

function Email(props: any, emailRef: any) {
  const [valid, setValid] = useState(false);
  function checkEmailFormat(email: string) {
    email.match(emailRegx) ? setValid(true) : setValid(false);
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <label htmlFor="email">Email</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <MdOutlineEmail />
          </div>
          <input
            {...props}
            ref={emailRef}
            type="text"
            id="email"
            name="email"
            className="h-10 p-2.5 pl-10 focus:outline-sky-500"
            onInput={(e) => checkEmailFormat(e.currentTarget.value)}
          />
        </div>
      </div>
      <div
        id="email-alert"
        className={`${valid ? "hidden" : ""} text-red-700 font-medium`}
      >
        输入正确的email
      </div>
    </div>
  );
}
export default forwardRef(Email);

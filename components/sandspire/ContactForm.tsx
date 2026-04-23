"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  const field =
    "h-[52px] w-full rounded-[22px] border border-transparent bg-[rgba(119,119,119,0.14)] px-6 text-[12px] font-medium text-[#e6ddd0] placeholder:text-[#777777] outline-none focus:border-white/25";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium tracking-[-0.02em] text-[#444444]">First Name</span>
          <input name="firstName" placeholder="First Name" className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium tracking-[-0.02em] text-[#444444]">Last Name</span>
          <input name="lastName" placeholder="Last Name" className={field} />
        </label>
      </div>

      <div className="flex flex-col gap-7">
        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium tracking-[-0.02em] text-[#444444]">Email</span>
          <input
            name="email"
            type="email"
            placeholder="johndoe@gmail.com"
            className={field}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-[12px] font-medium tracking-[-0.02em] text-[#444444]">Message</span>
          <textarea
            name="message"
            placeholder="Type your message here"
            rows={5}
            className={`min-h-[121px] resize-none py-[19px] ${field}`}
          />
        </label>

        <button
          type="submit"
          className="flex h-[52px] w-full items-center justify-center rounded-[22px] bg-[#ff5e00] text-[12px] font-semibold tracking-[-0.02em] text-[#faf3e8] transition-opacity hover:opacity-90 disabled:opacity-60"
          disabled={status === "submitted"}
        >
          Submit
        </button>
      </div>

      {status === "submitted" ? (
        <p className="pt-1 text-center text-sm text-[#e6ddd0]/80">Thanks! Your message is ready to send.</p>
      ) : null}
    </form>
  );
}

<<<<<<< HEAD
import React from 'react';

const Contact = () => {
=======
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Form submitted:", formData);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setIsSuccess(false), 3000);
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
>>>>>>> 508b4ff (update for vercel)
  return (
    <section className="pt-12 text-neutral-400">
      <h1 className="h1 text-center pt-12 text-neutral-400 uppercase">
        Contact
      </h1>
      <div className="container px-1 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-contact bg-cover bg-center rounded-lg overflow-hidden sm:mr-10 p-6 flex items-end justify-start relative">
          <div className="bg-white relative flex flex-wrap py-4 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="font-semibold uppercase tracking-widest text-xs">
                Head office
              </h2>
              <p className="mt-3">4190 54th Ave N Saint Petersburg, FL 33714</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="font-semibold tracking-widest text-xs">EMAIL</h2>
              <p className="text-primary-300 leading-relaxed">
                contact@colonialfurnitureinc.com
              </p>
              <h2 className="font-semibold tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">(612)404-1222</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-lg mb-1 font-medium capitalize">
            Request a callback
          </h2>
          {/* <p className="leading-relaxed mb-5 text-gray-600">
            Post-ironic portland shabby chic echo park, banjo fashion axe
          </p> */}
<<<<<<< HEAD
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="inline-flex text-white bg-primary-200 border-0 py-2 px-6 focus:outline-none hover:bg-primary-100 rounded text-lg items-center justify-center">
            Leave a Message
          </button>
=======
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label className="leading-7 text-sm text-gray-600">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              ></textarea>
            </div>

            {isSuccess && (
              <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg transition-opacity duration-300">
                Message sent successfully!
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`inline-flex w-full text-white border-0 py-2 px-6 focus:outline-none rounded text-lg items-center justify-center ${
                isSubmitting
                  ? "bg-primary-300 cursor-not-allowed"
                  : "bg-primary-200 hover:bg-primary-100"
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </>
              ) : (
                "Leave a Message"
              )}
            </button>
          </form>
>>>>>>> 508b4ff (update for vercel)
          <p className="text-xs text-gray-400 mt-3">
            Chicharrones blog helvetica normcore iceland tousled brook viral
            artisan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

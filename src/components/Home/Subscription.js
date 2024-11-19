"use client";
import Link from "next/link";
import React, { useState } from "react";
import { subscribeNewsletter } from "../../lib/actions";
import { ImSpinner3 } from "react-icons/im";

const Subscription = () => {
  const [subscribed, setSubscribed] = useState({
    error: false,
    loading: false,
    status: "Subscribe",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const subscribedEmail = e.target.email.value;

    if (!subscribedEmail) {
      setSubscribed({
        error: true,
        loading: false,
        status: "Please enter your email",
      });
      setTimeout(() => {
        setSubscribed((prevState) => ({
          ...prevState,
          error: false,
          status: "Subscribe",
        }));
      }, 3000);
      return;
    }

    const formData = new FormData();
    formData.append("email", subscribedEmail);

    setSubscribed({
      error: false,
      loading: true,
      status: "Subscribing...",
    });

    const response = await subscribeNewsletter(formData);

    if (response.success) {
      setTimeout(() => {
        setSubscribed((prevState) => ({
          ...prevState,
          loading: false,
          status: "Subscribed!!",
        }));
        e.target.email.value = "";
      }, 1000);
    } else {
      setTimeout(() => {
        setSubscribed({
          error: true,
          loading: false,
          status: response.message,
        });
        e.target.email.value = "";
      }, 4000);
    }
    setTimeout(() => {
      setSubscribed({
        loading: false,
        error: false,
        status: "Subscribe",
      });
    }, [5000]);
  };

  return (
    <div className="container-ack">
      <div className="bg-black rounded-md grid md:grid-cols-12 py-8 px-7">
        <div className="md:col-span-7">
          <p className="font-semibold text-white text-3xl">to get updated</p>
          <p className="text-sm text-white">
            Enter your email to get the latest updates, news & articles.
          </p>
        </div>
        <div className="md:col-span-5 md:pt-0 pt-5">
          <form
            onSubmit={handleSubmit}
            className="md:flex space-x-3 justify-between"
          >
            <div className="w-full">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="outline-none p-2  text-white bg-transparent border border-white w-full rounded-md placeholder:text-gray px-4"
              />
            </div>

            <div className="flex justify-end w-full">
              {/* <button className=" button-1  px-12 py-2 rounded-md">
                <div className="eff-1"></div>
                <span className="text-base flex items-center font-semibold">
                  {subscribed.loading ?? <ImSpinner3 />}
                  {subscribed.error ? "Subscribe" : subscribed.status}
                </span>
              </button> */}
              <button className="relative inline-flex items-center justify-start px-5 py-2 overflow-hidden font-medium transition-all bg-orange-400 rounded-xl hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-orange-500 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  {subscribed.loading ?? <ImSpinner3 />}
                  {subscribed.error ? "Subscribe" : subscribed.status}
                </span>
              </button>
            </div>
          </form>
          <div
            className={`pl-2 mt-2 ${!subscribed.error ? "text-orange-500" : "text-red-500"}`}
          >
            {subscribed.error && subscribed.status}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;

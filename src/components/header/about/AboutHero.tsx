"use client";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const timeZones = [
  { name: "London", zone: "Europe/London" },
  { name: "Nairobi", zone: "Africa/Nairobi" },
  { name: "Lagos", zone: "Africa/Lagos" },
  { name: "Washington", zone: "America/Detroit" }, // Using New York as a common US East Coast time zone
  { name: "Cape Town", zone: "Africa/Johannesburg" }, // Cape Town uses the same time zone as Johannesburg
];

const AboutHero = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function getCurrentTimeForTimeZone(timeZone: any) {
    const now = new Date();

    // Format the date to a localized string that includes the full date and time,
    // then create a new Date object from that string.
    // This effectively converts the date to the target timezone's local time.
    const dateInTimeZone = new Date(now.toLocaleString("en-US", { timeZone }));

    // Return the ISO 8601 string from this new Date object.
    // The toISOString() method returns the string in UTC, but since we created the
    // date object from the local time string of the target timezone, it will
    // represent the correct time.
    return dateInTimeZone;
  }

  const [london, setLondon] = useState(
    getCurrentTimeForTimeZone(timeZones[0].zone)
  );
  const [nairobi, setNairobi] = useState(
    getCurrentTimeForTimeZone(timeZones[1].zone)
  );
  const [lagos, setLagos] = useState(
    getCurrentTimeForTimeZone(timeZones[2].zone)
  );
  const [washington, setWashington] = useState(
    getCurrentTimeForTimeZone(timeZones[3].zone)
  );
  const [capetown, setCapetown] = useState(
    getCurrentTimeForTimeZone(timeZones[4].zone)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setLondon(getCurrentTimeForTimeZone(timeZones[0].zone));
      setNairobi(getCurrentTimeForTimeZone(timeZones[1].zone));
      setLagos(getCurrentTimeForTimeZone(timeZones[2].zone));
      setWashington(getCurrentTimeForTimeZone(timeZones[3].zone));
      setCapetown(getCurrentTimeForTimeZone(timeZones[4].zone));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="w-full min-h-[600px] relative z-0">
      <img
        src="/incident_management_bg.png"
        alt="incident management"
        className="w-full h-full object-cover absolute z-[-1] inset-0"
      />
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center h-full px-4 md:px-6 lg:px-20 xl:px-20 py-20">
        <h1 className="text-white md:text-[60px] text-[30px] font-bold">
          About Us
        </h1>
        <p className="text-white text-center  md:text-lg">
          AI-native security that speaks your language. Protecting organizations{" "}
          <br className="hidden md:block" /> worldwide with explainable AI,
          natural language rules, and real-time{" "}
          <br className="hidden md:block" /> automation.
        </p>
        <div className="flex gap-4 text-[14px] sm:text-[16px] mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
            Request Demo
          </button>
          <button className="border-2 border-blue-500 text-blue-500 bg-white font-medium py-3 px-6 rounded-md transition-colors">
            Learn More
          </button>
        </div>{" "}
        <div className="bg-[#F7F8FD] min-h-[300px] w-full rounded-lg mt-20 p-5 md:p-10 space-y-5 ">
          <p className=" text-lg font-bold text-center">
            Monitoring threats across timezones
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 place-items-center">
            <div className="flex flex-col items-center gap-3">
              <Clock value={london} />
              <div>
                <p className="font-bold text-center">London</p>
                <p className=" text-center">
                  {moment(london).format("HH:MM:SS a")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock value={nairobi} />
              <div>
                <p className="font-bold text-center">Nairobi</p>
                <p className=" text-center">
                  {moment(nairobi).format("HH:MM:SS a")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock value={washington} />
              <div>
                <p className="font-bold text-center">Washington</p>
                <p className=" text-center">
                  {moment(washington).format("HH:MM:SS a")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock value={lagos} />
              <div>
                <p className="font-bold text-center">Lagos</p>
                <p className=" text-center">
                  {moment(lagos).format("HH:MM:SS a")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <Clock value={capetown} />
              <div>
                <p className="font-bold text-center">Capetown</p>
                <p className=" text-center">
                  {moment(capetown).format("HH:MM:SS a")}
                </p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;

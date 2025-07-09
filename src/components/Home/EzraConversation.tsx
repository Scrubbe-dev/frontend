"use client";
import React from "react";
import Cbutton from "../ezra-landing/Cbutton";
import { BsSendFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const EzraConversation = () => {
  return (
    <section className="px-4 md:px-6 lg:px-20 xl:px-20 py-20 relative overflow-clip z-10 h-auto bg-[url('/brand_bg.png')] bg-center bg-no-repeat bg-cover">
      <div className="bg-[url('/talk_bg.png')] bg-center bg-no-repeat bg-cover absolute inset-0 -z-10 " />
      <div className=" max-w-[1440px] mx-auto gap-y-8 flex flex-col items-center ">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center w-full"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold  text-center mb-2 text-white"
            variants={itemVariants}
          >
            Talk to Ezra. Investigate Threats in Plain English
          </motion.h2>
          <motion.div
            className="w-24 h-2 bg-teal-400 mx-auto rounded-full"
            variants={itemVariants}
          />
          <motion.p
            className=" text-lg text-white font-medium text-center mt-3"
            variants={itemVariants}
          >
            Security conversations supercharged with Ezra
          </motion.p>
          <motion.div
            className=" w-full bg-black h-[400px] md:h-[700px] rounded-lg overflow-clip flex flex-col relative mt-10 "
            variants={itemVariants}
          >
            <div className=" h-6 w-full bg-colorScBlue" />
            <div className=" flex-1 flex flex-col w-full h-full gap-4 p-5">
              <div className="flex-1 flex flex-col gap-3 w-full mt-4 h-full">
                <div className="flex justify-end">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      type: "spring",
                      duration: 0.4,
                      delay: 2,
                      damping: 4,
                      stiffness: 60,
                    }}
                    className=" bg-zinc-600 w-fit p-2 rounded-md rounded-tl-none"
                  >
                    <p className=" text-[50%] sm:text-[100%] text-white">
                      Era summarize the incident for today
                    </p>
                    <p className=" text-[30%] sm:text-[80%] text-white text-end">
                      {new Date(Date.now())
                        .toISOString()
                        .replace("T", " ")
                        .replace("Z", "")}
                    </p>
                  </motion.div>
                </div>
                <div className="flex h-[60%] sm:h-[70%] md:max-h-[500px] ">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      type: "spring",
                      duration: 0.4,
                      delay: 3.5,
                      damping: 4,
                      stiffness: 40,
                    }}
                    className="md:w-[50%] w-[60%] h-[90%] bg-[#23489B] rounded-lg p-3 space-y-2"
                  >
                    <p className=" text-white font-medium text-[60%] sm:text-[100%] ">
                      Incident Summary for today{" "}
                    </p>
                    <div className=" w-full bg-white max-h-[85%] overflow-scroll rounded-md p-4">
                      <div className=" w-full space-y-2">
                        <motion.div
                          className=" text-[50%] sm:text-[80%]  text-zinc-500 space-y-2"
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 0.3,
                          }}
                        >
                          <p>
                            As of 2025-07-01T08:16:51.965Z, Scrubbe recorded 9
                            incidents, with 2 critical, 3 high, and 4 moderate
                            or low severity cases. The day reveals a pattern of
                            automated credential attacks, device fingerprint
                            reuse, and impossible travel anomalies, all
                            signaling heightened fraud risk across user
                            sessions.
                          </p>
                          <hr />
                          <p>
                            A widespread credential stuffing campaign was
                            detected in the early hours, targeting 46 user
                            accounts with over 350 failed login attempts.
                            Despite originating from distributed IPs, Ezra
                            identified a reused fingerprint ID in 93% of the
                            events — signaling automation tools behind the
                            activity. The attack attempted logins across 12
                            different endpoints in under 10 minutes. A rule was
                            triggered based on multi-account login failures from
                            the same fingerprint, and Ezra recommends blocking
                            fingerprint scrubbe_fp_39A12B and applying
                            throttling at the login API.
                          </p>
                          <p>
                            Simultaneously, the system flagged suspicious
                            lateral movement by a device using fingerprint ID
                            scrubbe_fp_C75FF9. This fingerprint logged into 7
                            unrelated accounts, including 2 admin profiles,
                            within a 15-minute window across different regions.
                            The triggered rule suggested possible account
                            hijacking or insider misuse, and the associated
                            playbook initiated alerts, logs, and MFA challenges.
                          </p>

                          <p>
                            Adding to the day’s anomalies, a high-risk
                            “impossible travel” event was recorded for user
                            kelvin.obasi@client.com. The account was accessed
                            from Lagos, Nigeria and then Sydney, Australia, just
                            16 minutes apart. Ezra confirmed a device
                            fingerprint mismatch and IP inconsistency, flagging
                            it as a likely case of session hijacking or VPN
                            spoofing.
                          </p>

                          <p>Ezra also observed subtle behavioral drift:</p>
                          <ul className=" list-disc list-inside">
                            <li>
                              Session token anomalies were up 62% over baseline
                            </li>
                            <li>
                              Four new IP addresses associated with flagged
                              regions attempted to access admin APIs
                            </li>
                            <li>
                              Three dormant accounts attempted sensitive
                              endpoint access after 90+ days
                            </li>
                            <li>
                              One VIP user triggered new device alerts from a
                              suspicious location
                            </li>
                          </ul>
                          <br />
                          <strong>Ezra’s Summary Recommendation:</strong>
                          <div className=" border border-zinc-100 bg-zinc-50 rounded-md p-2">
                            <p className=" border-l-2 border-zinc-500 pl-2">
                              “There&apos;s an elevated risks tied to automated
                              credential abuse, fingerprint spoofing, and
                              session irregularities. Security teams should
                              escalate fingerprint correlation, enable adaptive
                              MFA for high-privilege users, and review the last
                              24 hours of incident logs for patterns linked to
                              TOR nodes and reused session tokens.”
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <p className=" text-white text-[60%] sm:text-[100%]  text-end">
                      {new Date(Date.now())
                        .toISOString()
                        .replace("T", " ")
                        .replace("Z", "")}
                    </p>
                  </motion.div>
                </div>
                <div
                  className="flex gap-3 items-center absolute w-[95%] bottom-10"
                  // initial={{ opacity: 0, y: 20 }}
                  // whileInView={{ opacity: 1, y: 0 }}
                  // viewport={{ once: true, amount: 0.3 }}
                  // transition={{ duration: 0.7, delay: 2.8 }}
                >
                  <div className=" flex-1 bg-zinc-800 flex gap-3 items-center border border-zinc-600 rounded-lg h-10 px-2">
                    <img src="ezrastar.svg" />
                    <p className="  text-zinc-400  ">
                      <TypeAnimation
                        sequence={[
                          `Era summarize the incident for today`, // Types 'One'
                          2000, // Waits 1s
                          ``, // Types 'One'
                          4000, // Waits 1s
                          `Era summarize the incident for today`, // Types 'One'
                          2000, // Waits 1s
                          () => {},
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        className="link"
                        style={{ display: "inline-block", fontSize: "100%" }}
                      />
                    </p>
                  </div>
                  <div className=" size-10 rounded-lg flex justify-center items-center bg-colorScBlue">
                    <BsSendFill className=" text-white" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div className="mt-8" variants={itemVariants}>
            <Cbutton>Start Investigation with Ezra</Cbutton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default EzraConversation;

"use client";
import React from "react";
import Hero from "./Hero";
import AuthenticationFeature from "./AuthenticationFeature";
import FAQ from "./FAQ";
import { useRouter } from "next/navigation";

const AuthenticationSDK = () => {
  const router = useRouter();
  return (
    <div className="bg-white">
      <Hero />
      <AuthenticationFeature />
      <FAQ />
      <div
        className={`w-full  bg-cover bg-center  bg-gradient-to-r from-[#6A5ACD] to-[#352D67]`}
      >
        <article className=" rounded-2xl p-4 md:p-6 text-center py-4">
          <h2 className="text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] font-bold text-white mb-1">
            Ready to Get Started?{" "}
          </h2>
          <div className="w-28 h-1 bg-emerald-400 mx-auto mb-4"></div>
          <p className="text-sm sm:text-base text-white max-w-3xl mx-auto mb-4">
            Join thousands of developers who trust Scrubbe Auth for their
            authentication needs. Secure, flexible, and easy to implement
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => router.push("/auth/signin")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg text-center transition-colors"
            >
              Sign up for Free
            </button>
            <button className="bg-transparent border border-blue-600 text-blue-600 bg-white font-medium py-3 px-8 rounded-lg text-center transition-colors">
              Go the Doc
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AuthenticationSDK;

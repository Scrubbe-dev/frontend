/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef<any | null>(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div className=" h-screen bg-[#000017] w-full">
      <motion.div
        initial={{ scale: 0.3 }}
        whileInView={{ scale: 1 }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
        viewport={{ once: true }}
        className=" container mx-auto flex justify-center items-center h-full rounded-2xl overflow-clip relative"
      >
        <video
          ref={videoRef}
          src="/video/scrubbe-ims.mp4"
          width="640"
          height="360"
          className=" h-full w-full "
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        <div
          className={` size-16 md:size-40 rounded-full justify-center items-center absolute bg-black/50 text-xl md:text-5xl text-white/70 ${
            isPlaying ? "hidden" : "flex"
          }`}
          onClick={handlePlayPause}
        >
          <FaPlay className=" md:translate-x-2" />
        </div>
      </motion.div>
    </div>
  );
};

export default VideoSection;

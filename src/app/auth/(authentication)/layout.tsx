/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ReactNode, Suspense, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import AnalyticsSidebar from "@/components/auth/AnalyticsSidebar";
// import AuthTabs from "@/components/auth/AuthTabs";
// import OverlayWrapper from "@/components/auth/OverlayWrapper"; // Adjust path as needed
// import ImsSidebar from "@/components/auth/ImsSidebar";

// const IS_STANDALONE = process.env.NEXT_PUBLIC_IS_STANDALONE === "true";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <div className="w-full h-auto relative">
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded as any}
          options={{
            background: {
              color: {
                value: "#060709",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#06EEFD",
              },
              links: {
                color: "#06EEFD",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      <Suspense fallback={<div>Loading...</div>}>
        {/* <OverlayWrapper
          sidebarContent={IS_STANDALONE ? <ImsSidebar /> : <AnalyticsSidebar />}
        >
          {IS_STANDALONE ? null : <AuthTabs />} */}
        <div className=" w-full min-h-screen flex justify-center items-center bg-[#060709]">
          <div className="mx-auto max-w-xl bg-neutral-900 rounded-lg z-50 w-full">
            {children}
          </div>
        </div>
        {/* </OverlayWrapper> */}
      </Suspense>
    </div>
  );
}

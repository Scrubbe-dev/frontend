import { User, Key, Globe } from "lucide-react";

const SecurityDashboard = () => {
  return (
    <section className="w-full h-full bg-[#3C4399] flex flex-col items-center justify-center">
      <article className="w-[95%] h-[95%] p-2 flex flex-col bg-white">
        <h2 className="text-black text-[8px] sm:text-[12px] font-semibold mb-0.5 sm:mb-1.5">
          See threats in motion. Understand risk in context. Act from your
          dashboard
        </h2>

        <div className="grid grid-cols-2 grid-rows-2 gap-0.5 sm:gap-1.5 flex-grow">
          {/* Account Take Over Panel */}
          <div className="bg-blue-400 rounded-lg p-0.5 sm:p-1.5 flex flex-col">
            <div className="flex items-center mb-0.5">
              <User className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 text-white" />
              <span className="text-white text-[10px] sm:text-[11px] font-medium">
                Account take over
              </span>
            </div>
            <p className="text-white text-[6px] sm:text-[8px] leading-[1.1] sm:leading-tight">
              Scrubbe detects account takeovers by analyzing login behavior, IP
              location, and device fingerprints in real time. It flags
              suspicious patterns like impossible travel, repeated login
              failures, and unknown devices.
            </p>
            <p className="text-white text-[6px] sm:text-[8px] leading-[1.1] sm:leading-tight mt-0.5">
              When risk is high, it can automatically trigger alerts, block
              access, or escalate to your security team.
            </p>
          </div>

          {/* Credential Stuffing Panel */}
          <div className="bg-green-700 rounded-lg p-1.5 flex flex-col">
            <div className="flex items-center mb-0.5">
              <Key className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 text-white" />
              <span className="text-white text-[10px] sm:text-[11px] font-medium">
                Credential Stuffing
              </span>
            </div>
            <p className="text-white text-[6px] sm:text-[8px] leading-[1.1] sm:leading-tight">
              Scrubbe identifies credential stuffing by tracking rapid-fire
              login attempts across users and dashboards. It flags logins using
              known breached credentials or reused email-password combos.
            </p>
            <p className="text-white text-[6px] sm:text-[8px] leading-[1.1] sm:leading-tight mt-0.5">
              Proxies, anonymizers, and IP reputation are analyzed to stop
              attacks before access is granted.
            </p>
          </div>

          {/* Fake Account Creation Panel */}
          <div className="bg-blue-100 rounded-lg p-1.5 flex flex-col">
            <div className="flex items-center mb-0.5">
              <User className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 text-gray-700" />
              <span className="text-gray-700 text-[10px] sm:text-[11px] font-medium">
                Fake Account Creation
              </span>
            </div>
            <p className="text-gray-700 text-[6px] sm:text-[8px] leading-[1.1] sm:leading-tight">
              Scrubbe monitors every payment attempt in real time, detecting
              patterns like multiple failures, suspicious velocity, and
              blacklisted cards or BINs.
            </p>
            <p className="text-gray-700 text-[6px] sm:text-[8px] leading-[1.1] sm:leading-tight mt-0.5">
              It flags high-risk behaviors before funds move, protecting you
              from chargebacks, abuse, and payment scams.
            </p>
          </div>

          {/* Session Hijacking Panel */}
          <div className="bg-blue-500 rounded-lg p-1.5 flex flex-col">
            <div className="flex items-center mb-0.5">
              <Globe className="h-2.5 w-2.5 sm:h-3 sm:w-3 mr-0.5 text-white" />
              <span className="text-white text-[10px] sm:text-[11px] font-medium">
                Session Hijacking
              </span>
            </div>
            <p className="text-white text-[6px] sm:text-[8px] leading-[1.1] sm:leading-tight">
              Scrubbe tracks every session with unique device fingerprints, IP
              behavior and login context. It flags anomalies like token reuse
              from new locations, sudden device changes or impossible travel
              logins.
            </p>
            <p className="text-white text-[6px] sm:text-[8px] leading-[1.1] sm:leading-tight mt-0.5">
              When hijacking is suspected, Scrubbe can instantly trigger
              re-authentication, block access or escalate incident
              automatically.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default SecurityDashboard;

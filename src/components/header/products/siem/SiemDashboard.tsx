import SiemAdvanced from "./SiemAdvanced";
import SiemComprehensive from "./SiemComprehensive";
import SiemPlatform from "./SiemPlatform";
import SiemChoose from "./SiemChoose";

const SiemDashboard = () => {
  return (
    <>
      <div className="w-full h-auto bg-white">
        <section className="h-full w-screen max-w-[1440px] mx-auto flex flex-col justify-center items-center">
          <SiemAdvanced />
          <SiemComprehensive />
          <SiemPlatform />
          <SiemChoose />
        </section>
      </div>
    </>
  );
};

export default SiemDashboard;

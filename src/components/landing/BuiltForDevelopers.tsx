//import Image from "next/image";

const BuiltForDevelopers = () => {
  return (
    <div className="w-full h-auto bg-white">
      <section className="w-full max-w-[1440px] mx-auto h-[800px] lg:h-[600px] bg-[linear-gradient(to_bottom,#DBEAFE_45%,white_45%)] py-16 px-4 grid grid-rows-[2fr_4fr] lg:grid-rows-[3fr_7fr] grid-cols-1 justify-items-center gap-4">
        <aside
          className="row-start-1 row-end-2 w-full 
 
 grid 
                 grid-cols-2 grid-rows-2 
                 lg:grid-cols-4 lg:grid-rows-1
                 [grid-template-areas:'aaa_bbb'_'ccc_ddd']
                 lg:[grid-template-areas:'aaa_bbb_ccc_ddd']"
        >
          <menu className="bg-blue-300 [grid-area:aaa]">AAA</menu>
          <menu className="bg-yellow-300 [grid-area:bbb]">BBB</menu>

          <menu className="bg-red-300 [grid-area:ccc]">CCC</menu>
          <menu className="bg-[#E6D3B3] [grid-area:ddd]">DDD</menu>
        </aside>
        <article className="row-start-2 row-end-3 bg-green-300 w-full">
          Article
        </article>
      </section>
    </div>
  );
};

export default BuiltForDevelopers;

const projects = [
  {
    category: "UI · Frontend",
    title: "Dashboard analytics",
    color: "bg-[#e6eadb]",
    mark: "01",
  },
  {
    category: "Web design · Frontend",
    title: "Landing page produk",
    color: "bg-[#e9e3d8]",
    mark: "02",
  },
  {
    category: "React · UI",
    title: "Task management app",
    color: "bg-[#dce7e1]",
    mark: "03",
  },
];

export default function WorkSection() {
  return (
    <section
      id="karya"
      className="bg-[#f5f6ef] px-[7.1%] py-24 max-[900px]:px-[5%] max-[640px]:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#71864a]">
          03 / Proyek pilihan
        </p>
        <div className="mb-12 flex items-end justify-between gap-8 max-[640px]:mb-8 max-[640px]:flex-col max-[640px]:items-start">
          <h2 className="m-0 max-w-[500px] font-manrope text-[clamp(38px,5vw,62px)] font-semibold leading-[1.05] tracking-[-3px] text-[#263b30]">
            Beberapa hal yang bisa saya bangun.
          </h2>
          <p className="mb-1 max-w-[330px] text-sm leading-[1.8] text-[#66716a]">
            Contoh area proyek. Ganti dengan proyek nyata, detail, dan tautannya.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
          {projects.map((project) => (
            <article key={project.mark}>
              <div
                className={`grid aspect-[1.15] place-items-center ${project.color}`}
                aria-hidden="true"
              >
                <span className="font-manrope text-6xl font-semibold tracking-[-4px] text-[#71864a]/70">
                  {project.mark}
                </span>
              </div>
              <p className="mb-2 mt-5 text-[10px] font-bold uppercase tracking-[1px] text-[#71864a]">
                {project.category}
              </p>
              <h3 className="m-0 max-w-[330px] font-manrope text-lg font-bold leading-[1.4] text-[#263b30]">
                {project.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

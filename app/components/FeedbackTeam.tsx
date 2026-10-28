const skills = [
  {
    number: "01",
    title: "Zidan",
    description:
      "Jo sangat jago dalam pertandingan 1 lawan 1.",
    label: "Goldlaner",
  },
  {
    number: "02",
    title: "Faldi",
    description:
      "EXP laner yang berbakat.",
    label: "Jungler",
  },
  {
    number: "03",
    title: "Adriel",
    description:
      "Multitalenta dan berjasa buat tim.",
    label: "Midlane",
  },
  
];

export default function FeedbackTeam() {
  return (
    <section
      id="keahlian"
      className="bg-white px-[7.1%] py-24 max-[900px]:px-[5%] max-[640px]:py-16"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 flex items-end justify-between gap-8 max-[640px]:mb-8 max-[640px]:flex-col max-[640px]:items-start">
          <h2 className="m-0 max-w-[500px] font-manrope text-[clamp(38px,5vw,62px)] font-semibold leading-[1.05] tracking-[-3px] text-[#263b30]">
            Feedback teman mabar.
          </h2>
          <p className="mb-1 max-w-[330px] text-sm leading-[1.8] text-[#66716a]">
            Fokus saya adalah menjadi explaner yang berdampak bagi tim.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 max-[760px]:grid-cols-1">
          {skills.map((skill, index) => (
            <article
              key={skill.title}
              className="border border-[#263b30]/15 p-7 transition-colors hover:bg-[#f5f6ef] max-[640px]:p-6"
            >
              <span className="text-[11px] font-bold text-[#82975b]">
                0{index + 1}
              </span>
              <h3 className="mb-3 mt-10 font-manrope text-xl font-bold text-[#263b30] max-[640px]:mt-7">
                {skill.title}
              </h3>
              <p className="mb-7 min-h-[72px] text-sm leading-[1.8] text-[#66716a]">
                {skill.description}
              </p>
              <p className="m-0 border-t border-[#263b30]/15 pt-4 text-[10px] font-semibold uppercase tracking-[.5px] text-[#71864a]">
                {skill.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative grid min-h-155 grid-cols-[1.1fr_.9fr] items-center gap-12 overflow-hidden bg-[#f5f6ef] px-[7.1%] py-20 max-[900px]:min-h-[560px] max-[900px]:gap-8 max-[900px]:px-[5%] max-[640px]:grid-cols-1 max-[640px]:gap-10 max-[640px]:py-14"
    >
      <div className="relative z-10">
        <p className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[1.5px] text-[#71864a]">
          <span className="size-2 rounded-full bg-[#82975b]" />
            Exp Lanner · Indonesia
        </p>
        <h1 className="mb-6 max-w-162.5 font-manrope text-[clamp(54px,7vw,88px)] font-semibold leading-[.98] tracking-[-5px] text-[#263b30] max-[640px]:text-[clamp(52px,15vw,72px)] max-[640px]:tracking-[-3px]">
          Halo, saya <span className="text-[#82975b]">Dani.</span>
          <br />
          Saya user x-borg dan Esmeralda.
        </h1>
        <p className="mb-8 max-w-122.5 text-sm leading-[1.9] text-[#66716a]">
          Saya exp pemberani dan tidak takut mati.
        </p>
        <div className="flex flex-wrap items-center gap-5">
          <a
            className="inline-flex min-h-12.5 items-center justify-center bg-[#263b30] px-6 text-xs font-bold text-white transition-colors hover:bg-[#3b5646] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82975b] focus-visible:ring-offset-2"
            href="/feedback-team"
          >
            Feedback Team <span aria-hidden="true" className="ml-4">↓</span>
          </a>
          <a
            className="text-xs font-bold text-[#263b30] underline decoration-[#82975b] underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#82975b]"
            href=""
          >
             
          </a>
        </div>
      </div>
      <div>

        </div>
      {/* <div
        className="relative mx-auto grid aspect-square w-full max-w-[390px] place-items-center overflow-hidden rounded-[48%_48%_4px_4px] bg-[#dfe7d2] max-[640px]:max-w-[330px]"
        aria-label="Ilustrasi abstrak portofolio Dani"
        role="img"
      >
        <div className="absolute size-[78%] rounded-full border border-[#71864a]/35" />
        <div className="absolute size-[59%] rounded-full border border-[#71864a]/35" />
        <div className="absolute left-[13%] top-[15%] size-[24%] rounded-full bg-[#c4d29e]" />
        <div className="absolute bottom-[-8%] right-[13%] h-[64%] w-[48%] rounded-t-[50%] bg-[#82975b]" />
        <div className="absolute bottom-[-8%] right-[25%] h-[46%] w-[24%] rounded-t-[50%] bg-[#dfe7d2]" />
        <span className="absolute left-[12%] top-[37%] font-manrope text-[clamp(25px,4vw,36px)] font-extrabold leading-[.95] tracking-[-2px] text-[#263b30]">
          BUILD
          <br />
          WITH
          <br />
          <span className="text-white">PURPOSE.</span>
        </span>
        <span className="absolute right-[17%] top-[20%] text-3xl text-[#71864a]" aria-hidden="true">
          ✳
        </span>
      </div> */}
    </section>
  );
}

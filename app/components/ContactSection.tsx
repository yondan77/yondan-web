export default function ContactSection() {
  return (
    <section
      id="kontak"
      className="bg-white px-[7.1%] py-24 max-[900px]:px-[5%] max-[640px]:py-16"
    >
      <div className="mx-auto flex max-w-6xl items-end justify-between gap-10 max-[640px]:flex-col max-[640px]:items-start">
        <div>
          <h2 className="m-0 max-w-[620px] font-manrope text-[clamp(38px,5vw,62px)] font-semibold leading-[1.05] tracking-[-3px] text-[#263b30]">
            Mari bangun sesuatu yang bermanfaat.
          </h2>
          <p className="mb-0 mt-5 max-w-[470px] text-sm leading-[1.8] text-[#66716a]">
            Terbuka untuk kolaborasi, proyek freelance, dan kesempatan baru.
          </p>
        </div>
        <p className="m-0 shrink-0 border border-[#263b30]/20 px-6 py-4 text-xs font-semibold text-[#66716a] max-[640px]:w-full max-[640px]:text-center">
          Email kontak belum dicantumkan
        </p>
      </div>
    </section>
  );
}

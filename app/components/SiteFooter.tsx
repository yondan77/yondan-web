export default function SiteFooter() {
  return (
    <footer className="bg-green-950 px-[7.1%] py-7 text-white max-[900px]:px-[5%]">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 max-[520px]:flex-col max-[520px]:items-start">
        <a
          className="font-manrope text-sm font-extrabold tracking-[-.5px]"
          href="#beranda"
          aria-label="Dani John, kembali ke atas"
        >
          <span className="text-green-200">Dani</span>{" "}
          <span className="text-white">Mabar</span>
        </a>
        <p className="m-0 text-[10px] text-white/65">
          © 2026 Dani John. Portofolio pribadi.
        </p>
        <a
          className="text-[10px] font-semibold text-white/80 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c4d29e]"
          href="#navbar"
        >
          Kembali ke atas ↑
        </a>
      </div>
    </footer>
  );
}

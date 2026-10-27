import "../globals.css";

export default function SiteHeader() {
  return (
    <header className="bg-white flex h-[84px] items-center justify-between border-b border-ink/10 px-[7.1%] max-[900px]:px-[5%]">
      <a
        className="inline-flex items-center gap-[10px] font-manrope text-[19px] font-extrabold tracking-[-1.2px]"
        href="#beranda"
        aria-label="Dani John, beranda"
      >
        <span className="text-red-600">
Dani
        </span>
                <span className="text-black">
John
        </span>

      </a>
      <nav
        className="ml-[130px] flex gap-[30px] max-[900px]:ml-0 max-[900px]:gap-5 max-[640px]:hidden"
        aria-label="Navigasi utama"
      >
        <a className="text-xs font-semibold text-[#606a65] transition-colors hover:text-[#71864a]" href="#tentang">Tentang</a>
        <a className="text-xs font-semibold text-[#606a65] transition-colors hover:text-[#71864a]" href="#keahlian">Keahlian</a>
        <a className="text-xs font-semibold text-[#606a65] transition-colors hover:text-[#71864a]" href="#karya">Proyek</a>
        <a className="text-xs font-semibold text-[#606a65] transition-colors hover:text-[#71864a]" href="#kontak">Kontak</a>
      </nav>
    </header>
  );
}

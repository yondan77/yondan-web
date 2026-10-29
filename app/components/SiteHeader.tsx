import "../globals.css";
import Dropdown from "./dropdown/Dropdown";

export default function SiteHeader() {
  return (
    <header className="bg-green-950 flex h-21 items-center justify-between border-b border-ink/10 px-[7.1%] max-[900px]:px-[5%]">
      <a
        className="inline-flex items-center gap-2.5 font-manrope text-[19px] font-extrabold tracking-[-1.2px]"
        href="/"
        aria-label="Dani John, beranda"
      >
        <span className="text-green-200">
Dani
        </span>
                <span className="text-white">
Mabar
        </span>

      </a>
      
      {/* <nav
        className="ml-[130px] flex gap-[30px] max-[900px]:ml-0 max-[900px]:gap-5 max-[640px]:hidden"
        aria-label="Navigasi utama"
      >
        <a className="text-xs font-semibold text-green-200 transition-colors hover:text-white" href="#tentang">Tentang</a>
        <a className="text-xs font-semibold text-green-200 transition-colors hover:text-white" href="#keahlian">Keahlian</a>
        <a className="text-xs font-semibold text-green-200 transition-colors hover:text-white" href="#karya">Proyek</a>
        <a className="text-xs font-semibold text-green-200 transition-colors hover:text-white" href="#kontak">Kontak</a>
      </nav> 
      <Dropdown/> */}
      <Dropdown/>
    </header>
  );
}

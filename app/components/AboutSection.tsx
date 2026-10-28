export default function AboutSection() {
  return (
    <section
      id="tentang"
      className="bg-[#f5f6ef] px-[7.1%] py-24 max-[900px]:px-[5%] max-[640px]:py-16"
    >
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[1.5px] text-[#71864a]">
          01 / Tentang saya
        </p>
        <div className="grid grid-cols-[.9fr_1.1fr] gap-16 max-[760px]:grid-cols-1 max-[760px]:gap-9">
          <h2 className="m-0 max-w-110 font-manrope text-[clamp(38px,5vw,62px)] font-semibold leading-[1.05] tracking-[-3px] text-[#263b30]">
            Saya suka mengubah ide menjadi pengalaman digital.
          </h2>
          <div>
            <p className="mb-9 max-w-147.5 text-[15px] leading-[1.9] text-[#66716a]">
              Saya adalah web developer yang menikmati proses membangun
              antarmuka dari awal: memahami kebutuhan, menyusun tampilan, lalu
              menerjemahkannya menjadi website yang cepat dan mudah digunakan.
            </p>
            <div className="grid grid-cols-3 gap-5 border-t border-[#263b30]/15 pt-5 max-[520px]:grid-cols-1">
              <div>
                <h3 className="mb-2 text-sm font-bold text-[#263b30]">Pendekatan</h3>
                <p className="m-0 text-xs leading-[1.7] text-[#66716a]">
                  Memulai dari kebutuhan pengguna dan tujuan produk.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold text-[#263b30]">Fokus</h3>
                <p className="m-0 text-xs leading-[1.7] text-[#66716a]">
                  Antarmuka web yang responsif, rapi, dan aksesibel.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-bold text-[#263b30]">Prinsip</h3>
                <p className="m-0 text-xs leading-[1.7] text-[#66716a]">
                  Kode yang mudah dipahami dan dirawat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
